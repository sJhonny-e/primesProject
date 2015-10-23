
module.exports = { 
	getPrimes: function(n) {
		if (n < 1) return [];
		var result = [2], curr = 3;

		while (result.length < n) {
			var dividerFound = false;
			// checking current number against all the previously found primes; if it's not divisible by any of them- it's a prime too
			for (var i = 0; i < result.length; ++i) {
				if (!(curr % result[i])) {
					dividerFound = true;
					break;
				}
			}
			if (!dividerFound) result.push(curr);	// no divider found- this is a prime
			curr += 2;	// move in increments of 2 (no use checking for even numbers other than 2)
		}

		return result;
	}
};