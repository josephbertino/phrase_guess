/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js 
 * Author: Joe Bertino, 2020
 */
 
class Game {
    
    /**
     * Class constructor
     */
    constructor () {
        this.missed = 0; // The number of missed guesses by the player
        this.phrases = [new Phrase('Can You Feel the Love Tonight'),
                        new Phrase('Hogwarts School of Witchcraft and Wizardry'),
                        new Phrase('Salt Pretzel'),
                        new Phrase('An unforgettable island experience'),
                        new Phrase('A friend in the hand is worth two in the bush')
                    ]; // Array of five phrase objects. A phrase should only include letters and spaces
        this.activePhrase = null; // The phrase object currently in play
    }
    
    /**
     * Executes a few steps necessary for setting up a new game
     */
    startGame () {
        // Hide the start screen overlay
        document.querySelector('#overlay').style.display = 'none';
        
        // Call the getRandomPhrase method to set mystery phrase of this round
        this.activePhrase = this.getRandomPhrase();
        
        // Add this.activePhrase to the board 
        this.activePhrase.addPhraseToDisplay();
    }
    
    /**
     * Randomly retrieves one of the phrases stored in the phrases array and returns it.
     */
    getRandomPhrase () {
        const idx = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[idx];
    }
    
    /**
     * This method controls most of the game logic.
     * @param   {Object}    button  The object linked to the button clicked by the user
     */ 
    handleInteraction (button) {
        // Disable the button onscreen
        button.disabled = true;
        
        const letter = button.textContent;
        
        // Check to see if the button clicked by the player matches a letter in the phrase
        if (this.activePhrase.checkLetter(letter)) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letter); 
            if (this.checkForWin()) {
                console.log('you win');
                // this.gameOver(); // JBJB
            }
        } else {
            // button.classList.add('wrong');
            // this.removeLife(); // JBJB
        }
    }
    
    /**
     * Checks to see if the player has revealed all of the letters in the active phrase
     */
    checkForWin () {
        const letterGroup = document.querySelectorAll(`.letter`);
        
        return [...letterGroup].every( (letter) => letter.classList.contains('show') );
    }
    
    /**
     * Handles end-of-game behavior.
     * Displays a message contingent on whether the player won or lost the round
     */
    gameOver () {
        
    }
    
    /**
     * Removes a life from the scoreboard
     * Swaps a 'live heart' icon for a 'dead heart' icon and increments the player's `missed` property.
     */
    removeLife () {
        /* [] If the player has five missed guesses (i.e they're out of lives), then end the game by calling the gameOver() method. */
    }
    
}