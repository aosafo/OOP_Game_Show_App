/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
     * Creates phrases for use in game
     * @return {array} An array of phrases that could be used in the game
     */
    createPhrases() {
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase() {
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
     * Checks for winning move
     * @return {boolean} True if game has been won, false if game wasn't
       won
     */
    checkForWin() {
        const letters = document.getElementsByClassName("letter");
                return false;
        }
    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife() {

        // Get all the lives
        const lives = document.getElementsByClassName("tries");
        
        lives[this.missed].firstElementChild.src = "images/lostHeart.png";

        if (this.missed == 4) {
            this.gameOver(false);
        }

        this.missed++;
    }

    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver(gameWon) {

        // Display the original start screen overlay
        let overlay = document.getElementById("overlay");

        // Get the overlay h1 element
        const game_over_message = document.getElementById("game-over-message");

        // If the user won the game, display win message, else display loss
        // message
        if (gameWon) {
            game_over_message.innerText = "Great Job!";
            overlay.className = overlay.className.replace(/\bstart\b/g, "win");
        }
        else {
            game_over_message.innerText = "Sorry, better luck next time!";
            overlay.className = overlay.className.replace(/\bstart\b/g, "lose");
        }

    }
}