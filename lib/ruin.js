const io = require("./file-io");
const cssClasses = require("./css-class-names");
const shortCssClasses = require("./short-css-class-names");
const map = require("./css-class-map");

module.exports = (glob) => {
    console.log(`=> Searching for files matching glob '${glob}'...`);
    io.find(glob).then(files => {
        console.log("=> Found", files);
        Promise.all(files.map(io.read)).then(files => { 
            
            // 1. Build source class list
            const content = files.map(file => file.content);
            const sourceCssClasses = cssClasses.split(content);
            
            // 2. Build target class list
            const targetCssClasses = shortCssClasses(sourceCssClasses.length);

            // 3. Map source with target 
            const classMap = map(sourceCssClasses, targetCssClasses);
            
            // 4. Replace values in source content
            files.map(file => ({ path: file.path, content: cssClasses.replaceAll(file.content, classMap) }))
                 .forEach(file => {
                     // 5. Write target(/source) file
                     io.write(file.path, file.content).then(outPath => {
                        console.log(`<= Ruined '${outPath}'!`);
                    });
                 })
        });
    });
};