/*Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.*/

/**
 * @param {string} s
 * @return {number}
 */
/*
    I: String
    O: number
    C: no constraints
    E:
        - empty string? // return empty string
        - if all the characaters are repeating in the string,
            - return the first character of the string
        - only return the non-repeating first occuring elements in the string
*/
var lengthOfLongestSubstring = function(s) {
    // create a output variable, assign it to 0
    let output = 0;
    // create a storage array, assign it to []
    let storage = [];
    let str = "";
    // loop through the given string
    for(let char of s) {
        //console.log(char);
        if(!storage.includes(char)) {
            str += char;
            storage.push(str);
        } 
    }
    //console.log(storage);
    for(let i = 0; i < storage.length; i++) {
        //console.log(storage[i].length);
        if(storage[i].length > storage[i+1].length) {
            output = storage[i].length;
        }
    }
    return output;
    // check for the character in the storage array, 
        // if it does not exist, concatenate it to the string variable, 
        // if it exists, add it as a new 
        // keep looking for consequtive unique values in the storage object
    // return the output variable
};

console.log(lengthOfLongestSubstring("abcabcbb"));