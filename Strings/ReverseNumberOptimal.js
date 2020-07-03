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
var reverse = (x) => {
    if(x < 0) return -1 * reverse(-x);
    const result = (x+'').split('').reverse().join('');
    return (result > 2**31 -1) ? 0 : result; 
};

console.log(reverse(123)); //returns 321
console.log(reverse(-123)); // returns -321
console.log(reverse(120)); // return 21
console.log(reverse(1534236469)) // returns 0
console.log(reverse(-1534236469)) // returns 0