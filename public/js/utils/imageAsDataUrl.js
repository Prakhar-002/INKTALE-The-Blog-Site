/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';

// Convert a given bob into a data url

const imageAsDataURL = (imageBlob) => {
      const fileRender = new FileReader();

      fileRender.readAsDataURL(imageBlob);

      return new Promise((resolve, reject) => {
            fileRender.addEventListener('load', () => {
                  resolve(fileRender.result);
            });

            fileRender.addEventListener('error', () => {
                  reject(fileRender.error);
            });
      });
}

export default imageAsDataURL;