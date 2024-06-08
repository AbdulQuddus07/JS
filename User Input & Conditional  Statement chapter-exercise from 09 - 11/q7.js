//                       QUESTION NO 07                     \\

// Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

let num = 9;
let guessNum = +prompt("Guess the number between 1 to 10");

while (guessNum != num) {
  guessNum = +prompt("You enter a wrong number : guess number again");
  if (guessNum == 5 || guessNum == 6) {
    alert(`Close enough to the correct answer`);
  }
}

alert(`Bingo! Correct answer`);
