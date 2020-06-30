/*Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
    I: array
    O: array with nested arrays
    C: no constraint
    E: 
        - Could be an empty array // return []
        - Could have all the elements in the array as 0 // return [0, 0, 0]
*/
var threeSum = (nums) => {
    let resultArr = [];
    let start = 0;
    let end = nums.length - 1;
    let next = start+1;

    if(nums.length === 0) return [];

    while(next < end) {
        //for(let i = 0; i < nums.length; i++) {
            if((nums[start] + nums[end] + nums[next]) === 0) {
                resultArr.push([nums[start], nums[end], nums[next]]);

            } else if((nums[start] + nums[end] + nums[next]) < 0) {
                start++;
            
            } else if((nums[start] + nums[end] + nums[next]) > 0) {
                end--;
             
            }
            next++;
        //}
    }
    return resultArr;
};

const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));