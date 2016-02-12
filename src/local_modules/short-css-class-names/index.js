"use strict";

/**
* Returns an array with valid CSS class names that are between 1 and 3 chars long.
*
* In plain code:
* [
*    "A00",
*    "A01",
*    ...
*    "Z__",
* ]
**/
module.exports = function() {
    let classNames = [],
        digits = [],
        letters = [],
        hyphenAndUnderscore = ["-", "_"],
        charsFromCharCodes = require("./chars-from-char-codes");

    digits = charsFromCharCodes("0".charCodeAt(0), "9".charCodeAt(0));
    letters = charsFromCharCodes("A".charCodeAt(0), "Z".charCodeAt(0));
    letters = letters.concat(charsFromCharCodes("a".charCodeAt(0), "z".charCodeAt(0)));

    let validFirstChars = letters,
        allValidChars = digits.concat(letters).concat(hyphenAndUnderscore);

    for (let firstChar of validFirstChars) {
        for (let secondChar of allValidChars) {
            for (let thirdChar of allValidChars) {
                let className = [firstChar, secondChar, thirdChar];
                classNames.push(className.join(""));
            }
        }
    }

    return classNames; 
};