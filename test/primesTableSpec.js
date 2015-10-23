var expect = require('chai').expect;
var sinon = require('sinon');

var PrimesTable = require('../lib/primesTable');
var primesCalculatorDep = require('../lib/primesCalculator');

describe('PrimesTable', function(){
	describe('#new(n)',function(){
		it('should throw when n is not defined',function(){
			expect(function() { new PrimesTable() }).to.throw();
		});

		it ('should throw when n is not a number',function(){
			expect(function() { new PrimesTable('kuku') }).to.throw();
		});

		it ('should calculate prime numbers up to n using primes calculator', function(){
			var n = 4;
			var mock = sinon.mock(primesCalculatorDep);
			mock.expects('getPrimes').once().withArgs(n).returns([2,3,5,7]);

			var table = new PrimesTable(n);
			mock.verify();
			mock.restore();
		})
	});
});