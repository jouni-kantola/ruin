"use strict";

let should = require("chai").should(),
    classNames = require("../src/short-css-class-names")();

describe("classNames", function() {
    it("should contain heaps of names", function() {
        classNames.length.should.equal(216372);
    });

    it("should not contain names with more than 3 chars", function() {
        classNames
            .find((name) => name.length > 3)
            .should.equal(0);
    });
    
    it("should not contain names that begin with a digit", function() {
        classNames
            .find((name) => /^[0-9]/.test(name))
            .should.equal(0);
    });
});