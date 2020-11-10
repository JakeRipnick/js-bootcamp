//Multiple arguments
let add = function (a, b) {
  return a + b;
};

let result = add(10, 1);
console.log(result);

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
  return `Name: ${name}: - Score: ${score} `;
  // return 'Name: ' + name + ' - Score: ' + score; //
};

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

//Challenge area
// total, tipPercent .2
// A 25% tip on $40 would be $10

let getTip = function (total, tipPercent = 0.25) {
  let percent = tipPercent * 100;
  let tip = total * tipPercent;
  return `A ${percent}% tip on $${total} would be $${tip}`;
};

let tip = getTip(1000);
console.log(tip);
