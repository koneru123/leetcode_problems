/*Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example 1:

Input: a = 1, b = 2
Output: 3
Example 2:

Input: a = -2, b = 3
Output: 1*/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
/*
    I: two integers
    O: sum of two integers
    C: no constraints
    E:
        - Should not use either + or -
*/
var getSum = function(a, b) {
    if(a === 0) {
        return b;
    } else if(b === 0) {
        return a;
    } else {
        return getSum(a ^ b, (a & b) << 1);
    }
};

console.log(getSum(1,2));
console.log(getSum(-2,3));
console.log(getSum(0,3));
console.log(getSum(4,0));