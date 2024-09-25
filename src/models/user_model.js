
/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict'

//? Node modules
const mongoose = require('mongoose');


//? Mongoose schema for user data

const UserSchema = new mongoose.Schema({
      profilePhoto: {
            url: String,
            public_id: String
      },
      name: {
            type: String,
            required: true
      },
      username: {
            type: String,
            require: true,
            unique: true
      },
      bio: String,
      email: {
            type: String,
            require: true,
            lowercase: true,
            unique: true
      },
      password: {
            type: String,
            require: true,
      },
      blogs: {
            type: [mongoose.SchemaTypes.ObjectId],
            ref: 'Blog'
      },
      blogPublished: {
            type: Number,
            default: 0
      },
      reactedBlogs: {
            type: [mongoose.SchemaType.ObjectId],
            ref: 'Blog'
      },
      totalVisits: {
            type: Number,
            default: 0
      },
      totalReactions: {
            type: Number,
            default: 0
      },
      readingList: {
            type: [mongoose.SchemaType.ObjectId],
            ref: 'Blog'
      }
}, {
      timestamps: true
});

module.exports = mongoose.model('User', UserSchema);