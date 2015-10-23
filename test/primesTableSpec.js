var expect = require('chai').expect;
var sinon = require('sinon');

var primesTable = require('../lib/primesTable');

var primesServiceApi = {getAllPrimes: function(n) {}};

describe('primesTable', function(){
	describe('#new(n)',function(){
		it('should throw when n is not defined',function(){
			expect(function() { new primesTable() }).to.throw();
		})
	})
})