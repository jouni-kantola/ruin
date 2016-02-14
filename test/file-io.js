const should = require("chai").should();

const file = require("../src/file-io");

describe("file-io", () => {
    describe("read", () => {
        it("should open files matching glob", (done) => {
            file.open("**/*.js").then(files => {
                files.should.exist;
                done();
            })
        });
    });
});