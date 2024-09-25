/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';

//? Node module

const router = require('express').Router();

//? custom module
const { renderLogin, postLogin } = require('../controllers/login_controller.js')

// GET route: Render the login form
router.get('/', renderLogin);

// POST route: handles form submission for user login
router.post('/', postLogin);



module.exports = router;