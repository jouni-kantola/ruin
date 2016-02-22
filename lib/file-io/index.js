const glob = require("glob");
const fs = require("fs");

const encoding = "utf8";

function find(pattern) {
    return new Promise((resolve, reject) => {    
        glob(pattern, (err, files) => {
            if(err) reject(err);
            resolve(files);
        });
    }); 
}

function read(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, encoding, (err, content) => {
            if(err) reject(err);
            resolve({ path, content });
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
    find: find,
    read: read,
    write: write
};