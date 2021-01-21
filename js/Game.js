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
     * Execute necessary steps for setting up a new round of this game
     */
    startGame () {
        // Hide the start screen overlay
        document.querySelector('#overlay').style.display = 'none';
        
        // Call the getRandomPhrase method to select mystery phrase for this round
        this.activePhrase = this.getRandomPhrase();
        
        // Draws this.activePhrase to the board 
        this.activePhrase.addPhraseToDisplay();
    }
    
    /**
     * Randomly retrieves one of the phrase objects stored in the this.phrases array and returns it.
     */
    getRandomPhrase () {
        const idx = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[idx];
    }
    
    /**
     * Checks player letter selection and updates the game state and phrase display accordingly
     * @param   {Object}    button  The object linked to the button clicked by the user
     */ 
    handleInteraction (button) {
        // Disable the selected letter's onscreen button
        button.disabled = true;
        
        const letter = button.textContent;
        
        // Check to see if the button clicked by the player matches a letter in the phrase
        if (this.activePhrase.checkLetter(letter)) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letter); 
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            // Player guessed wrong. Ding them.
            button.classList.add('wrong');
            this.removeLife();
        }
    }
    
    /**
     * Removes a life from the scoreboard
     * Swaps a 'live heart' icon for a 'dead heart' icon and increments the game's `missed` property.
     */
    removeLife () {
        // Swap a liveHeart icon for a lostHeart icon
        const heart = document.querySelector('img[src="images/liveHeart.png"]');
        heart.setAttribute('src','images/lostHeart.png');
        
        // Increment the `missed` property
        this.missed += 1;
        
        // If the player has five missed guesses, end the game
        if (this.missed === 5) {
            this.gameOver(false);
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
     * @param   {Boolean}   won Boolean value indicating whether player won
     */
    gameOver (won) {
        // Show the start screen overlay
        document.querySelector('#overlay').style.display = '';
        
        // Set end-of-game message
        let endMsg = '';
        let newClass = '';
        if (won) {
            // Player won
            endMsg = 'Congratulations! You Got It!';
            newClass = 'win';
        } else {
            // Player lost
            endMsg = 'You Lost :( Please Play Again!';
            newClass = 'lose';
        }
        
        // Display the end-of-game message to the user
        document.querySelector('h1').textContent = endMsg;
        document.querySelector('div#overlay').className = newClass;
        
        // Reset the game board
        this.resetGame();
    }
    
    /**
     * Reset game board, making it ready for new round
     */
    resetGame () {
        // Remove all li elements from the Phrase ul element
        document.querySelector('#phrase ul').innerHTML = '';
        
        // Enable all of the onscreen keyboard buttons and update their CSS class
        const buttonGroup = document.querySelectorAll('button.key');
        for (let btn of buttonGroup) {
            btn.className = 'key';
            btn.disabled = false;
        }
        
        // Reset all of the heart images on the scoreboard
        const hearts = document.querySelectorAll('img[src="images/lostHeart.png"]');
        for (let heart of hearts) {
            heart.setAttribute('src','images/liveHeart.png');
        }
        
        this.missed = 0;
    }
}