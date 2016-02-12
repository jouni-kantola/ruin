var should = require('chai').should();

var hodgepodge = require('../src/hodgepodge');

describe('hodgepodge', function() {
  describe('create', function () {
        
    it('should hash', function () {
      hodgepodge.uid().should.be.ok;
    });
    
  });
});