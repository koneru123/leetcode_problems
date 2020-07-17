/*Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true

Problem 20:- https://leetcode.com/problems/valid-parentheses/
*/

/**
 * @param {string} s
 * @return {boolean}
 */
/*
    I: String
    O: Boolean
    C: no constraint
    E: 
        - Empty String // Incase of empty string return true
*/
var isValid = function(s) {
    // Create a variable mappingObj, map the paranthesis as a key value
    const mappingObj = {
        '{' : '}',
        '(' : ')',
        '[' : ']'
    };
    // create a empty storage variable, like a stack, LIFO
    const storage = [];
    // edgecase, when the length is empty return true
    if(s.length === 0) {
        return true;
    }
    // loop through all the characters in the string
    for(let char of s) {
        // check the key exists in the object
        if(mappingObj[char]) {
            //if yes then push the value of key into the storage DS
            storage.push(mappingObj[char]);
        } else {
            // check if the last element in the stack is not equal to the character
            if(storage.pop() !== char)  {
                // return false
                return false;
            }
        }
    }
    // if not return true
    return true;
};

const test = "()";
const test1 = "()[]{}";
const test2 = "(]";
const test3 = "([)]";
const test4 = "{[]}";
const test5 = "";

console.log(isValid(test));
console.log(isValid(test1));
console.log(isValid(test2));
console.log(isValid(test3));
console.log(isValid(test4));
console.log(isValid(test5));