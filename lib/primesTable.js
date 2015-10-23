var primesCalculator = require('./primesCalculator');

function PrimesTable(n) {
	if (typeof n !== 'number')
		throw new Error('n must be a number. actual value is ' + n);

	this.primes = primesCalculator.getPrimes(n);
}

PrimesTable.prototype.elementAt = function(row, col) {
	return 1;
};

module.exports = PrimesTable;