var should = require('chai').should();

var mapper = require('../');

describe('map', () => {
    
    describe('defaults', () => {
        it('can only map arrays', () => {
            const expectedError = "Only arrays are supported mapping types.";
            
            () => {
                mapper.map(undefined, undefined);    
            }.should.throw(expectedError);
            
            () => {
                mapper.map([], undefined);    
            }.should.throw(expectedError);
            
            () => {
                mapper.map("1,2,3", "1,2,3");
            }.should.throw(expectedError);
            
            () => {
                mapper.map([], "1,2,3");
            }.should.throw(expectedError);
            
            mapper.map([], []).should.be.ok;
            
        });
    });
    
    describe('split', () => {
        const text = '.a-class {} .another-class {}';
        
        it('should take text and split to array', () => {
            const list = mapper.split(text);
            list.should.have.length(2);
        });
        
        it('should take text and create list', () => {
            const expected = ['a-class', 'another-class'];
            const list = mapper.split(text);
            list.should.eql(expected);
        });
    });
    
    describe('map', () => {
        it('should take list and create map', () => {
            const classNames = ['a-class', 'another-class'];
            const terseClassNames = ['a', 'b'];
            
            const map = mapper.map(classNames, terseClassNames);
            const keys = Object.keys(map);
            keys.forEach((key, index) => {
                classNames.findIndex(val => val === key).should.equal(index);
                map[key].should.be.ok;
            });
            
            keys.length.should.equal(classNames.length);
        });
    });
    
});