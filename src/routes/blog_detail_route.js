/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';

//? Node module

const router = require('express').Router();

//? custom module
const renderBlogDetail = require('../controllers/blog_detail_controller.js')
const { updateReaction, deleteReaction } = require('../controllers/reaction_controller.js')
const { addToReadingList, removerFromReadingList } = require('../controllers/reading_list_controller.js')
const updateVisit = require('../controllers/visit_controller.js');


// GET route: Render the Blog detail page.
router.get('/:blogId', renderBlogDetail);

// PUT route: update blog reactions
router.put('/:blogId/reactions', updateReaction);

// DELETE route: Delete blog reactions
router.delete('/:blogId/reactions', deleteReaction);

// PUT route : update blog reading list
router.put('/:blogId/readingList', addToReadingList);

// DELETE route: Delete blog from reading list
router.delete('/:blogId/readingList', removerFromReadingList);

// PUT route: Update blog visit
router.put('/:blogId/visit', updateVisit);



module.exports = router;