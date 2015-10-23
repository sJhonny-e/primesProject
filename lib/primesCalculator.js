
module.exports = { 
	getPrimes: function(n) {
		if (n < 1) return [];
		var result = [2], curr = 3;

		while (result.length < n) {
			var dividerFound = false;
			for (var i = 0; i < result.length; ++i) {
				if (!(curr % result[i])) {
					dividerFound = true;
					break;
				}
			}
			if (!dividerFound) result.push(curr);
			curr += 2;
		}

		return result;
	}
};