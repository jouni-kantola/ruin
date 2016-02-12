var should = require('chai').should();

var mapper = require('../src/mapper');

describe('map', function() {
  describe('create', function () {
    
    var text = '.a-class {} .another-class {}';
    
    it('should take text and split to array', function () {
      var list = mapper.split(text);
      list.should.have.length(2);
    });
      
    it('should take text and create list', function () {
      var expected = ['a-class', 'another-class'];
      var list = mapper.split(text);
      list.should.eql(expected);
    });
    
    it('should take list and create map', function () {
      var list = ['a-class', 'another-class'];
      var expected = {'a-class': '', 'another-class': ''};
      
      var map = mapper.map(list);
      map.should.eql(expected);
    });
    
  });
});