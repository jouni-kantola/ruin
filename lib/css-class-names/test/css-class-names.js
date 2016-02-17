const should = require("chai").should();

const cssClasses = require("../");

describe("css-class-names", () => {
    describe("split text", () => {
        const text = ".a-class {} .another-class {}";
        
        it("should take text and split to array", () => {
            cssClasses.split(text).should.have.length(2);
        });

        it("should take text and create list", () => {
            const expected = ["a-class", "another-class"];
            cssClasses.split(text).should.eql(expected);
        });
    });
    
    describe("replace in text", () => {
        const content = `.a-class {}
                         .another-class {}
                         .a-class {}`;
        
        it("should replace source with target", () => {
            const source = "a-class";
            const target = "replaced-class";
            
            const text = cssClasses.replace(content, source, target);

            const sourceRegExp = new RegExp(`.${source}`, 'g');
            should.not.exist(text.match(sourceRegExp));
            
            const targetRegExp = new RegExp(`.${target}`, 'g');
            text.match(targetRegExp).length.should.equal(2);
            
            text.match(/(?!\.)[0-9a-z\-]+/g).length.should.equal(3);
        });
        
        it("should replace all in css class map", () => {
            const cssClassMap = {
                'a-class': 'a-replaced-class',
                'another-class': 'another-replaced-class'
            };
            const expected = ".a-replaced-class{}.another-replaced-class{}.a-replaced-class{}";
            
            const updatedContent = cssClasses.replaceAll(content, cssClassMap);
            
            updatedContent.replace(/\s/g, "").should.equal(expected);
        });
    });
});