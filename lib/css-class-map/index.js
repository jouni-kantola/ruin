module.exports = (cssClassNames, shortCssClassNames) => {
    if(!Array.isArray(cssClassNames) || !Array.isArray(shortCssClassNames)) throw new Error("Only arrays are supported mapping types.");
    
    return cssClassNames.reduce((prev, curr) => {
        prev[curr] = shortCssClassNames.shift();
        return prev;
    }, {});
};