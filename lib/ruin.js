const io = require("./file-io");
const classList = require("./class-list");
const terseClassList = require("./terse-class-list");
const classMap = require("./class-map");

module.exports = (glob) => {
    const files = io.find(glob);
    files.forEach(file => io.read(file).then(content => {
        
        // 1. Build source class list
        const sourceCssClasses = classList(content);
        
        // 2. Build terse class list
        const targetCssClasses = terseClassList(sourceCssClasses);
        
        // 3. Map source with target 
        const map = classMap.map(sourceCssClasses, targetCssClasses);
        
        // 4. Replace values in source content
        
        // 5. Write target(/source) file
        
    }));
};