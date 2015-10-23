var primesCalculator = require('./primesCalculator');

function PrimesTable(n) {
	if (typeof n !== 'number')
		throw new Error('n must be a number. actual value is ' + n);

	this.primes = primesCalculator.getPrimes(n);

	// insert the fake '1' element at the start
	this.primes.unshift(1);
}

PrimesTable.prototype.elementAt = function(row, col) {
	return this.primes[row] * this.primes[col];
};

module.exports = PrimesTable;