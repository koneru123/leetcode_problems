/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]

https://leetcode.com/problems/two-sum/
*/

/*
I: nums array and a target value
O: output should be an array
C: No constraint
E: nums can be an empty array
*/
var twoSum = function(nums, target) {
    // initialize an indexArr variable to an empty array
    let indexArr = [];
    
    // Time complexity would be O(2^n) - Exponential time
    // loop through the nums array twice to compare the consecutive numbers in the array
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++ ) {
            // check if the consecutive numbers sum is equal to target
            if(nums[i]+nums[j] === target) {
                // push the indices to the indexArr
                indexArr.push(i, j);       
           }   
        }
    }
    
    // return the array
    return indexArr;
};

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target)); //[0,1]