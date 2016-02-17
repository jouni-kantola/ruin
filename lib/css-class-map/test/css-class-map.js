const should = require('chai').should();

const map = require('../');

describe('css-class-map', () => {
    
    describe('defaults', () => {
        it('can only map arrays', () => {
            const expectedError = "Only arrays are supported mapping types.";

            () => {
                map(undefined, undefined);    
            }.should.throw(expectedError);
            
            () => {
                map([], undefined);    
            }.should.throw(expectedError);
            
            () => {
                map("1,2,3", "1,2,3");
            }.should.throw(expectedError);
            
            () => {
                map([], "1,2,3");
            }.should.throw(expectedError);
            
            map([], []).should.be.ok;
            
        });
    });
    
    describe('map', () => {
        it('should take list and create map', () => {
            const classNames = ['a-class', 'another-class'];
            const shortClassNames = ['a', 'b'];
            
            const cssClassMap = map(classNames, shortClassNames);
            const keys = Object.keys(cssClassMap);
            keys.forEach((key, index) => {
                classNames.findIndex(val => val === key).should.equal(index);
                cssClassMap[key].should.be.ok;
            });
            
            keys.length.should.equal(classNames.length);
        });
    });
    
});