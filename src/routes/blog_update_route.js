/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';

//? Node module

const router = require('express').Router();

//? custom module
const { renderBlogEdit, updateBlog } = require('../controllers/blog_update_controller.js');

// GET route: render blog edit page
router.get('/:blogId/edit', renderBlogEdit);

// PUT route: update blog
router.put('/:blogId/edit', updateBlog);

module.exports = router;