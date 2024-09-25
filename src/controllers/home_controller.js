/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';

// Costume module

const Blog = require('../models/blog_model.js');
const getPagination = require('../utils/get_pagination_util.js');



//  Controller for rendering the home page

const renderHome = async (req, res) => {
      try {

            // Retrieve total amount of created blogs
            const totalBlogs = await Blog.countDocuments();

            // Get pagination object
            const pagination = getPagination('/', req.params, 18, totalBlogs);


            // Retrieve blogs from the data base
            // Selecting specified field and populating 'owner' field

            const latestBlogs = await Blog.find()
                  .select('banner author createdAt readingTime title reaction totalBookmarks')
                  .populate({
                        path: 'owner',
                        select: 'name username profilePhoto'
                  }).sort({ createdAt: 'desc' })
                  .limit(pagination.limit)
                  .skip(pagination.skip);

            res.render('./pages/home.ejs', {
                  sessionUser: req.session.user,
                  latestBlogs,
                  pagination
            });

      } catch (error) {

            console.error('Error rendering home page: ', error.message);
            throw error;

      }
}


module.exports = renderHome;