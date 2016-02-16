function split(text){
    var pattern = /(?!\.)[0-9a-z\-]+/g;
    return text.match(pattern);
}

function map(classNames, terseClassNames){
    if(!Array.isArray(classNames) || !Array.isArray(terseClassNames)) throw new Error("Only arrays are supported mapping types.");
    
    return classNames.reduce((prev, curr) => {
        prev[curr] = terseClassNames.shift();
        return prev;
    }, {});
}

module.exports = {
    split: split,
    map: map
};