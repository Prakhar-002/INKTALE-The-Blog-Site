/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict'

// we will create a username based on the provided name
// username will be unique composed of the lowercase name followed by a timestamp

module.exports = (name) => {
      const username = name.toLowerCase().replace(' ', '');
      return `${username}-${Date.now()}`;
}