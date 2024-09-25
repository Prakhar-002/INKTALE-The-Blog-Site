/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict'

// create a snackbar component and displays it with specified props

const snackbarWrapper = document.querySelector('[data-snackbar-wrapper]');
let lastTimeout = null;


const Snackbar = (props) => {

      // create a snackbar elem
      const snackBar = document.createElement('div');
      snackBar.classList.add('snackbar');

      props.type && snackBar.classList.add(props.type);
      snackBar.innerHTML = `
            <p class="body-medium snackbar-text">
                  ${props.message}
            </p>
      `;

      // Clear previous snackbar and append new one
      snackbarWrapper.innerHTML = '';
      snackbarWrapper.append(snackBar);

      // remove snackbar after 10 sec
      clearTimeout(lastTimeout);
      lastTimeout = setTimeout(() => {
            snackbarWrapper.removeChild(snackBar);
      }, 10000)
}


export default Snackbar;

