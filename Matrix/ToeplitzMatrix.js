/*Toeplitz Matrix
A Toeplitz matrix is a matrix where every left-to-right-descending diagonal has the same element. Given a non-empty matrix arr, write a function that returns true if and only if it is a Toeplitz matrix. The matrix can be any dimensions, not necessarily square.

For example,

[[1,2,3,4],
 [5,1,2,3],
 [6,5,1,2]]
is a Toeplitz matrix, so we should return true, while

[[1,2,3,4],
 [5,1,9,3],
 [6,5,1,2]]
isn’t a Toeplitz matrix, so we should return false.

Constraints:

[time limit] 5000ms
[input] array.array.integer arr
0 ≤ arr.length ≤ 20
0 ≤ arr[i].length ≤ 20
0 ≤ arr[i][j] ≤ 20
[output] boolean*/

/* 
    I: arr
    O: Boolean
    C: optimal Time
    E: 
        - Array could be empty
        - Array could have just one value, return true in this case
*/ 

/*  
    Loop through the matrix i
        Loop through the inner array j[i]
        Loop through the inner array K[i+1]
            check if the values are same
                if they are same 
*/

function isToeplitz(arr) {

}