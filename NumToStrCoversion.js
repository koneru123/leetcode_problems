/* 
Take in a number and return the word representation of that number

input: 12345
output: twelve thousand | three hundred | forty | five

 */

/*
  I: number will always be 5 digit
  O: string
  C: no constraint
  E: 
    - no negative
    - always an integer
*/

const convertNumToStr = (num) => {
    let resultStr = '';

    // converting the number to string
    let numToStr = num.toString();

    // splitting the string into an array
    let newArr = numToStr.split(''); //['1', '2', '3', '4', '5']

    // intial mapping object 1-19
    let initialObj = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'ninteen'
    }; 

    // second mapping obj 20-90
    let secondObj = {
        2: 'twenty',
        3: 'thirty',
        4: 'fourty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    };

    // diving the number by 1000
    let thousandNum = Math.round(num/1000); //12

    // mapping it to the intialObj
    thousandNum = initialObj[thousandNum]; // twelve

    // slicing the newArr to get the last three numbers in the array
    let hundredNum = newArr.splice(2, 5);

    // joining the numbers
    hundredNum = hundredNum.join('');

    // diving the number by 100 to get the hundreds place number
    hundredNum = Math.round(hundredNum/100); //3

    // mapping it to the initialObj
    hundredNum = initialObj[hundredNum]; // three

    // splitting the array to get the tens place number
    let tenNum = numToStr.split('').splice(3,5); // ['4','5']

    tenNum= tenNum.join(''); // 45

    tenNum = Math.floor(tenNum/10); // 4

    tenNum = secondObj[tenNum]; // fourty

    let oneNum = numToStr.split('').pop(); // 5

    oneNum = initialObj[oneNum]; //five

    // concatenating all these to the resultStr
    resultStr += `${thousandNum} thousand ${hundredNum} hundred ${tenNum} ${oneNum}`

    // returning the string
    return resultStr;
}

const num = 12345;
console.log(convertNumToStr(num));

