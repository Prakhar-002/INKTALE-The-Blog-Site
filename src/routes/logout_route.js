/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';

//? Node module

const router = require('express').Router();

//? custom module
const logout  = require('../controllers/logout_controller.js')

// POST route: handles user logout
router.post('/', logout);



module.exports = router;