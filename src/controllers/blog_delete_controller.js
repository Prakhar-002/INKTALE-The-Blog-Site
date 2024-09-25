/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';

//? Custom module
const Blog = require('../models/blog_model.js');
const User = require('../models/user_model.js');


// Delete a blog from the database and
// update the relevant user information
const deleteBlog = async (req, res) => {
      try {

            // Retrieve blog id from request params
            const { blogId } = req.params;

            // Retrieve username from session 
            const { username } = req.session.user;

            // Find the blog to delete
            const deletedBlog = await Blog.findOne({ _id: blogId })
                              .select('reaction totalVisit');

            // Find the current user by username
            const currentUser = await User.findOne({ username })
                              .select('blogPublished totalVisits totalReactions blogs');

            // Update user info from the database
            currentUser.blogPublished--;
            currentUser.totalVisits -= deletedBlog.totalVisit;
            currentUser.totalReactions -= deletedBlog.reaction;
            currentUser.blogs.splice(currentUser.blogs.indexOf(blogId), 1);
            await currentUser.save();

            // Delete blog from database
            await Blog.deleteOne({ _id: blogId });

            res.sendStatus(200);

      } catch (error) {

            // Log error
            console.error("Error Deleting blog: ", error.message);
            throw error;

      }
}

module.exports = deleteBlog;