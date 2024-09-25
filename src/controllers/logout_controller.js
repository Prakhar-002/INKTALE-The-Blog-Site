/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';

// Logout user by destroying the session and redirect to the home page

const logout = async (req, res) => {
      try {

            // Delete user session
            req.session.destroy();
            res.redirect('/');

      } catch (error) {

            // Log and throw the error
            console.error('Error in logout: ', error.message);
            throw error;

      }
}

module.exports = logout;