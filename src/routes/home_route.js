/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';

//? Node module

const router = require('express').Router();

//? custom module
const renderHome = require('../controllers/home_controller.js')


// GET route: Render the home page
router.get(['/', '/page/:pageNumber'], renderHome);



module.exports = router;