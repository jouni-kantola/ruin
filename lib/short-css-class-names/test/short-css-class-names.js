(function() {
    "use strict";

    const should = require("chai").should();

    describe("classNames", () => {
        const maxLength = 216372;
        
        describe("defaults", () => {
            const classNames = require("../")();
            
            it("should contain heaps of names", () => {
                classNames.length.should.equal(maxLength);
            });

            it("should not contain names with more than 3 chars", () => {
                should.not.exist(classNames.find(name => name.length > 3));
            });
            
            it("should not contain names that begin with a digit", () => {
                should.not.exist(classNames.find(name => /^[0-9]/.test(name)));
            });
            
            it("should only contain unique values", () => {
                 const uniqueValues = new Set(classNames);
                 uniqueValues.size.should.equal(maxLength);
            });
        });
        
        describe("specified length", () => {
            it("exceeded range should return default max", () => {
                const classNames = require("../")(Number.MAX_VALUE);                
                classNames.length.should.equal(maxLength);
            });
            
            it("exceeded range should return default max", () => {
                const rangeLength = 999;
                const classNames = require("../")(rangeLength);                
                classNames.length.should.equal(rangeLength);
            });
        });
    });
    
})();