let name = '             Jake Ripnick';

// length property
console.log(name.length);

// convert to uppercase
console.log(name.toUpperCase());

// convert to lowercase
console.log(name.toLowerCase());

// includes method

let password = 'abc123password098';
console.log(password.includes('123'));

// trim
console.log(name.trim());

// Challenge Area
// isValidPassword
// length is more than 8 characters - and doesn't contain the word "password"

let isValidPassword = function (password) {
  return password.length > 8 && !password.includes('password');
};

console.log(isValidPassword('abcde'));
console.log(isValidPassword('abcdefghlka1234'));
console.log(isValidPassword('abcpassword345'));
console.log(isValidPassword('thispwordsreturnstrue'));
console.log(isValidPassword('thispasswordreturnsfalse'));
