var util = require('util');
var PrimesTable = require('./lib/primesTable');

// shamelessly copied from https://docs.nodejitsu.com/articles/command-line/how-to-prompt-for-command-line-input
process.stdin.resume();
process.stdin.setEncoding('utf8');


console.log('Please type the number of prime numbers you want to see in your table, or q to quit');
process.stdin.on('data', function (text) {
	text = text.trim();
	if (text === 'q') {
	  done();
	}

	try {
		var n = parseInt(text, 10);	// yeah, we don't allow hexa and that kind of stuff
		var table = new PrimesTable(n);
		printTableToConsole(table, n);
	}
	catch(e) {
		console.warn('couldnt compute a primes table; the error is: ', e);
	}
});

function printTableToConsole(table, n) {
	for (var i = 0; i  < n + 1; i++) {
		var row = '';
		for (var j =0; j < n + 1; j++) {
			var prime = table.elementAt(i, j);
			if (prime == 1) prime = '';
			row += prime + '\t|';
		}
		console.log(row);
	};
}

function done() {
	console.log('Thank you come again.');
	process.exit();
}