module.exports = (cssClassNames, shortCssClassNames) => {
    if(!Array.isArray(cssClassNames) || !Array.isArray(shortCssClassNames)) throw new Error("Only arrays are supported mapping types.");
    if(!cssClassNames.length || !shortCssClassNames.length) throw new Error("Only non-empty arrays can be mapped.");
    
    return cssClassNames.reduce((prev, curr) => {
        prev[curr] = shortCssClassNames.shift();
        return prev;
    }, {});
};