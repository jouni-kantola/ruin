function replace(text, source, target) {
    var re = new RegExp(`\\.${source}(?=[\\s\\r\\n\\.{])`, "g");
    const targetCssClass = target.startsWith(".") ? target : `.${target}`;
    return text.replace(re, targetCssClass);
}

function replaceAll(text, cssClassMap) {
    return Object.keys(cssClassMap).reduce((processedText, sourceCssClass) => {
        return replace(processedText, sourceCssClass, cssClassMap[sourceCssClass]);
    }, text);
}

module.exports = {
    replace: replace,
    replaceAll: replaceAll
};