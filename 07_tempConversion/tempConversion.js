const convertToCelsius = function(celsius) {
  const converted = (((celsius) - 32) * (5/9));
  const rounded = Math.round(converted * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(fahrenheit) {
  const converted = ((fahrenheit * (9/5))+ 32);
  const rounded = Math.round(converted * 10) / 10;
  return rounded; 

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
