/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';

// custom module
import dialog from "./dialog.js";

// Select the reaction button element and reaction number
const reactionBtn = document.querySelector('[data-reaction-btn]');
const reactionNumber = document.querySelector('[data-reaction-number]');


// Add a reaction to the current blog
// send a put request to server to update the cur count of reaction
// get 200 status then update the reaction count on the page
// if 401 status it prompts the user to login 

const addReaction = async () => {
      try {

            // Send a put req to reaction end
            const response = await fetch(`${window.location}/reactions`, {
                  method: 'PUT'
            });

            // Handle case where response is successful
            if (response.ok) {
                  // Active reaction button and inc the reaction number
                  reactionBtn.classList.add('active', 'reaction-anim-add');
                  reactionBtn.classList.remove('reaction-anim-remove');
                  reactionNumber.textContent = Number(reactionNumber.textContent) + 1;
            }

            // handle case where response is 401 (unauthorized)
            if (response.status === 401) {
                  const dialogBox = dialog({
                        title: 'Login to continue',
                        content: `We're a place where coder share, stay up-to-date 
                        and grow their careers.`
                  });

                  document.body.appendChild(dialogBox);
            }

      } catch (error) {
            console.error("Error in reaction: ", error.message);
            throw error;
      }
}

// Removes a reaction from the current blog.
// sends a DELETE req to the reactions endPoints
// Updates UT according based on server response

const removeReaction = async () => {
      try {

            // Send a DELETE req to the reactions endpoint
            const response = await fetch(`${window.location}/reactions`, {
                  method: 'DELETE'
            });

            // Handle case where response is successful
            if (response.ok) {
                  // Inactive reaction button and dec the reaction number
                  reactionBtn.classList.add('reaction-anim-remove');
                  reactionBtn.classList.remove('active', 'reaction-anim-add');
                  reactionNumber.textContent = Number(reactionNumber.textContent) - 1;
            }

      } catch (error) {
            console.error('Error removing Reaction: ', error.message);
            throw error;
      }
}

// add event listener for click event
reactionBtn.addEventListener('click', async function () {
      reactionBtn.setAttribute('disabled', '');

      if (!reactionBtn.classList.contains('active')) {
            await addReaction();
      } else {
            await removeReaction();
      }

      reactionBtn.removeAttribute('disabled');
});