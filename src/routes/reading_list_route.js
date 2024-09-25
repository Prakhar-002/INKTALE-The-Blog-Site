/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';

const router = require('express').Router();


// Custom modules
const { renderReadingList } = require('../controllers/reading_list_controller.js');


// GET route : Render the reading list page
router.get(['/', '/page/:pageNumber'], renderReadingList);


module.exports = router;