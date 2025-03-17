const convertToCelsius = function(fahrenheit) {
  let ans = (((fahrenheit-32)*5)/9)*10;

  return Math.round(ans)/10;

};

const convertToFahrenheit = function(celsius) {
  let ans = (((celsius*9)/5) + 32)*10;
  return Math.round(ans)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
