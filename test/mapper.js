var should = require('chai').should();

var mapper = require('../src/mapper');

describe('map', () => {
    
    describe('defaults', () => {
        it('can only map arrays', () => {
            const expectedError = "Cannot map list of type ";
            
            () => {
                mapper.map(undefined);    
            }.should.throw(expectedError + typeof undefined);
            
            () => {
                mapper.map("1,2,3");    
            }.should.throw(expectedError + typeof "");
            
            mapper.map([]).should.be.ok;
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
            const list = ['a-class', 'another-class'];
            
            const map = mapper.map(list);
            const keys = Object.keys(map);
            keys.forEach((key, index) => {
                list.findIndex(val => val === key).should.equal(index);
                map[key].should.be.ok;
            });
            
            keys.length.should.equal(list.length);
        });
    });
    
});