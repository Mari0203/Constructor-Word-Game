function Letter(char, guessed){
    this.character = char;
    this.guessed = guessed = false;
    this.usedLetter = function() {
        if (this.guessed === true) {
            return this.character
        } else {
            return " _ "; 
        }
    };
    this.checkMatch = function(userLetterInput) {
        if (userLetterInput === this.character) {
            this.guessed = true;
        } 
    };
};

module.exports = Letter;