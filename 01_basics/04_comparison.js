// console.log(2>1); // true
// console.log("2">1); // true 

// console.log(null>0);  // false
// console.log(null==0); // false
// console.log(null>=0); // true

/*
    reason the equality check and comprison work differently bcoz
    == => this wont convert null to number
    comparison operator => convert null to zero 
*/

console.log("2"==2); // true
console.log("2"===2);// false as === strongly check the datatype if it is not same then it wont convert 
