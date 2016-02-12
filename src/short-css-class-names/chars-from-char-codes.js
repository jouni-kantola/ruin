"use strict";

/**
* Returns an array of chars (one char strings) based on the char point 
* arguments.
*
* Example: from = 65, to = 67 returns ["A", "B", "C"]
**/
module.exports = function charsFromCharCodes(from, to) {
    let chars = [];

    for (let i = from; i <= to; i++) {
        chars.push(String.fromCharCode(i))
    }

    return chars;
}