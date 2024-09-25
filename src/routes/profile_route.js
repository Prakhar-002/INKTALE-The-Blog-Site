/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';

//? Node module

const router = require('express').Router();

//? custom module
const renderProfile = require('../controllers/profile_controller.js')

// GET route: Render the login form
router.get(['/:username', '/:username/page/:pageNumber'], renderProfile);



module.exports = router;