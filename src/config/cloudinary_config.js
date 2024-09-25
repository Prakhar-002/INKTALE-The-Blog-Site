/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict'

// Node modules

// Require the cloudinary library
const cloudinary = require('cloudinary').v2;



// Configures Cloudinary settings for image uploads

cloudinary.config ({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET
});

/*
*    image -> The image to be uploaded
*    public_id -> identifier for user 
*/

// Upload an image base64 to cloudinary
const uploadToCloudinary = async (image, public_id) => {
      try {

            const response = await cloudinary.uploader.upload(image, {
                  resource_type: "auto",
                  public_id
            });

            return response.secure_url;

      } catch (error) {
            console.error("Error uploading image to Cloudinary: ", error.message);
            throw error;
      }
}

module.exports = uploadToCloudinary;