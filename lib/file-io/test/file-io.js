const should = require("chai").should();

const io = require("../");

describe("file-io", () => {
    describe("read", () => {
        it("should open files matching glob", (done) => {
            io.open("**/*.js").then(files => {
                files.should.exist;
                done();
            });
        });
    });
});