const io = require("./file-io");
const cssClasses = require("./css-class-names");
const shortCssClasses = require("./short-css-class-names");
const map = require("./css-class-map");

module.exports = (glob) => {
    console.log(`=> Searching for files matching glob '${glob}'...`);
    io.find(glob).then(files => {
        console.log("=> Found", files);
        files.forEach(path => io.read(path).then(content => {
            console.log(`=> Processing '${path}'...`);

            // 1. Build source class list
            const sourceCssClasses = cssClasses.split(content);

            // 2. Build terse class list
            const targetCssClasses = shortCssClasses(sourceCssClasses.length);

            // 3. Map source with target 
            const classMap = map(sourceCssClasses, targetCssClasses);

            // 4. Replace values in source content
            const updatedContent = cssClasses.replaceAll(content, classMap);
                    
            // 5. Write target(/source) file
            io.write(path, updatedContent).then(outPath => {
                console.log(`<= Ruined '${outPath}'!`);
            });
        }));
    });
};