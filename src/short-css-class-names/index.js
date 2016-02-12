/**
* Returns an array with valid CSS class names that are between 1 and 3 chars long.
*
* Return value in pseudo code:
* [
*    "A",
*    "B",
*    ...
*    "Z__",
* ]
**/
module.exports = function() {
    "use strict";

    let charRange = require("./char-range"),
        digits = charRange("0", "9"),
        letters = charRange("A", "Z").concat(charRange("a", "z")),
        hyphenAndUnderscore = ["-", "_"];

    let validFirstChars = letters,
        allValidChars = digits.concat(letters).concat(hyphenAndUnderscore);

    let classNames = [];

    for (let firstChar of validFirstChars) {
        // Class names that are 1 char in length
        classNames.push(firstChar);

        for (let secondChar of allValidChars) {
            // Class names that are 2 chars in length
            classNames.push([firstChar, secondChar].join(""));

            for (let thirdChar of allValidChars) {
                // Class names that are 3 chars in length
                classNames.push(
                    [firstChar, secondChar, thirdChar].join("")
                );
            }
        }
    }

    // Shortest names first
    classNames.sort((a, b) => a.length - b.length);

    return classNames; 
};