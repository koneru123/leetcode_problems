/**
 * @param {number} x
 * @return {number}
 */
/**
 I: Number
 0: Should be a reversed number
 C: No constraints
 E: 
   - Number could be negative, 
   - or it could have 0 at the end,
   - It should be with in the 32-bit range
*/
var reverse = function(x) {
    // initialize a new var reverseNum
    let reverseNum;
    // create a new variable isNegative and set it to false initially
    let isNegative = false;
        // edgecases
        // check if the number is < 0        
        if(x < 0) {
            isNegative = true;
            // use Math.abs() to return an absolute number
            // time complexity - O(1)- constant time operation
            x = Math.abs(x);
        }
    // convert the number to string
    // time complexity - O(1) - constant time operation
    reverseNum = x.toString();    
    // split the string 
    // reverse the string
    // join the string
    // time complexity - O(n) - Linear time operation
    reverseNum = reverseNum.split('').reverse().join('');
    // convert the string to number
    // time complexity - O(1) - constant time operation
    x = parseInt(reverseNum, 10);
    // initializing a value to get the valid range
    const value = (2**31) - 1;   
    // return the final value
    // time complexity - O(1) - constant time operation
    if(x < value) {
        // check if the value initially was negative
        if(isNegative) {
            // if it is initially negative concatenate "-" 
            x = '-' + x;   
        }
        return x;
    } else {
        // if it is out of range return 0
        return 0;
    }
};

// time complexity - O(n) - Linear
// space complexity - ????
console.log(reverse(123)); //returns 321
console.log(reverse(-123)); // returns -321
console.log(reverse(120)); // return 21
console.log(reverse(1534236469)) // returns 0
console.log(reverse(-1534236469)) // returns 0