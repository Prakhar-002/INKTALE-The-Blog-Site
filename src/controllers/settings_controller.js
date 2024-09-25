/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';

//? Node module
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');


//? custom module
const User = require(`../models/user_model.js`);
const Blog = require(`../models/blog_model.js`);
const uploadToCloudinary = require('../config/cloudinary_config.js');

// Retrieves settings for the current user and render the settings page
const renderSettings = async (req, res) => {
      try {

            // Retrieve client username
            const { username } = req.session.user;

            // Retrieve current user 
            const currentUser = await User.findOne({ username });

            // Render the setting page
            res.render('./pages/settings.ejs', {
                  sessionUser: req.session.user,
                  currentUser
            });

      } catch (error) {

            // throw and log the error if any
            console.error('Error rendering settings page: ', error.message);
            throw error;

      }
}



// Update basic information of thr logged-in user 
// such as name, username, email, bio and profilePhoto
const updateBasicInfo = async (req, res) => {

      try {

            // Retrieve logged client username from session
            const { username: sessionUsername } = req.session.user;

            // retrieve current user based on session username
            const currentUser = await User.findOne({ username: sessionUsername })
                              .select('profilePhoto name username email bio');

            // Destructure properties from request body
            const {
                  profilePhoto,
                  name,
                  username,
                  email,
                  bio
            } = req.body;

            // handle case where new email is already associated with an account
            if (email) {
                  if (await User.exists({ email })) {
                        return res.status(400).json({ 
                              message: 'Sorry, an account is already associated with this email address.' 
                        });
                  }

                  // update email of the current user
                  currentUser.email = email;
            }

            // Handle case where new username is already in use
            if (username) {
                  if (await User.exists({ username })) {
                        return res.status(400).json({ 
                              message: 'Sorry, that username is already taken. Please choose a different one.' 
                        });
                  }

                  // Update username of thr current user and session user
                  currentUser.username = username;
                  req.session.user.username = username;
            }

            // IF profile photo is provided, upload it to cloudinary 
            // and update user's profile photo
            if (profilePhoto) {
                  const public_id = currentUser.username;
                  const imageURL = await uploadToCloudinary(profilePhoto, public_id);

                  currentUser.profilePhoto = {
                        url: imageURL,
                        public_id
                  }

                  req.session.user.profilePhoto = imageURL;
            }

            // Update name and bio the current user and session user
            currentUser.name = name;
            req.session.user.name = name;
            currentUser.bio = bio;

            // Save uploaded user information to the database
            await currentUser.save();

            // Send success status
            res.sendStatus(200);

      } catch (error) {

            // throw and log the error if any
            console.error('Error updating basic info: ', error.message);
            throw error;

      }

}



// update new password and encrypt it by bcrypt and save new password in database
const updatePassword = async (req, res) => {
      try {

            // Retrieve logged client username from session
            const { username: sessionUsername } = req.session.user;

            // Retrieve current user based on session username
            const currentUser = await User.findOne({ username: sessionUsername })
                              .select('password');

            const {
                  old_password,
                  password
            } = req.body;

            // Validate old password
            const oldPasswordIsValid = await bcrypt.compare(old_password, currentUser.password);

            // Handle case where old password is not valid
            if (!oldPasswordIsValid) {
                  return res.status(400).json({ message: 'Your old password is not valid.' })
            }

            // Hash the new password and assign to current user password
            const newPassword = await bcrypt.hash(password, 10);
            currentUser.password = newPassword;

            // save the updated password
            await currentUser.save();

            // send the success status
            res.sendStatus(200);

      } catch (error) {

            // throw and log the error if any
            console.error('Error changing password: ', error.message);
            throw error;

      }
}

// Deleting the user account with uploaded blogs.
const deleteAccount = async (req, res) => {
      try {

            // Retrieve logged client username from session
            const { username } = req.session.user;

            // Retrieve current user based on session username
            const currentUser = await User.findOne({ username })
                              .select('blogs');

            // Delete all the blog that current user published
            await Blog.deleteMany({ _id: { $in: currentUser.blogs } });

            // Delete current user account
            await User.deleteOne({ username });

            // Destroy current user session from all devices
            const Session = mongoose.connection.db.collection('sessions');
            // destroy session from database
            await Session.deleteMany({ session: { $regex: username, $options: 'i' } });
            // destroy session from client device
            req.session.destroy();

            res.sendStatus(200);

      } catch (error) {

            // throw and log the error if any
            console.error('Error deleting account: ', error.message);
            throw error;

      }
}



module.exports = {
      renderSettings,
      updateBasicInfo,
      updatePassword,
      deleteAccount
}