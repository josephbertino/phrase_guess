/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js 
 * Author: Joe Bertino, 2020
 */
 
class Phrase {
    
    /**
     * Class constructor
     * @param   {string}    phrase  The phrase string held by this Phrase object
     */
    constructor (phrase) {
        this.phrase = phrase.toLowerCase();
    }
    
    /**
     * Adds letter placeholders to the game display when the game starts.
     * Each letter is presented by an empty box, one li element for each letter.
     */
    addPhraseToDisplay () {
        let phraseStr = '';
        
        for (const letter of this.phrase) {
            phraseStr += `<li class="`;
            if (letter === ' ') {
                phraseStr += `space`;
            } else {
                phraseStr += `hide letter ${letter}`;
            }
            phraseStr += `">${letter}</li>`;
        }

        document.querySelector('#phrase ul').innerHTML = phraseStr;
    }
    
    /**
     * Checks to see if the letter selected by the player matches a letter in the phrase.
     * @param   {string}    letter  The letter we are checking for in the phrase
     */
    checkLetter (letter) {
        return this.phrase.includes(letter);
    }
    
    /**
     * Reveals the letter(s) on the board that matches the player's selection.
     * @param   {string}    letter  the letter being revealed in the phrase on the board
     */
    showMatchedLetter (letter) {
        const letterGroup = document.querySelectorAll(`.letter.${letter}`);
        
        for (const letter of letterGroup) {
            letter.classList.remove('hide');
            letter.classList.add('show');
        }
    }
}