/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';

//? Node module

const router = require('express').Router();

//? custom module

const {renderRegister, postRegister} = require("../controllers/register_controller.js");


// GET route : Render the registration page
router.get('/', renderRegister);

// POST route : handles user form submission for registration
router.post('/', postRegister);

module.exports = router;