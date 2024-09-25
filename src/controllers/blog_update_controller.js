/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';


//? custom module
const Blog = require(`../models/blog_model.js`);
const uploadToCloudinary = require('../config/cloudinary_config.js');


const renderBlogEdit = async (req, res) => {
      try {

            // Get blogId from request parameter
            const { blogId } = req.params;

            // Retrieve logged client username from session
            const { username } = req.session.user;

            // Find the blog user want to edit by it's id
            const currentBlog = await Blog.findById(blogId)
                  .select('banner title content owner')
                  .populate({
                        path: 'owner',
                        select: 'username'
                  });

            // Handle case where current user try to edit other users blog
            if (currentBlog.owner.username !== username) {
                  return res.status(403).send('<h2>Sorry, you don\'t have permission to edit this article as you\'re not the author.</h2>');
            }

            res.render('./pages/blog_update.ejs', {
                  sessionUser: req.session.user,
                  currentBlog
            });

      } catch (error) {

            // Log error
            console.error("Error rendering blog edit page: ", error.message);
            throw error;

      }
}


const updateBlog = async (req, res) => {
      try {

            // Retrieve blogId from request params
            const { blogId } = req.params;
            const { title, content, banner } = req.body;

            // Find the blog user want to update
            const updatedBlog = await Blog.findById(blogId)
                        .select('banner title content');

            // Handle the case where banner is exists
            if (banner) {
                  // Upload new banner to cloudinary
                  const bannerURL = await uploadToCloudinary(banner, updatedBlog.banner.public_id);
                  updatedBlog.banner.url = bannerURL;
            }

            // update blog title and content and save to database
            updatedBlog.title = title;
            updatedBlog.content = content;

            await updatedBlog.save();

            res.sendStatus(200);

      } catch (error) {

            // Log error
            console.error("Error rendering blog edit page: ", error.message);
            throw error;

      }
}


module.exports = {
      renderBlogEdit,
      updateBlog
}