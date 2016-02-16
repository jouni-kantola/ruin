const should = require("chai").should();
const mock = require('mock-fs');

const io = require("../");

describe("file-io", () => {
    describe("find", () => {
        it("should find files matching glob", (done) => {
            const path = "fake-dir/target-file.js";
            const mockedFile = { [path]: "" }; 
            mock(mockedFile);
            
            io.find("**/*.js").then(files => {
                files.should.exist;
                files.should.include(path);
                mock.restore();
                done();
            }, err => {
                console.log(err);
                mock.restore();
                done();
            });
        });
    });

    describe("read", () => {
        it("should read file", (done) => {
            const path = "fake-dir/read-target-file";
            const content = "reading lorem ipsum";
            const mockedFile = { [path]: content }; 
            mock(mockedFile);
            
            io.read(path).then(data => {
                data.should.equal(content);
                mock.restore();
                done();
            }, err => {
                console.log(err);
                mock.restore();
                done();
            });
        });
    });
    
    describe("write", () => {
        it("should write content to file", (done) => {
            const path = "fake-dir/write-target-file";
            const content = "writing lorem ipsum";
            const mockedFile = { [path]: '' }; 
            mock(mockedFile);
            
            io.write(path, content).then(file => {
                io.read(path).then(data => {
                    data.should.equal(content);
                    mock.restore();
                    done();
                }, err => {
                    console.log(err);
                    mock.restore();    
                    done(); 
                });
            }, err => {
                console.log(err);
                mock.restore();
                done();
            });
        });
    });
});