//Undefined for variable

let name;

if (name === undefined) {
  console.log('Please provide a name');
} else {
  console.log(name);
}

// Undefined for function arguments
// Undefined as function return default value

let square = function (num) {
  console.log(num);
};

square();

// Null as assigned value

let age = 27;
age = null;
console.log(age);