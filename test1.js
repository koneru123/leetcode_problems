/* Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]. */

//[] => []
//[10, 11, 12, 12] => []

const TwoSum = (arr, target) => {
    const twoSumFinalArr = [];
    if(arr.length === 0) {
        return twoSumFinalArr;
    }
    for(let i = 0; i < arr.length; i++) {
        let arr1 = arr.slice(0, i).concat(arr.slice(i+1, arr.length));
        if(arr1.includes(target-arr[i])) { 
            twoSumFinalArr.push(i);
        }
    }
    return twoSumFinalArr;
}

const arr = [2, 7, 11, 15];
const target = 9;
const arr1 = [10, 11, 12, 12] 
const arr2 = [3, 3, 5, 4]
const target1 = 6;
//console.log(TwoSum(arr, target)); // [0,1]
//console.log(TwoSum([], target)); // []
//console.log(TwoSum(arr1, target)) // []
console.log(TwoSum(arr2, target1)) // [1,2]


