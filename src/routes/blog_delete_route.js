/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';

//? Node module

const router = require('express').Router();

//? custom module
const deleteBlog = require('../controllers/blog_delete_controller.js')


//! DELETE route: Delete blog
router.delete('/:blogId/delete', deleteBlog);

module.exports = router;