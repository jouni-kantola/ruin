var should = require('chai').should();

var charRange = require('../');

describe('char-range', function() {
  describe('create', function () {
    
    it('should create range', function () {
      var list = charRange("0", "9");
      list.should.have.length(10);
    });
    
  });
});