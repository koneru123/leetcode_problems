/* Array of Array Products
https://leetcode.com/problems/product-of-array-except-self/
Given an array of integers arr, you’re asked to calculate for each index i 
the product of all integers except the integer at that index
 (i.e. except arr[i]). Implement a function arrayOfArrayProducts that 
 takes an array of integers and returns an array of the products.

Solve without using division and analyze your solution’s time and space complexities.

Examples:

input:  arr = [8, 10, 2]
output: [20, 16, 80] # by calculating: [10*2, 8*2, 8*10]

input:  arr = [2, 7, 3, 4]
output: [84, 24, 56, 42] # by calculating: [7*3*4, 2*3*4, 2*7*4, 2*7*3]

Constraints:

[time limit] 5000ms

[input] array.integer arr

0 ≤ arr.length ≤ 20
[output] array.integer */

/*
    I: Array
    O: Array
    C: Less time
    E:
        - Array can be empty, in this case it could just have 1 value // return []
        - Array can have -ve values
*/
function arrayOfArrayProducts(arr) {

    // initialize a result array, set it to an empty array
    let resultArr = [];
    // initialize a left array, set the first value in the array to 1
    let leftArr = [1];
    // initialize a right array and set it to empty
    let rightArr = [];
    // set the last element to 1
    rightArr[arr.length - 1] = 1;

    // check for the edgecase
    if(arr.length === 1) {
        return [];
    }
    // loop through the array, starting at i = 1
    // because the first element is always 1
    for(let i = 1; i < arr.length; i++) {
        // calculate the product of all the elements on the left of each index
        leftArr[i] = leftArr[i-1] * arr[i-1];
    }
    // loop through the array, starting at the last but one element in the array
    // since last element is always 1
    // keep decrementing 
    for(let i = arr.length - 2; i > -1; i--) {
        // calculate the product of all the elements on the right of each index 
        rightArr[i] = rightArr[i+1] * arr[i+1];
    }

    // loop through the array again
    for(let i = 0; i < arr.length; i++) {
        // multiply each element of left and right array, to get the resultArr
        resultArr[i] = leftArr[i] * rightArr[i];
    }
    // return the result array
    return resultArr;
}

const input = [8, 10, 2];
const input1 = [2, 7, 3, 4];
console.log(arrayOfArrayProducts(input));
console.log(arrayOfArrayProducts(input1));

/* Complexity analysis

Time complexity : O(N)O(N) where NN represents the number of elements in the input array. 
We use one iteration to construct the array LL, one to construct the array RR and one 
last to construct the answeranswer array using LL and RR.

Space complexity : O(N)O(N) used up by the two intermediate arrays that we constructed to 
keep track of product of elements to the left and right. 
*/