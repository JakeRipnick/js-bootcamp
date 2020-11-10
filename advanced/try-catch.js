const getTipOne = (amount) => {
  return amount * .25;
};
// We know that if we put "True" in as a argument, which has a value of 1 through type coercion, the function will not crash, but rather return a value of 0.25

const getTipTwo = (amount) => {
  if (typeof amount === 'number') {
    return amount * .25;
  } else {
    throw Error('Argument must be a number')
  }
};

try {
  const result = getTipTwo(true)
  console.log(result)
} catch (e) {
  console.log('catch block is running')
}





