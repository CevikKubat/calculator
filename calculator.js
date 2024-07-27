const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function(array) {
  return array.reduce((acc, curr) => acc * curr, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(number) {
  let sum = 1;
  for (let i = number; i > 0; i--){
    sum *= i;
  }
  return sum;
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

console.log(factorial(3));