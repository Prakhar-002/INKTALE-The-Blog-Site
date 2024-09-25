/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';

//? Node module

const router = require('express').Router();

//? custom module
const renderDashboard = require('../controllers/dashboard_controller.js')


// GET route: Render dashboard.
router.get('/', renderDashboard);


module.exports = router;