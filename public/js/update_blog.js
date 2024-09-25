/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict'

//? Import module

import imagePreviewFunc from './utils/imagePreview.js';
import Snackbar from './snackbar.js'; 
import config from './config.js';
import imageAsDataURL from './utils/imageAsDataUrl.js';

// Selector for image field, image preview. and clear preview
const imageField = document.querySelector('[data-image-field]');
const imagePreview = document.querySelector('[data-image-preview]');
const imagePreviewClear = document.querySelector('[data-image-preview-clear]');

// Event listener for image field change to trigger image preview

imageField.addEventListener('change', () => {
      imagePreviewFunc(imageField, imagePreview);
});


// Clear the image preview by removing the 'show' class from the preview container

const clearImagePreview = function () {
      imagePreview.classList.remove('show');
      imagePreview.innerHTML = '';
}

imagePreviewClear.addEventListener('click', clearImagePreview);


// Handle blog update

const blogForm = document.querySelector('[data-form]');
const submitBtn = document.querySelector('[data-submit-btn]');
const progressBar = document.querySelector("[data-progress-bar]");

const handleBlogUpdate = async (event) => {

      // Preventing default form submission behavior
      event.preventDefault();

      // Disabling submit button to prevent multiple submission
      submitBtn.setAttribute('disabled', '');

      // Creating FormData object to capture form data
      const formData = new FormData(blogForm);

      // handle the case where user not selected any image for banner when creating blog

      if (!formData.get('banner').size && !imagePreview.hasChildNodes()) {
            // Enable publish button and show error message
            submitBtn.removeAttribute('disabled');
            Snackbar({
                  type : 'error',
                  message: 'You didn\'t select any image for blog banner.'
            });

            return;
      }

      // Handle case where selected image size larger than 5MB.
      if (formData.get('banner').size > config.blogBanner.maxByteSize) {
            // Enable publish button and show error message
            submitBtn.removeAttribute('disabled');
            Snackbar({
                  type : 'error',
                  message: 'Image should be less than 5MB.'
            });

            return;
      }

      // Handle case when user did not update the blog banner
      if (!formData.get('banner').size && imagePreview.hasChildNodes()) {
            formData.delete('banner');
      }

      // Handle case when user update the blog banner
      if (formData.get('banner')) {
            formData.set('banner', await imageAsDataURL(formData.get('banner')));
      }

      // Create request body from fromData
      const body = Object.fromEntries(formData.entries());

      // Show progress bar
      progressBar.classList.add('loading');

      // Send form data to the server for update blog
      const response = await fetch(window.location.href, {
            method: 'PUT',
            headers: {
                  'content-Type' : 'application/json'
            },
            body : JSON.stringify(body)
      });

      // Handle case where response is success.
      if (response.ok){
            submitBtn.removeAttribute('disabled');
            Snackbar({ message: 'Your blog has been updated' });
            progressBar.classList.add('loading-end');
            window.location = window.location.href.replace('/edit', '');
            return;
      }

      // Handle case where response is 400 (bad request) 
      if (response.status === 400) {
            progressBar.classList.add('loading-end');
            submitBtn.removeAttribute('disabled');
            const { message } = await response.json();
            Snackbar({
                  type: 'error',
                  message
            });
      }

}

blogForm.addEventListener('submit', handleBlogUpdate);