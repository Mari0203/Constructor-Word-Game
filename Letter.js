function Letter(char){
    this.character = char,
    this.guessed = false;
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
            return true;
        } else {
            return false;
        }
    };
};