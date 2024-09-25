/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'user strict';

// custom module
import dialog from "./dialog.js";

// Select the reading list button elem and reading list number

const readingListBtn = document.querySelector('[data-reading-list-btn]');
const readingListNumber = document.querySelector('[data-reading-list-number]');

const addToReadingList = async () => {
      try {

            // Send a put req to readingList endpoint
            const response = await fetch(`${window.location}/readingList`, {
                  method: 'PUT'
            });

            // Handle case where response is successful
            if (response.ok) {
                  // Active readingList button and inc the readingList number
                  readingListBtn.classList.add('active');
                  readingListNumber.textContent = Number(readingListNumber.textContent) + 1;
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
            console.error("Error adding reading list: ", error.message);
            throw error;
      }
}


// Removes the current blog from the user's reading list asynchronously
const removerFromReadingList = async () => {
      try {

            // Send a DELETE req to the reading list endpoint
            const response = await fetch(`${window.location}/readingList`, {
                  method: 'DELETE'
            });

            // Handle case where response is successful
            if (response.ok) {
                  // Inactive reading list button and dec the reading list number
                  readingListBtn.classList.remove('active');
                  readingListNumber.textContent = Number(readingListNumber.textContent) - 1;
            }

      } catch (error) {
            console.error('Error removing from reading list: ', error.message);
            throw error;
      }
}


// add event listener for click event
readingListBtn.addEventListener('click', async function () {
      readingListBtn.setAttribute('disabled', '');

      if (!readingListBtn.classList.contains('active')) {
            await addToReadingList();
      } else {
            await removerFromReadingList();
      }

      readingListBtn.removeAttribute('disabled');
});