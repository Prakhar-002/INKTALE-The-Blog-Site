/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';


// Function that will check weather user is login or not
const userAuth = (req, res, next) => {

      // retrieves the 'userAuthenticated' property from the 'user' 'session' object.
      // If the 'session.user' object is not defined or isEmpty, it defaults to an empty object ('{').
      // This allows safe access to 'userAuthenticated' without throwing errors due to undefined objects or properties.

      const { userAuthenticated } = req.session.user || {};

      // Handle the case where user is authenticated
      if (userAuthenticated) return next();

      // Redirect to login page of user is not authenticated
      res.redirect('/login');

}

module.exports = userAuth;