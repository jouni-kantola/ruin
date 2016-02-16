function map(classNames, terseClassNames){
    if(!Array.isArray(classNames) || !Array.isArray(terseClassNames)) throw new Error("Only arrays are supported mapping types.");
    
    return classNames.reduce((prev, curr) => {
        prev[curr] = terseClassNames.shift();
        return prev;
    }, {});
}

module.exports = {
    map: map
};