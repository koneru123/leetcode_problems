/**
 * @param {number} x
 * @return {number}
 */
/**
 I: Number
 0: Should be a reversed number
 C: No constraints
 E: Number could be negative, or it could have 0 at the end
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
            x = Math.abs(x);
        }
    // convert the number to string
    reverseNum = x.toString();    
    // split the string 
    // reverse the string
    // join the string
    reverseNum = reverseNum.split('').reverse().join('');
    // convert the string to number
    x = parseInt(reverseNum, 10);
    // initializing a value to get the range
    const value = (2**31) - 1;   
    // return the final value
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

console.log(reverse(123)); //returns 321
console.log(reverse(-123)); // returns -321
console.log(reverse(120)); // return 21
console.log(reverse(1534236469)) // returns 0
console.log(reverse(-1534236469)) // returns 0