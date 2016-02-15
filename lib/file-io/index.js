const glob = require("glob");

function open(pattern){
    return new Promise((resolve, reject) => {
        glob(pattern, (err, files) => {
            if(err) reject(err);
            resolve(files);
        });
    }); 
}

module.exports = {
    open: open
};