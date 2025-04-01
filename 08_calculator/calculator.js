const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	return a.reduce((sum, item) => sum + item, 0);
};

const multiply = function(a) {
	return a.reduce((ans, item) => ans * item, 1);
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	let temp = 1;
  if(a <= 0)
    return 1;
  let ans = 1;
  while(temp <= a)
  {
    ans = ans*temp;
    temp++;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
