/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict'

//? Node module
const crypto = require('crypto');


//? custom module
const uploadToCloudinary = require('../config/cloudinary_config.js');
const Blog = require('../models/blog_model.js');
const User = require('../models/user_model.js');
const getReadingTime = require('../utils/get_reading_time_util.js');


// Render the blog create form page
const renderCreateBlog = (req, res) => {
      res.render('./pages/create_blog.ejs', {
            sessionUser: req.session.user,
            route: req.originalUrl
      });
}


const postCreateBlog = async (req, res) => {
      try {

            // Retrieve title and content from req body
            const { banner, title, content } = req.body;

            // Upload blog banner to cloudinary
            const public_id = crypto.randomBytes(10).toString('hex');
            const bannerURL = await uploadToCloudinary(banner, public_id);


            // FINd the user who is creating the blog post
            const user = await User.findOne({ username: req.session.user.username }).select('_id blogs blogPublished');


            // Create a new blog post
            const newBlog = await Blog.create({
                  banner: {
                        url: bannerURL,
                        public_id
                  },
                  title,
                  content,
                  owner: user._id,
                  readingTime: getReadingTime(content)
            });

            // Upload user's blog data
            user.blogs.push(newBlog._id);
            user.blogPublished++;
            await user.save();

            // Redirect to newly created blog post page
            res.redirect(`blogs/${newBlog._id}`);


      } catch (error) {

            //  throw and log the error if any
            console.error('Error create new blog: ', error.message);
            throw error;

      }
}

module.exports = {
      renderCreateBlog,
      postCreateBlog
}