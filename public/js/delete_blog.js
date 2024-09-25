/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';

//? Custom module
import SnackBar from './snackbar.js';

const blogDeleteBtnAll = document.querySelectorAll('[data-blog-delete-btn]');




// DELETE req to the server to delete a specified blog.
const handleBlogDelete = async (blogId) => {

      const confirmDelete = confirm('Are you sure you want to delete this blog?');

      // Handle case where user close the delete configuration
      if (!confirmDelete) {
            return;
      }

      const response = await fetch(`${window.location.origin}/blogs/${blogId}/delete`, {
            method: 'DELETE',
      });

      // Handle the case where response is success
      if (response.ok) {
            SnackBar({
                  message: 'Blog has been deleted.'
            });
      }

      window.location.reload();

}


// Attaches client event listeners to all delete buttons 
// to trigger the handleBlogDelete function.

blogDeleteBtnAll.forEach(deleteBtn => {
      const blogId = deleteBtn.dataset.blogDeleteBtn;
      deleteBtn.addEventListener('click', handleBlogDelete.bind(null, blogId));
});