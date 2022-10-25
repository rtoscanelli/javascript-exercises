const add = function(n1, n2) {

  return n1 + n2;
	
};

const subtract = function(n1,n2) {

  return n1 - n2;
	
};

const sum = function(numbers) {

  let sum = 0;

  for (const n in numbers) {
    sum += numbers[n];
  }

return sum;
	
};

const multiply = function(numbers) {

  let mult = 1;

  for (const n in numbers) {
    mult *= numbers[n];
  }

  return mult;
};

const power = function(number, exp) {

  return number ** exp;
	
};

const factorial = function(number) {

  let mult = 1;

  for(let i = 1; i <= number; i++) {
    mult *= i;
  }

  return mult;
	
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
