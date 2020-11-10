// Type coercion - a string, a number, or a boolean

console.log('5' + 5) // gives us 55 because of string concatonation
console.log('5' - 5) // gives us 0 because you cannot subtract a string from a string, so JavaScript assumes we want to perform actual subtraction and coerces the string into a number