class HangmanGame {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = 'playing';
  }

  updateStatus() {
    let finished = true

    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === ' ') {

      } else {
        finished = false;
      }
    })

    if (this.remainingGuesses <= 0) {
      this.status = 'failed';
    } else if (finished) {
      this.status = 'finished';
    } else {
      this.status = 'playing';
    }
  }

  getPuzzle() {
    let puzzle = '';

    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === ' ') {
        puzzle += letter
      } else {
        puzzle += '*'
      }
    })

    return puzzle;
  }

  makeGuess(guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    if (this.status !== 'playing') {
      return
    }

    if (isUnique) {
      this.guessedLetters.push(guess);
    }
    if (isUnique && isBadGuess) {
      this.remainingGuesses--;
    }
    this.updateStatus()
  }

  statusMessage() {
    if (this.status === 'playing') { return `Guesses left: ${this.remainingGuesses}` }
    else if (this.status === 'failed') { return `Nice try! The word was "${this.word.join('')}".` }
    else if (this.status === 'finished') { return 'Great work! You guessed the word.' }
  }
}


// Hangman constructor function syntax below

const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split('');
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = [];
  this.status = 'playing'
}

Hangman.prototype.updateStatus = function () {
  let finished = true

  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter)) {

    } else {
      finished = false;
    }
  })

  if (this.remainingGuesses <= 0) {
    this.status = 'failed';
  } else if (finished) {
    this.status = 'finished';
  } else {
    this.status = 'playing';
  }
}

Hangman.prototype.getPuzzle = function () {
  let puzzle = '';

  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter) || letter === ' ') {
      puzzle += letter
    } else {
      puzzle += '*'
    }
  })

  return puzzle;
}

Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase();
  const isUnique = !this.guessedLetters.includes(guess);
  const isBadGuess = !this.word.includes(guess);

  if (this.status !== 'playing') {
    return
  }

  if (isUnique) {
    this.guessedLetters.push(guess);
  }
  if (isUnique && isBadGuess) {
    this.remainingGuesses--;
  }
  this.updateStatus()
}

Hangman.prototype.statusMessage = function () {
  if (this.status === 'playing') { return `Guesses left: ${this.remainingGuesses}` }
  else if (this.status === 'failed') { return `Nice try! The word was "${this.word.join('')}".` }
  else if (this.status === 'finished') { return 'Great work! You guessed the word.' }
};




