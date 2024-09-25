/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict'

// Increments the visit count from the current blog post
// and update the local storage 
const countVisit = async () => {
      try {

            // Increment the visit count
            const response = await fetch(`${window.location}/visit`, {
                  method: 'PUT'
            });

            // If the response is successful
            // update the visitedBlogs array and local storage
            if (response.ok) {
                  visitedBlogs.push(window.location.pathname);
                  localStorage.setItem('visitedBlogs', JSON.stringify(visitedBlogs));
            }

      } catch (error) {

            // Log and throw the error
            console.error('Error counting visit: ', error.message);
            throw error;

      }
}

// Get visitedBlogs frm localStorage
let visitedBlogs = localStorage.getItem('visitedBlogs');


// Initial visitedBlogs if not found
if (!visitedBlogs) {
      localStorage.setItem('visitedBlogs', JSON.stringify([]));
}

// Parse visited blog from json to array
visitedBlogs = JSON.parse(localStorage.getItem('visitedBlogs'));

// If user visited first time then call the countVisit function
if (!visitedBlogs.includes(window.location.pathname)) {
      countVisit();
}