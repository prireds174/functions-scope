console.log("I'm Here")
// 1.1. What is the difference between a parameter and an argument?
/* Parameters are variables
Arguments are the values we pass to the function, given from the variables the parameters have.*/
// 1.2. Within a function, what is the difference between return and console.log?
/* console.log will print a value given, while return will run thru a function to get said value*/
// 1. 3. What are the implications of the ability of a function to return a value?
/* whether or not the given variables are local or global*/

// 2. calculateCube
function calculateCube(num) {
    return (num*num*num)
    // YOUR CODE HERE
}
console.log(calculateCube(5));

// 3. isAVowel

let vowel = ["a", "e","i"];

function isAVowel(letter) {
    for (let i = 0; i < vowel.length; i++){
    if (letter === vowel[i]) {
        return true
    } else { 
        return false}
    }
}

console.log(isAVowel("a"))

    // YOUR CODE HERE 

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
    return ([word1.length, word2.length])
}

console.log(getTwoLengths("Potato", "Yellow"));

// 5. sumArray

let num = 0
function sumArray(arr) {

    // YOUR CODE HERE

    for (let i = 0; i < arr.length; i++){
        num += arr[i]

    }
    return num
}

console.log(sumArray([1, 2, 3, 4, 5, 6]))

// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
}

// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
}

// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
}

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    // YOUR CODE HERE
}

// 9. findNeedle
function findNeedle(arr) {
    // YOUR CODE HERE
}

// 10. sumPositive
function sumPositive(arr) {
    // YOUR CODE HERE
}
/*
module.exports = {
    calculateCube,
    isAVowel,
    getTwoLengths,
    sumArray,
    checkPrime,
    printPrimes,
    printLongestWord,
    eulerFibo,
    findNeedle,
    sumPositive
};*/