/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict'

// Generate an image preview from the selected file 
// and display it in a specified container

const imagePreviewFunc = async function (imageField, imagePreview) {

      // this will create link of uploaded document
      const imageObjectUrl = URL.createObjectURL(imageField.files[0]);


      // Create image for given link
      const image = document.createElement('img');
      image.classList.add('img-cover');
      image.src = imageObjectUrl;

      imagePreview.append(image);
      imagePreview.classList.add('show');

      return imageObjectUrl;
}

export default imagePreviewFunc;