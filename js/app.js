/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js 
 * Author: Joe Bertino, 2020
 */
 

const startButton = document.querySelector('#btn__reset');
const game = new Game();

startButton.addEventListener('click', function () {
    // Start the game
    game.startGame();
});

document.querySelector('#qwerty').addEventListener('click', function (event) {
    // Only trigger this behavior if a QWERTY letter button is pressed
    if (event.target.className === 'key') {
        // event.target is the button that was pressed, which we pass to the method
        game.handleInteraction(event.target);
    }
});

/**
 * Listen for user keyboard presses. 
 * If (1) the game has been started (overlay is hidden), and
 *    (2) the key pressed is alphabetic, then
 * find the corresponding on-screen button. If that button is still enabled, pass it to handleInteraction() to play that selected letter in the game.
 */
document.addEventListener('keydown', function(e) {
    // If the key pressed is alphabetic, AND the game has been started    
    if (document.querySelector('#overlay').style.display === 'none' &&
        e.code.substring(0,3)==='Key') { 
        // List all letter buttons
        const btnList = document.querySelectorAll('button.key')
        
        // Find the letter button corresponding to the pressed key
        // make e.key lowercase in case the user is holding the Shift key
        const btn = [...btnList].find((btn) => btn.textContent === e.key.toLowerCase())
    
        // If the button is not disabled
        if (btn && !btn.disabled) {
            game.handleInteraction(btn);
        }    
    }
});