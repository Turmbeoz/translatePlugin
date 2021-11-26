/**
 *  returns true if string is a palindrome (the string is the same forward and backwards). The parameters entered may have puncutations and symbols, but they should not affect whether the string is a palindrome
 *  palindrome("Anne, I vote more cars race Rome-to-Vienna"); -> true
 *  palindrome("llama mall"); -> true
 *  palindrome("jmoney"); -> false
 */
function palindrome(string) {
// remove all not alpha characters , to lowercase 
if (string.length < 2) {return true}
const isAlphabet = letter => 'a'<= letter && letter <= 'z' ;
const littleString = string.toLowerCase()
let backwardString = "";
let cleanString = "";
for ( let i= string.length-1;i>0;i--){
    if(isAlphabet(littleString[i])){backwardString += littleString[i]}
}
    for (let i = 0;i<string.length-1 ; i++){
     if (isAlphabet(littleString[i])) {cleanString+=littleString[i]}
 }
 return (backwardString===cleanString) 
// compare each character in the string to the isAlpha function ? false , skip it if True 
// using 2 pointer system compare start value to end value 
// work our way to the middle

}
console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna"))
console.log(palindrome("llama mall"))
/**
 * returns true is the input is prime.
 * isPrime(1); -> false
 * isPrime(2); -> true
 * isPrime(3); -> true
 * isPrime(4); -> false
 */
function isPrime(num) {
    if(num === 1) return false
    // if(nu)
    let i = 2
    while(i<num){
        if(num % i === 0){
            return false
        }
        i++
    }
    return true
}
console.log(isPrime(17))
console.log(isPrime(2))
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
function nthFibonacci(num) {

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

}

/**
 * returns every sequence of throws a single player could throw over an n-round game of rock-paper-scissors
 * rockPaperScissors(1); -> [['rock'],['paper'],['scissors']]
 * rockPaperScissors(2); -> 
 * [['rock','rock'],['rock','paper'],['rock','scissors'],
 * ['paper','paper'],['paper','scissors'],['paper','rock'],
 * ['scissors','scissors'],['scissors','paper'],['scissors','rock']]
 */
function rockPaperScissors(num) {
    
}

function insertionSort(array) {
    
}

function bubbleSort(array) {
    
}

function mergeSort(array) {
    
}
