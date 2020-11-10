// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do? What is our objective?
// Response - What was actually done

const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const game1 = new HangmanGame('Clinic study', 2);

puzzleEl.textContent = game1.getPuzzle();

console.log(game1.status);


window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode)

  game1.makeGuess(guess);
  puzzleEl.textContent = game1.getPuzzle();
  guessesEl.textContent = game1.statusMessage()
  game1.updateStatus();
  console.log(game1.status);
})

getPuzzle('3', (error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`)
  } else {
    console.log(puzzle)
  }
})

getCountry('US', (error, country) => {
  if (error) {
    console.log(`Error: ${error}`)
  } else {
    console.log(`Country name:${country.name}`);
  }
})










