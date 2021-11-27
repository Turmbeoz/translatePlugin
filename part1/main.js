/**
 *  returns true if string is a palindrome (the string is the same forward and backwards). The parameters entered may have puncutations and symbols, but they should not affect whether the string is a palindrome
 *  palindrome("Anne, I vote more cars race Rome-to-Vienna"); -> true
 *  palindrome("llama mall"); -> true
 *  palindrome("jmoney"); -> false
 */
function palindrome(string) {
	// remove all not alpha characters , to lowercase
	if (string.length < 2) {
		return true;
	}
	const isAlphabet = (letter) => "a" <= letter && letter <= "z";
	const littleString = string.toLowerCase();
	let backwardString = "";
	let cleanString = "";
	for (let i = string.length - 1; i >= 0; i--) {
		if (isAlphabet(littleString[i])) {
			backwardString += littleString[i];
		}
	}
	for (let i = 0; i < string.length; i++) {
		if (isAlphabet(littleString[i])) {
			cleanString += littleString[i];
		}
	}

	return backwardString === cleanString;
	// compare each character in the string to the isAlpha function ? false , skip it if True
	// using 2 pointer system compare start value to end value
	// work our way to the middle
}
// console.log(palindrome("Lisa Bonet ate no basil"))
// console.log(palindrome("A Toyota! Race fast, safe car! A Toyota!"))
/**
 * returns true is the input is prime.
 * isPrime(1); -> false
 * isPrime(2); -> true
 * isPrime(3); -> true
 * isPrime(4); -> false
 */
function isPrime(num) {
	if (num === 1) return false;

	let i = 2;
	while (i < num) {
		if (num % i === 0) {
			return false;
		}
		i++;
	}
	return true;
}
// console.log(isPrime(17));
// console.log(isPrime(2));
/** returns the nth fibonacci number. A Fibonnaci sequence is a list of numbers that begin with 0 and 1, and each subsequent number is the sum of the previous two
 * nthFibonacci(0); -> 0
 * nthFibonacci(1); -> 1
 * nthFibonacci(2); -> 1
 * nthFibonacci(3); -> 2
 * nthFibonacci(4); -> 3
 * Try to use recursion. What is the time complexity? Are you repeating the same function call with the
 * same arguments frequently? Are you able to compute nthFibonacci(1000)? If not, recursive algorithms can be
 * made MUCH more efficient using memoization. Try memoizing each result from nthFibonacci and see the
 * performance difference.
 */
function nthFibonacci(num, acc = { 0: 0, 1: 1 }) {
	if (acc.hasOwnProperty(num)) return acc[num];
	acc[num] = nthFibonacci(num - 1, acc) + nthFibonacci(num - 2, acc);
	return acc[num];
}

/** returns a function with a context bound to this
 *
 * const mattObj = {
 *  name: 'matt',
 *  shout: function() {
 *      console.log(this.name);
 *  }
 * };
 * let boundShout = functionBind(mattObj.shout, mattObj);
 * boundShout(); -> prints 'matt;
 *
 * const kimObj = {
 *  name: 'kim',
 *  shout: function() {
 *      console.log(this.name);
 *  }
 * };
 * boundShout = functionBind(mattObj.shout, kimObj);
 * boundShout(); -> prints 'kim'
 *
 * boundShout = functionBind(mattObj.shout, {name: 'bob'});
 * boundShout(); -> prints 'bob'
 */
function functionBind(func, context) {
	context.func = func;
	return () => context.func();
}

// const mattObj = {
// 	name: "matt",
// 	shout: function () {
// 		console.log(this.name);
// 	},
// };
// let boundShout = functionBind(mattObj.shout, mattObj);
// boundShout();
// // -> prints 'matt';

// const kimObj = {
// 	name: "kim",
// 	shout: function () {
// 		console.log(this.name);
// 	},
// };
// boundShout = functionBind(mattObj.shout, kimObj);
// boundShout();
// //  -> prints 'kim'

// boundShout = functionBind(mattObj.shout, { name: "bob" });
// boundShout();
// //  -> prints 'bob'

/**
 * returns every sequence of throws a single player could throw over an n-round game of rock-paper-scissors
 * rockPaperScissors(1); -> [['rock'],['paper'],['scissors']]
 * rockPaperScissors(2); ->
 * [['rock','rock'],['rock','paper'],['rock','scissors'],
 * ['paper','paper'],['paper','scissors'],['paper','rock'],
 * ['scissors','scissors'],['scissors','paper'],['scissors','rock']]
 */
function rockPaperScissors(num) {
	if (num === 0) return [];

	function rps(num, path) {
		if (num === 0) return outcomes.push(path);

		rps(num - 1, path.concat("rock"));
		rps(num - 1, path.concat("paper"));
		rps(num - 1, path.concat("scissors"));
	}
	const outcomes = [];
	rps(num, []);
	return outcomes;
}

console.log(rockPaperScissors(2));
// iterate through with two for loops[]
// one loop holds the base array of 3 options
//
// second loop  adds the options to the base array
//const base = ["rock", "paper", "scissors"];
// 	const length = 3 ** num
// 	const output = [];
// 	for (let i = 0; i < length; i++) {
// 		const newArr = [];
// 		for (let j = 0; j < num; j++) {
// 			newArr.push(base[i]);
// 			for(let k = 0; k < base.length; k++){

// 			}

// 		}
// 		output.push(newArr)
// 	}
// 	return output;
// //
function insertionSort(array) {}

function bubbleSort(array) {}

function mergeSort(unsortedArray) {
	if (unsortedArray.length <= 1) {
		return unsortedArray;
	}

	const middle = Math.floor(unsortedArray.length / 2);

	const left = mergeSort(unsortedArray.slice(0, middle));
	const right = mergeSort(unsortedArray.slice(middle));

	return merge(left, right);

	function merge(left, right) {
		let merged = [],
			leftIndex = 0,
			rightIndex = 0;

		while (leftIndex < left.length && rightIndex < right.length) {
			if (left[leftIndex] < right[rightIndex]) {
				merged.push(left[leftIndex]);
				leftIndex++;
			} else if (left[leftIndex >= right[rightIndex]]) {
				merged.push(right[rightIndex]);
				rightIndex++;
			} else {
				merged.push(left[leftIndex++] || right[rightIndex++]);
			}
		}

		return merged;
	}
}
