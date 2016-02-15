const glob = require("glob");
const fs = require("fs");

const encoding = "utf8";

function open(pattern) {
    return new Promise((resolve, reject) => {    
        glob(pattern, (err, files) => {
            if(err) reject(err);
            resolve(files);
        });
    }); 
}

function read(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, encoding, (err, data) => {
            if(err) reject(err);
            resolve(data);
        });
    }); 
}

function write(path, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, content, encoding, err => {
            if(err) reject(err);
            resolve(path);
        });
    });
}

module.exports = {
    open: open,
    read: read,
    write: write
};