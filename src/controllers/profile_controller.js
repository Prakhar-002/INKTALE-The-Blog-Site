/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';


//? custom module
const User = require('../models/user_model.js');
const Blog = require('../models/blog_model.js');
const getPagination = require('../utils/get_pagination_util.js');


const renderProfile = async (req, res) => {
      try {

            // Extract username form request params
            const { username } = req.params;

            // Handle the case where user not exists
            const userExists = await User.exists({ username });
            if (!userExists) {
                  return res.render('./pages/404.ejs');
            } 

            // Find the profile based on username
            const profile = await User.findOne({ username })
                        .select('profilePhoto username name bio blogs blogPublished createdAt');

            // Generate pagination data
            const pagination = getPagination(`/profile/${username}`, req.params, 20, profile.blogs.length);

            // Retrieve profile blogs based on pagination and other criteria
            const profileBlogs = await Blog.find({ _id: { $in: profile.blogs } })
                              .select('title createdAt reaction totalBookmarks readingTime')
                              .populate({
                                    path: 'owner',
                                    select: 'name username profilePhoto'
                              })
                              .sort({ createdAt: 'desc' })
                              .limit(pagination.limit)
                              .skip(pagination.skip)

            // Render profile page with retrieved data
            res.render('./pages/profile.ejs', {
                  sessionUser: req.session.user,
                  profile,
                  profileBlogs,
                  pagination
            });

      } catch (error) {

            // Log and throw the error
            console.error('Error rendering profile: ', error.message);
            throw error;

      }
}

module.exports = renderProfile;