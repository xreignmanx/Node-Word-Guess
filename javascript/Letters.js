    
    // Create a function to log letter selected and keep it hidden
    var Letter = function (val) {
        this.value = val;
        this.hidden = true;

     // Create function to check to see if the number has been selected change boolean and show if letter has not been selected.
        this.updateDisplay = function (userGuess) {
          if (userGuess === ' ') {
            letter.hidden = false;
            console.log(userGuess);
          }
        };
      };
    //   Make function exportable
      module.exports = Letter;

   