/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';

//? Node module
const bcrypt = require('bcrypt');



//? Custom module
const User = require("../models/user_model.js");
const generateUsername = require('../utils/generate_username_util.js');


// Render the registration page
const renderRegister = (req, res) => {

      const { userAuthenticated } = req.session.user || {};

      // handle the case where user already logged in
      if (userAuthenticated) {
            return res.redirect('/');
      }

      res.render('./pages/register.ejs');
}


const postRegister = async (req, res) => {
      try {

            // Extract user data form request 
            const { name, email, password } = req.body;

            // Create username
            const username = generateUsername(name);

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create user with provided data
            await User.create({
                  name,
                  email,
                  password: hashedPassword,
                  username
            });

            // Redirect user to login page - this will be our response.url
            res.redirect('/login');

      } catch (error) {

            if (error.code == 11000) {

                  if (error.keyPattern.email) {
                        return res.status(400).send({
                              message: "This email is already associated with an account."
                        });
                  }

                  if (error.keyPattern.username) {
                        return res.status(400).send({
                              message: "This username is already in use."
                        });
                  }

            } else {

                  return res.status(400).send({
                        message: `Failed to register user. <br>${error.message}`
                  });

            }

            // Log and throw error if any occurs during register process
            console.error('postRegister', error.message);
            throw error;

      }
}

module.exports = {
      renderRegister,
      postRegister
}