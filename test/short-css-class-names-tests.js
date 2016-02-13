(function() {
    "use strict";

    const should = require("chai").should();

    describe("classNames", function() {
        const maxLength = 216372;
        
        describe("defaults", function() {
            const classNames = require("../src/short-css-class-names")();
            
            it("should contain heaps of names", function() {
                classNames.length.should.equal(maxLength);
            });

            it("should not contain names with more than 3 chars", function() {
                should.not.exist(classNames.find(name => name.length > 3));
            });
            
            it("should not contain names that begin with a digit", function() {
                should.not.exist(classNames.find(name => /^[0-9]/.test(name)));
            });
        });
        
        describe("specified length", function() {
            it("exceeded range should return default max", function() {
                const classNames = require("../src/short-css-class-names")(Number.MAX_VALUE);                
                classNames.length.should.equal(maxLength);
            });
            
            it("exceeded range should return default max", function() {
                const rangeLength = 999;
                const classNames = require("../src/short-css-class-names")(rangeLength);                
                classNames.length.should.equal(rangeLength);
            });
        });
    });
})();