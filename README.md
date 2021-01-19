# phrase_guess
### Browser-based phrase-guessing game. Like Wheel of Fortune without the wheel.

Author: Joe Bertino, 2020

---

Play "Phrase Hunter", the browser-based word guessing game! Built with Javascript and OOP, this game offers the user a hidden phrase. The user must guess the letters that compose the phrase. If they guess five wrong letters before completing the phrase, they lose the round. Don't fear though---the user will always be offered another chance to play!

---

#### How to play

The program will choose a random phrase, split the phrase into letters, and put those letters onto the gameboard. At the beginning, the player only sees the number of letters and words in the phrase, represented by blank boxes on the screen.

The player clicks an onscreen keyboard to guess letters in the phrase. If the letter is in the phrase, the gameboard displays the chosen letters on the screen. Otherwise, the player will lose a "life", represented by a heart.

A player continues to select letters until they guess the phrase (and win), or make five incorrect guesses (and lose).

If the player completes the phrase before they run out of guesses, a winning screen appears. If the player guesses incorrectly five times, a losing screen appears.

A player can guess a letter only once. After they’ve guessed a letter, the program disables that letter on the onscreen keyboard. 