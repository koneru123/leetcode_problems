/*Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:

Coud you solve it without converting the integer to a string?*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let validPalindrome = false;
    let isNegative = false;
    
    
    if(x < -1) {
        isNegative = true;   
    }
    
    let y = x.toString();
    //console.log(typeof y);
    y = y.split('').reverse().join('');
    y = parseInt(y, 10);
    
    if(isNegative) {
        validPalindrome = false;    
    } else {
        if(x === y) {
            validPalindrome = true;       
        }
    }
    return validPalindrome;
};

const value = 121;
const value1 = -121;
console.log(isPalindrome(value));
console.log(isPalindrome(value1));