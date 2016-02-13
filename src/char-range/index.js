/**
* Returns a range of chars
*
* Example: from = "A", to = "C" returns ["A", "B", "C"]
**/
module.exports = (from, to) => {
    "use strict";

    let chars = [];

    let charCodeOfFrom = from.charCodeAt(0),
        charCodeOfTo = to.charCodeAt(0),
        start = Math.min(charCodeOfFrom, charCodeOfTo),
        end = Math.max(charCodeOfFrom, charCodeOfTo);

    for (let i = start; i <= end; i++) {
        chars.push(String.fromCharCode(i));
    }

    return chars;
};