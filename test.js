"use strict";

/*
You are in charge of a display advertising program. Your ads are displayed on websites all over the internet. You have some CSV input data that counts how many times that users have clicked on an ad on each individual domain. Every line consists of a click count and a domain name, like this:

counts = [ "900,google.com",
     "60,mail.yahoo.com",
     "10,mobile.sports.yahoo.com",
     "40,sports.yahoo.com",
     "300,yahoo.com",
     "10,stackoverflow.com",
     "20,overflow.com",
     "2,en.wikipedia.org",
     "1,m.wikipedia.org",
     "1,mobile.sports",
     "1,google.co.uk"]

Write a function that takes this input as a parameter and returns a data structure containing 
the number of clicks that were recorded on each domain AND each subdomain under it. 
For example, a click on "mail.yahoo.com" counts toward the totals for "mail.yahoo.com", 
"yahoo.com", and "com". (Subdomains are added to the left of their parent domain. 
So "mail" and "mail.yahoo" are not valid domains. Note that "mobile.sports" appears 
as a separate domain near the bottom of the input.)

Sample output (in any order/format):

calculateClicksByDomain(counts) =>
com:                     1340
google.com:              900
stackoverflow.com:       10
overflow.com:            20
yahoo.com:               410
mail.yahoo.com:          60
mobile.sports.yahoo.com: 10
sports.yahoo.com:        50
org:                     3
wikipedia.org:           3
en.wikipedia.org:        2
m.wikipedia.org:         1
mobile.sports:           1
sports:                  1
uk:                      1
co.uk:                   1
google.co.uk:            1

n: number of domains in the input
(individual domains and subdomains have a constant upper length)

*/



// I: Array
// O: Object
// C: no constraint
// E: 
//   - can be an empty array 
  
/*
  Loop through the counts array
    // split the str by .com
      // create a helper fun
        // take a str and it would check if the str is a substr of 
          // again pass these strings to that helper fun
            // incase if it has .com
              // split the string ","
                // convert that to a num
                  // calculate the aggregate
*/
  
const getAggregate = (str) => {
   //console.log(str);
   let aggregateV = 0;

   if(str.includes('.com')) {
        let value = 0;
        let strSpli = str.split(',');
        //console.log("strSplit", strSpli);
        value = parseInt(strSpli[0], 10); 
        aggregateV += value;   
      }  
      return aggregateV;
}

/*const splitStr = (str) {
    let resultStr = "";
    
    let val = str.split('.');
    return val;
}*/

const resultObj = (arr) => {
    let resultObj = {};
    let val = 0;
    for(let i = 0; i < arr.length; i++) {
      val += getAggregate(arr[i]);
    }
     if(resultObj['.com'] === undefined) {
        resultObj['com:'] = val; 
     }
    return resultObj;
}


const counts = [ 
  "900,google.com",
  "60,mail.yahoo.com",
  "10,mobile.sports.yahoo.com",
  "40,sports.yahoo.com",
  "300,yahoo.com",
  "10,stackoverflow.com",
  "20,overflow.com",
  "2,en.wikipedia.org",
  "1,m.wikipedia.org",
  "1,mobile.sports",
  "1,google.co.uk" 
];
console.log(resultObj(counts));

//console.log(splitStr('900,google.com'));
  

