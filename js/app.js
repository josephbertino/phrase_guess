/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js 
 * Author: Joe Bertino, 2020
 */
 

const startButton = document.querySelector('#btn__reset');

startButton.addEventListener('click', function () {
    const game = new Game();
    game.startGame();
    
    document.querySelector('#qwerty').addEventListener('click', function (event) {
        // Only trigger this behavior if a QWERTY button is pressed
        if (event.target.className === 'key') {
            // event.target is the button that was pressed
            game.handleInteraction(event.target);
        }
    });
});

