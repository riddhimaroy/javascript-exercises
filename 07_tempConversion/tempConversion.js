const convertToCelsius = function(x) {
  let f = (x-32)/1.8;
  f = Math.round(f*10)/10;
  return f;
};

const convertToFahrenheit = function(x) {
  let c = (1.8*x) + 32;
  c = Math.round(c*10)/10;
  return c;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
