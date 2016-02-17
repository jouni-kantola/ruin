const should = require("chai").should();

const classList = require("../");

describe("css-class-names", () => {
    const text = '.a-class {} .another-class {}';
    
    it('should take text and split to array', () => {
        classList(text).should.have.length(2);
    });

    it('should take text and create list', () => {
        const expected = ['a-class', 'another-class'];
        classList(text).should.eql(expected);
    });
});