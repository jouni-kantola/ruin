const io = require("./file-io");
const classNames = require("./css-class-names");
const shortClassNames = require("./short-css-class-names");
const map = require("./css-class-map");

module.exports = (glob) => {
    const files = io.find(glob);
    files.forEach(file => io.read(file).then(content => {
        
        // 1. Build source class list
        const sourceCssClasses = classNames(content);
        
        // 2. Build terse class list
        const targetCssClasses = shortClassNames(sourceCssClasses.length);
        
        // 3. Map source with target 
        const classMap = map(sourceCssClasses, targetCssClasses);
        
        // 4. Replace values in source content
        
        // 5. Write target(/source) file
        
    }));
};