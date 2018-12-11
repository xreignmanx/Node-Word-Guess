// require Letter.js file
var Letter = require("./Letters");


// Create a constructor, Word, that depends on the Letter constructor and is used ot creat an object 
// representing the current word the user is attempting to guess.
var Word = function (word) {
  this.word = word;
  // Create variable for word length
  this.wordLength = word.length;

  this.guessesLeft = 10;
  // Create an array for the letters that the user has guessed
  this.selectedLet = [];
  // Create variable for the chosen letter
  this.userChoice = "";
  this.numGuessTaken = 0;

    };

//   Create a function that returns a string representing the hidden word. 
  // This should call the function on each letter object (the first function defined in `Letter.js`)
  //  that displays the character or an underscore and concatenate those together.

//   set logic for letters guessed.

   
// make Word exportable
module.exports = Word;
