# primesProject
A small program to print out a matrix of prime numbers products.  

## Usage
use `node main.js` to run the program.  
### To run the tests:  
1. install mocha globally: `npm install -g mocha`
2. run `npm install`
3. run `mocha`

## What's nice about this
1. Using TDD helped create very small units of code
2. Presentation is completely irrelevant; you could use the PrimesTable class to generate an HTML table just as easily, without any changes
3. The whole thing is O(n), not much repetition, and the code is simple and understandable

## What can be improved
1. Better application of TDD (i.e test cases)
2. Better use of mocha and sinon (never used them before)
3. There's probably an even cooler way to compute the list of primes
4. String concatenation is probably not as efficient as it can be (in main.js)
5. Might have been nicer to actually have it displayed as an HTML table
