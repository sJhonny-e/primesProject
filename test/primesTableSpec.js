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
		});
	});

	describe('#elementAt(row,col)',function(){
		var primesTable;
		var fakePrimes = [5,7,9,11];
		before(function(){
			sinon.stub(primesCalculatorDep, 'getPrimes').returns(fakePrimes.slice(0));	// use a copy for each new test
			primesTable = new PrimesTable(88);
		});

		it('returns 1 for (0,0)', function(){
			expect(primesTable.elementAt(0, 0)).to.equal(1);
		});

		it ('returns the (i-1)-th prime for (i, 0)', function(){
			expect(primesTable.elementAt(2, 0)).to.equal(fakePrimes[2-1]);
		});

		it ('returns the (j-1)-th prime for (0, j)', function(){
			expect(primesTable.elementAt(0, 3)).to.equal(fakePrimes[3-1]);
		});		

		it ('returns the product for arbitrary (i, j)', function(){
			expect(primesTable.elementAt(3, 2)).to.equal(fakePrimes[3-1] * fakePrimes[2-1]);
		});

		after(function(){
			primesCalculatorDep.getPrimes.restore();
		})
	});
});