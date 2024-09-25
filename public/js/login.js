/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict'

//? Import modules
import Snackbar from "./snackbar.js";


const form = document.querySelector('[data-form]');
const submitBtn = document.querySelector('[data-submit-btn]')



// Submit form
form.addEventListener('submit', async (event) => {

      // preventing default submission behavior
      event.preventDefault();

      // Disabling submit btn from multiple submissions
      submitBtn.setAttribute('disabled', '');

      // creating form data object to capture form data
      const formData = new FormData(form);

      // send account create req to server
      const response = await fetch(`${window.location.origin}/login`, {
            method: 'POST',
            headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(Object.fromEntries(formData.entries())).toString()
      });

      // When response status is success
      if (response.ok) {
            // Redirect to login page
            return window.location = response.url;
      }

      // Handle the case where 400 (bad request) 
      if (response.status === 400) {

            // Enable submit button and show error message
            submitBtn.removeAttribute('disabled');

            const { message } = await response.json();
            Snackbar({
                  type: "error",
                  message
            });
      }

});