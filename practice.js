// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

// This function returns the largest number in a given array.
function findMax(arr, idx=0, max=0){
    if (idx === (arr.length -1)){
        return max
    }
    //recursive step
    if (arr[idx] >= max){
        max = arr[idx]
    }
    //increase arguments
    idx++
    return findMax(arr, idx, max)    
}
let arr1 = [5,4, 18, 1]
console.log(findMax(arr1))

// function factorial(){
//     // This function returns the factorial of a given number.
// }

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