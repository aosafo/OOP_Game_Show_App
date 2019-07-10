/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    /**
     * Display phrase on game board
     */
    addPhraseToDisplay() {
                let space = document.createTextNode(" ");
                li.appendChild(space);
            }
                li.classList.add("letter");
                li.classList.add(this.phrase[i]);
                let letter = document.createTextNode(this.phrase[i]);
                li.appendChild(letter);
            }
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
     */
    checkLetter(letter) {
            if (this.phrase[j] == letter)
                return true;
        }
    /**
     * Displays passed letter on screen after a match is found
     * @param (string) letter - Letter to display
     */
    showMatchedLetter(letter) {

        // Get the matchedLetters that have a class name letter
        const matchedLetters = document.getElementsByClassName(letter);

        // Loop through the matchedLetters and replace the hide class with show
        for (let k = 0; k < matchedLetters.length; k++) {
            matchedLetters[k].className = matchedLetters[k].className.replace(/\bhide\b/g, "show");
        } 
    }
}