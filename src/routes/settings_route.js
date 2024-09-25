/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';

//? Node module

const router = require('express').Router();

//? custom module

const { 
      renderSettings, 
      updateBasicInfo, 
      updatePassword,
      deleteAccount
} = require("../controllers/settings_controller.js");


// GET route : Render the Settings page
router.get('/', renderSettings);

// PUT route: Update user basic info.
router.put('/basic_info', updateBasicInfo);

// PUT route: Update user password.
router.put('/password', updatePassword);

// DELETE route: Delete user account
router.delete('/account', deleteAccount);


module.exports = router;