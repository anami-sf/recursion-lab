// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

// This function returns the largest number in a given array.
function findMax(arr, idx=0, max=arr[0]){
    
    if (idx === (arr.length)){
        return max
    }
    //recursive step

    if (arr[idx] >= max){
        max = arr[idx]
    } 
    //increase arguments
    return findMax(arr, idx+1, max)    
}
let arr1 = [-5,-4, -18, -1]
console.log('1. findMax: ', findMax(arr1))

// This function returns the factorial of a given number.
function factorial(num){
    if (num ===0 || num === 1) {
        return 1
    } else {
        return (num * factorial(num -1))
    }
    
}

console.log('2. factorial: ', factorial(4))
// function fibonacci(){
//     // This function returns the Nth number in the fibonacci sequence.
//     // https://en.wikipedia.org/wiki/Fibonacci_number
//     // For this function, the first two fibonacci numbers are 1 and 1
// }

// function coinFlips(){
//     // This function returns an array of all possible outcomes from flipping a coin N times.
//     // Input type: Integer
//     // For example, coinFlips(2) would return the following:
//     // ["HH", "HT", "TH", "TT"]
//     // H stands for Heads and T stands for tails
//     // Represent the two outcomes of each flip as "H" or "T"
// }

// function letterCombinations(){
//     // This function returns an array of all combinations of the given letters
//     // Input type: Array of single characters
//     // For example, letterCombinations(["a","b","c"]) would return the following:
//     // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
// }