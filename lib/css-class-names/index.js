function split(text) { 
    const re = /\.([A-z-_][\w-]*)[\s\r\n]*(?=[\.{])/g;
    const matches = new Set();

    var match;
    while (match = re.exec(text))
        matches.add(match[1].trim());

    return Array.from(matches);
}

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
    split: split,
    replace: replace,
    replaceAll: replaceAll
};