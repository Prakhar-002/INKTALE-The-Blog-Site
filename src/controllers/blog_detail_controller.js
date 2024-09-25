/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';

//? Node modules
const mongoose = require('mongoose');

//? costume modules
const Blog = require('../models/blog_model.js');
const User = require('../models/user_model.js');
const markdown = require('../config/markdown_it_config.js');

// Retrieve and render the detail of a blog

const renderBlogDetail = async (req, res) => {

      try {

            // Destructure blogId from req params
            const { blogId } = req.params;

            // Handle the case where the provided blogId is not a valid Mongoose objectId
            const isValidObjectId = mongoose.Types.ObjectId.isValid(blogId);
            if (!isValidObjectId) {
                  return res.render('./pages/404');
            }

            // handle the case where no blog found with provided blogId
            const blogExists = await Blog.exists({ _id: new mongoose.Types.ObjectId(blogId) });

            if (!blogExists) {
                  return res.render('./pages/404');
            }

            // Retrieve blog detail and populate owner info
            const blog = await Blog.findById(blogId).populate({
                  path: 'owner',
                  select: 'name username profilePhoto'
            });

            // Retrieve more blog from blog owner
            const ownerBlogs = await Blog.find({ owner: { _id: blog.owner._id } })
                  .select('title reaction totalBookmarks owner readingTime createdAt')
                  .populate({
                        path: 'owner',
                        select: 'name username profilePhoto'
                  })
                  // Get more blog without current blog
                  .where('_id').nin(blogId)
                  .sort({ createdAt: 'desc' })
                  .limit(3);

            // Retrieves the session user's reacted blog 
            // and reading list to check if the session user has reacted the blog
            // or added to reading list
            let user;
            if (req.session.user) {
                  user = await User.findOne({ username: req.session.user.username })
                        .select('reactedBlogs readingList');
            }

            res.render('./pages/blog_detail.ejs', {
                  sessionUser: req.session.user,
                  blog,
                  ownerBlogs,
                  user,
                  markdown
            });


      } catch (error) {
            console.error("Error rendering blog detail page: ", error.message);
            throw error;
      }

}

module.exports = renderBlogDetail;