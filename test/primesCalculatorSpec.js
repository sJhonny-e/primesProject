var expect = require('chai').expect;

var calculator = require('../lib/primesCalculator');

describe('primesCalculator', function(){

	describe('#getPrimes(n)', function(){
		it('returns empty array when n < 2', function(){
			expect(calculator.getPrimes(1)).to.be.empty;
		});

		it('returns [2] when n =2', function(){
			expect(calculator.getPrimes(2)).to.have.members([2]);
		});
	});
});