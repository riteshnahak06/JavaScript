// jan 1st 1970 date start
let myDate=new Date();
console.log(myDate); //2024-01-05T21:40:30.789Z
console.log(myDate.toDateString());//Sat Jan 06 2024
console.log(myDate.toString());//Sat Jan 06 2024 03:11:38 GMT+0530 (India Standard Time)

let myCreatedDate=new Date(2023,0,23) //month start from 0
console.log(myCreatedDate.toString());//Mon Jan 23 2023 00:00:00 GMT+0530 (India Standard Time)
console.log(myCreatedDate.getTime()); //1674412200000 milli second

let myCreatedDateTime=new Date(2023,0,23,5,5) //month start from 0
console.log(myCreatedDateTime.toLocaleString());//Mon Jan 23 2023 00:00:00 GMT+0530 (India Standard Time)

let myTimeStamp=Date.now();
console.log(myTimeStamp); // will give milli second