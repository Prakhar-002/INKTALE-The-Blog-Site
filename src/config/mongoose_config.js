/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict'

const mongoose = require('mongoose');

const clientOptions = {
      serverApi : {
            version : '1',
            strict : true,
            deprecationErrors : true
      },
      dbName: 'inktale'
}

// connecting by mongo link

const connectDB = async(connectingURl) => {
      try {
            await mongoose.connect(connectingURl, clientOptions);
            console.log("Connected Successfully to MONGODB");
      } catch (err) {
            console.error("Error connecting to mongodb", err.message);
            throw err;
      }
}

// disconnecting from mongoDB

const disconnectDB = async () => {
      try {
            await mongoose.disconnect();
            console.log("Disconnected successfully from MONGODB");
      } catch (error) {
            console.error("Error disconnecting from mongodb", err.message);
            throw err;
      }
}

module.exports = {
      connectDB,
      disconnectDB
}