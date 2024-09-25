/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'Use strict';

// Calculate the reading time for a given text

const AVG_READ_WPM = 200;

const getReadingTime = (text) => Math.ceil(text.split(' ').length / AVG_READ_WPM);


module.exports = getReadingTime;