/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';

//? Node module

const router = require('express').Router();

//? custom module
const { renderCreateBlog, postCreateBlog } = require('../controllers/create_blog_controller.js')


// GET route: Render the Blog Create page.
router.get('/', renderCreateBlog);


// POST route: Create new blog post.
router.post('/', postCreateBlog);


module.exports = router;