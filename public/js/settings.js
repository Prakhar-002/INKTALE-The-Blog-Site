/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';


//? Import modules 

import Snackbar from './snackbar.js'; 
import imagePreviewFunc from './utils/imagePreview.js';
import imageAsDataURL from './utils/imageAsDataUrl.js';
import config from './config.js';

// Selector for image field, image preview. and clear preview...
const imageField = document.querySelector('[data-image-field]');
const imagePreview = document.querySelector('[data-image-preview]');
const imagePreviewClear = document.querySelector('[data-image-preview-clear]');

// Event listener for image field change to trigger image preview...
imageField.addEventListener('change', () => {
      imagePreviewFunc(imageField, imagePreview);
});


// Clear the image preview by removing the 'show' class from the preview container...
const clearImagePreview = function () {
      imagePreview.classList.remove('show');
      imagePreview.innerHTML = '';
      imageField.value = ''
}

imagePreviewClear.addEventListener('click', clearImagePreview);


// Basic info update functionality...
const basicInfoForm = document.querySelector('[data-basic-info-form]');
const basicInfoSubmit = document.querySelector('[data-basic-info-submit]');
const oldFormData = new FormData(basicInfoForm);
const progressBar = document.querySelector('[data-progress-bar]');

const updateBasicInfo = async (event) => {

      // Preventing default form submission behavior
      event.preventDefault();

      // Disable publish button to prevent multiple submissions
      basicInfoSubmit.setAttribute('disabled', '');

      // Create FormData object to capture basic info from data.
      const formData = new FormData(basicInfoForm);

      // Handle the case where selected image size is greater than 1MB
      if (formData.get('profilePhoto').size > config.profilePhoto.maxByteSize) {
            // Enable submit button and show error message
            basicInfoSubmit.removeAttribute('disabled');
            Snackbar({
                  type: 'error',
                  message: 'Your profile photo should be less than 1MB.'
            });
            return;
      }

      // Handle case where user not selected any image for profilePhoto
      if (!formData.get('profilePhoto').size) {
            formData.delete('profilePhoto');
      }

      // Handle case where profilePhoto field exists
      if (formData.get('profilePhoto')) {
            // overwrite profilePhoto value (where is type of 'File') to base64
            formData.set('profilePhoto', await imageAsDataURL(imageField.files[0]));
      }

      // handle case where user did not change username
      if (formData.get('username') === oldFormData.get('username')) {
            formData.delete('username');
      }

      // Handle case where user did not change username
      if (formData.get('email') === oldFormData.get('email')) {
            formData.delete('email');
      }

      // Create request body from formData
      const body = Object.fromEntries(formData.entries());

      // Show progress bar
      progressBar.classList.add('loading');

      // Send form data to the server for update profile basic info
      const response = await fetch(`${window.location.href}/basic_info`, {
            method: 'PUT',
            headers: {
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
      });

      // Handle case where response is success
      if (response.ok) {
            // Enable submit button, show update message and reload window
            basicInfoSubmit.removeAttribute('disabled');
            progressBar.classList.add('loading-end');
            Snackbar({
                  message: 'Your profile has been updated.'
            });
            window.location.reload();
      }

      // Handle case where response status is 400 (Bas request)
      if (response.status === 400) {
            // Enable submit button and show error message
            basicInfoSubmit.removeAttribute('disabled');
            progressBar.classList.add('loading-end');
            const { message } = await response.json();
            Snackbar({
                  type: 'error',
                  message
            });
      }

}

basicInfoForm.addEventListener('submit', updateBasicInfo);


// Basic info update functionality...
const passwordForm = document.querySelector('[data-password-form]');
const passwordSubmit = document.querySelector('[data-password-submit]');

const updatePassword = async (event) => {

      // Preventing default form submission behavior
      event.preventDefault();

      // Disable publish button to prevent multiple submissions
      passwordSubmit.setAttribute('disabled', '');

      // Create FormData object to capture password from data.
      const formData = new FormData(passwordForm);

      // Handle case where password and confirm password doesn't match 
      if (formData.get('password') !== formData.get('confirm_password')) {
            // Enable submit button and show error message
            passwordSubmit.removeAttribute('disabled');
            Snackbar({
                  type: 'error',
                  message: 'Please ensure your password and confirm password fields contain the same value.'
            });
            return;
      }

      // Create request body from formData
      const body = Object.fromEntries(formData.entries());

      // Show progress bar
      progressBar.classList.add('loading');

      // Send form dta to the server for update password.
      const response = await fetch(`${window.location.href}/password`, {
            method: "PUT",
            headers: {
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
      });

      // Handle case where response is success
      if (response.ok) {
            // Enable submit button and show update message
            passwordSubmit.removeAttribute('disabled');
            progressBar.classList.add('loading-end');
            Snackbar({
                  message: 'Your password has been updated.'
            });
            return;
      }

      // Handle case where response status is 400 (Bad request)
      if (response.status === 400) {
            passwordSubmit.removeAttribute('disabled');
            progressBar.classList.add('loading-end');
            const { message } = await response.json();
            Snackbar({
                  type: 'error',
                  message
            });
      }
}

passwordForm.addEventListener('submit', updatePassword);




// Account delete functionality...
const accountDeleteBtn = document.querySelector('[data-account-delete]');

const deleteAccount = async (event) => {

      // Show a confirmDelete dialog for account delete
      const confirmDelete = confirm('Are you sure you want to delete your account?');

      // Handle case where user deny to delete account
      if (!confirmDelete) {
            return;
      }

      // Disable account delete button to prevent multiple request.
      accountDeleteBtn.setAttribute('disabled', '');

      // Show progress bar
      progressBar.classList.add('loading');

      // Send account delete request in server
      const response = await fetch(`${window.location.href}/account`, {
            method: 'DELETE'
      });

      // handle case where response is successful
      if (response.ok) {
            progressBar.classList.add('loading-end');
            // Redirect user to home page
            window.location = `${window.location.origin}/`;
            
      }

}

accountDeleteBtn.addEventListener('click', deleteAccount);