function split(text){
    var pattern = /(?!\.)[0-9a-z\-]+/g;
    return text.match(pattern);
}

function map(list){
    if(!Array.isArray(list)) throw new Error(`Cannot map list of type ${typeof list}`);
    
    const classNames = require("../short-css-class-names")(list.length);
        
    return list.reduce((prev, curr) => {
        prev[curr] = classNames.shift();
        return prev;
    }, {});
}

module.exports = {
    split: split,
    map: map
};