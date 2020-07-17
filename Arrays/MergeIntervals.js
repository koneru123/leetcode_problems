/*Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
NOTE: input types have been changed on April 15, 2019. 
Please reset to default code definition to get new method signature.
https://leetcode.com/problems/merge-intervals/
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

//Input: [[1,3],[2,6],[8,10],[15,18]]
// Input: [[1,3],[2,6],[8,10],[15,18]] // [[1,6]]

// 1, 2, 3
// 2, 3, 4, 5, 6

/*
    I: nested array
    O: nested array
    C: no
    E: i: [] // []
*/

// create an array
// loop through the input array
// calculate the range
    // first ele in the array would be the start 
    // second ele would be the end
    // solve this using recursion
// return the array

var merge = function(intervals) {
    let overlappingIntervalArr = [];
      let firstIntervalEle = intervals[0][0]; // 1 2 
        let secondIntervalEle = intervals[0][1]; // 3 6 
        //console.log("firstIntervalEle", firstIntervalEle);
        //console.log("secondIntervalEle", secondIntervalEle);
     for(let i = 1; i < intervals.length; i++) {
         console.log("secondIntervalEle", intervals[i]);
        
        } 
    return overlappingIntervalArr;
};

const input= [[1,3],[2,6],[8,10],[15,18]];
console.log(merge(input));