/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';

// Custom modules
const User = require('../models/user_model.js');
const Blog = require('../models/blog_model.js');
const getPagination = require('../utils/get_pagination_util.js');
const session = require('express-session');


// Add a blog post to the reading list of the logged-in user
// and update the total bookmarks count of the blog

const addToReadingList = async (req, res) => {

      try {

            // Handle the case where user is not authenticated
            if (!req.session.user) return res.sendStatus(401);

            // Destructure username from session
            const { username } = req.session.user;

            // Destructure blogId from req params
            const { blogId } = req.params;

            // handle the case where user already added current blog to reading list 
            const loggedUser = await User.findOne({ username }).select('readingList');

            if (loggedUser.readingList.includes(blogId)) {
                  return res.sendStatus(400);
            }

            // Update logged user reading list and save
            loggedUser.readingList.push(blogId);
            await loggedUser.save();

            // find the total bookmarks and update
            const readingLIstedBlog = await Blog.findById(blogId)
                  .select('totalBookmarks');
            readingLIstedBlog.totalBookmarks++;
            await readingLIstedBlog.save();

            res.sendStatus(200);

      } catch (error) {
            console.error('Error updating reading list: ', error.message );
            throw error;
      }

}


// Remove a blog from the reading list of the logged-list user
// and decrements the total bookmarks count of teh blog

const removerFromReadingList = async (req, res) => {
      try {

            // Handle the case where user is not authenticated
            if (!req.session.user) return res.sendStatus(401);

            // Destructure username from session
            const { username } = req.session.user;

            // Destructure blogId from req params
            const { blogId } = req.params;

            // handle the case where user already added current blog to reading list 
            const loggedUser = await User.findOne({ username }).select('readingList');

            if (!loggedUser.readingList.includes(blogId)) {
                  return res.sendStatus(400);
            }

            // Update logged user reading list and save
            loggedUser.readingList.splice(loggedUser.readingList.indexOf(blogId), 1);
            await loggedUser.save();

            // find the total bookmarks and update
            const readingLIstedBlog = await Blog.findById(blogId)
                  .select('totalBookmarks');
            readingLIstedBlog.totalBookmarks--;
            await readingLIstedBlog.save();

            res.sendStatus(200);

      } catch (error) {
            console.error('Error removing from reading list: ', error.message );
            throw error;
      }
}



// Retrieves the reading list of the logged of the logged-in user 
// and render it alone with pagination information

const renderReadingList = async (req, res) => {
      try {

            // Retrieve logged client username
            const { username } = req.session.user;

            // Retrieve total amount of reading list blogs
            const { readingList } = await User.findOne({ username })
                  .select('readingList');

            // get Pagination object
            const pagination = getPagination('/readinglist', req.params, 20, readingList.length);

            // Retrieve reading list blogs based on pagination parameters
            const readingListedBlogs = await Blog.find({ _id: { $in: readingList } })
                  .select('owner createdAt readingTime title reaction totalBookmarks')
                  .populate({
                        path: 'owner',
                        select: 'name username profilePhoto'
                  }).limit(pagination.limit)
                  .skip(pagination.skip);

            // Render the reading list page with retrieve data
            res.render('./pages/reading_list.ejs', {
                  sessionUser: req.session.user,
                  readingListedBlogs,
                  pagination
            });

      } catch (error) {
            console.error('Error rendering reading list: ', error.message);
            throw error;
      }
}


module.exports = {
      addToReadingList,
      removerFromReadingList,
      renderReadingList
}

