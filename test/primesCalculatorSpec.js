var expect = require('chai').expect;

var calculator = require('../lib/primesCalculator');

describe('primesCalculator', function(){

	describe('#getPrimes(n)', function(){
		it('returns empty array when n < 1', function(){
			expect(calculator.getPrimes(0)).to.be.empty;
		});

		it('returns [2] when n =2', function(){
			// using deep equal to assert that the array is ordered
			expect(calculator.getPrimes(1)).to.deep.equal([2]);
		});

		it ('returns [2,3,5,7] when n = 4', function(){
			expect(calculator.getPrimes(4)).to.deep.equal([2,3,5,7]);
		});
	});
});