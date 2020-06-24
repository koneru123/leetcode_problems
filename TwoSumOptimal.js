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

// Using HashMap DS to store the values
var twoSum = function(nums, target) {
   var result = {};
   for(let [index, num] of nums.entries()) {
        if(result[num] !== undefined) return [result[num], index];
            result[target - num] = index;      
   }  
}

// time complexity - O(n) - Linear Operation
// Space Complexity - O(n) - Linear Operation
const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target)); //[0,1]
