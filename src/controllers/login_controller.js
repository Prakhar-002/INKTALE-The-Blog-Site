/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict'

// Node module
const bcrypt = require('bcrypt');


// Custom modules
const User = require('../models/user_model.js'); 

// Render the login page

const renderLogin = (req, res) => {

      const { userAuthenticated } = req.session.user || {};

      // handle the case where user already logged in
      if (userAuthenticated) {
            return res.redirect('/');
      }

      res.render('./pages/login.ejs');

}

// Handle the login process for a user
const postLogin = async (req, res) => {
      try {

            // Extract the email and password
            const { email, password } = req.body;

            // Find user from database by email
            const currentUser = await User.findOne({ email });

            // handle case where no user found with email
            if (!currentUser) {
                  return res.status(400).send({
                        message: "No user exist with this Email address."
                  });
            }

            // check if password is valid
            const isPasswordValid = await bcrypt.compare(password, currentUser.password);

            // Handle the case where the password is invalid
            if (!isPasswordValid) {
                  return res.status(400).send({
                        message: "Password is Invalid. Please ensure you've entered the correct password. "
                  });
            }

            // Set session userAuthenticated to true and redirect to home page
            req.session.user = {
                  userAuthenticated: true,
                  name: currentUser.name,
                  username: currentUser.username,
                  profilePhoto: currentUser.profilePhoto?.url
            }

            return res.redirect('/');

      } catch (error) {
            console.error('postLogin: ', error.message);
            throw error;
      }
}

module.exports = {
      renderLogin,
      postLogin
}