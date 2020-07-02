/*Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.*/

/**
 * @param {number[]} prices
 * @return {number}
 */
/* 
    I: Array
    O: Number
    C: No constraints
    E: 
        - Input array could be empty
        - Input array could have negative numbers
        - Incase the value at index 0 is greater than the rest in the array, 
            that means all the stocks are higher compared to day 1, return 0
*/
var maxProfit = function(prices) {
    // initialize a variable result and assign it to 0
    let endResult = 0;
    // edge case
        // If array is empty return 0 as well 
        if(prices.length === 0) {
           return 0 
        }
        // loop through the array and check if the first element is greater than all the elements in array
        for(let i = 0; i < prices.length; i++) {
            /* if(prices[0] > prices[i+1]) {
                // Incase it is then return 0
                return 0;
            } */
            let smallestElement = prices[0];
            if(smallestElement > prices[i+1]) {
                // find the smallestElement in the array
                smallestElement = i+1;
            }
            // then loop through the array again 
            let newArr = [];
            for(let j = i+1; j < prices.length; j++) {
                // check if the next element in the array is greater than the smallest element
                if(prices[smallestElement] < prices[smallestElement + j]) {
                    // subtract the value to get the endResult
                    endResult = prices[smallestElement + j] - prices[smallestElement];
                    newArr.push(endResult);
                }
                //return newArr;
            }
            if(newArr.length === 0) {
                return 0;
            }
            let value = newArr[0];
            for(let z = 0; z < newArr.length; z++) {
                if(value < newArr[z+1]) {
                    value = newArr[z+1];
                } 
            }
            return value;
        } 
};

// time complexity - 3 for loops - O(n^2) - Exponential time
const value = [7,1,5,3,6,4];
const value1 = [7,6,4,3,1];
const value2 = [1,2];
console.log(maxProfit(value)); //5
console.log(maxProfit(value1)); //0
console.log(maxProfit(value2));
