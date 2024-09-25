/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';

//? Custom modules
const User = require('../models/user_model.js');
const Blog = require('../models/blog_model.js');


// Update the reaction count for a blog and associate the user's reaction

const updateReaction = async (req, res) => {
      try {

            // Handle the case where user is not authenticated
            if (!req.session.user) return res.sendStatus(401);

            // Destructure username from session
            const { username } = req.session.user;

            // Destructure blogId from req params
            const { blogId } = req.params;

            // handle the case where user already reacted to this blog
            const currentUser = await User.findOne({ username }).select('reactedBlogs');

            if (currentUser.reactedBlogs.includes(blogId)) {
                  return res.sendStatus(400);
            }

            // Find the blog and update it's reaction count
            const reactedBlog = await Blog.findById(blogId)
                  .select('reaction owner')
                  .populate({
                        path: 'owner',
                        select: 'totalReactions'
                  });

            reactedBlog.reaction++;
            await reactedBlog.save();

            // update current user's reactionBlogs list and save
            currentUser.reactedBlogs.push(reactedBlog._id);
            await currentUser.save();

            // Update blog author's total reaction list and save
            reactedBlog.owner.totalReactions++;
            await reactedBlog.owner.save();

            res.sendStatus(200);

      } catch (error) {
            console.error("Error updating reaction: ", error.message);
            throw error;
      }
}

// Delete the reaction for a blog and associate the user's reaction

const deleteReaction = async (req, res) => {
      try {

            // Handle the case where user is not authenticated
            if (!req.session.user) return res.sendStatus(401);

            // Destructure username from session
            const { username } = req.session.user;

            // Destructure blogId from req params
            const { blogId } = req.params;

            // handle the case where user not reacted to this blog
            const currentUser = await User.findOne({ username }).select('reactedBlogs');

            if (!currentUser.reactedBlogs.includes(blogId)) {
                  return res.sendStatus(400);
            }

            // Find the blog and update it's reaction count
            const reactedBlog = await Blog.findById(blogId)
                  .select('reaction owner')
                  .populate({
                        path: 'owner',
                        select: 'totalReactions'
                  });

            reactedBlog.reaction--;
            await reactedBlog.save();

            // update current user's reactionBlogs list and save
            currentUser.reactedBlogs.splice(currentUser.reactedBlogs.indexOf(blogId), 1);
            await currentUser.save();

            // Update blog author's total reaction list and save
            reactedBlog.owner.totalReactions--;
            await reactedBlog.owner.save();

            res.sendStatus(200);

      } catch (error) {
            console.error("Error deleting reaction: ", error.message);
            throw error;
      }
}

module.exports = { 
      updateReaction,
      deleteReaction
}