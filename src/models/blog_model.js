/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';

//? Node modules
const mongoose = require('mongoose');


//? Mongoose schema for blog

const blogSchema = new mongoose.Schema({
      banner: {
            url: {
                  type: String,
                  require: true
            },
            public_id: {
                  type: String,
                  require: true
            }
      },
      title: {
            type: String,
            require: true
      },
      content: {
            type: String,
            require: true
      },
      owner: {
            type: mongoose.SchemaTypes.ObjectId,
            require: true,
            ref: 'User'
      },
      reaction: {
            type: Number,
            default: 0
      },
      readingTime: {
            type: Number,
            default: 0
      },
      totalBookmarks: {
            type: Number,
            default: 0
      },
      totalVisit: {
            type: Number,
            default: 0
      },
}, {
      timestamps: true
});


module.exports = mongoose.model('Blog', blogSchema);
