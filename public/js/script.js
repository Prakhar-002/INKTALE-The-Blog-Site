/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict'

const topAppBar = document.querySelector('[data-top-app-bar]');
let lastScrollPos = 0;

// Attach event listener to the window scroll event, toggling
// classes on the top bar based on scroll position

window.addEventListener('scroll', (event) => {
      // Toggling the active class on the topAppBar elem based on
      // vertical scroll position is greater then 50 pixels
      topAppBar.classList[window.scrollY > 50 ? 'add' : 'remove']('active');

      // Toggling the  'hide' class based on weather the current scroll position is 
      // greater than the last scroll position and scroll position is greater than 50 pixels
      topAppBar.classList[ (window.scrollY > lastScrollPos && window.scrollY > 50) ? 'add' : 'remove']('hide');

      // updating the last recorded scroll position
      lastScrollPos = window.scrollY;
});


const menuWrappers = document.querySelectorAll('[data-menu-wrapper]');

menuWrappers?.forEach(function (menuWrapper) {
      const menuToggler = menuWrapper.querySelector('[data-menu-toggler]');
      const menu = menuWrapper.querySelector('[data-menu]');

      menuToggler.addEventListener('click', () => {
            menu.classList.toggle('active');
      });
});


// Backward btn functionality in blog create page

const backBtn = document.querySelector('[data-back-btn]');

const handleBackward = function () {
      window.history.back();
}

backBtn?.addEventListener('click', handleBackward);



// Todo Auto height textarea in blog create from

const autoHeightTextarea = document.querySelector('[data-textarea-auto-height]');

const textareaAutoHeight = function () {
      this.style.height = this.scrollHeight + 'px';
      this.style.maxHeight = this.scrollHeight + 'px';
}

autoHeightTextarea?.addEventListener('input', textareaAutoHeight);

// Set Initial textarea height 
autoHeightTextarea && textareaAutoHeight.call(autoHeightTextarea);