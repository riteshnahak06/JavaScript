let score="33";

//let valInNumber=Number(score)
//console.log(typeof valInNumber);
//console.log(valInNumber);

// let isLoggedIn=1;
// console.log(Boolean(isLoggedIn)); // true

// let someNum=22
// console.log(typeof String(someNum)); // String

/*
Op of Number()
==============
"33" => 33
"33asc" =>NaN
null => 0
udefined => undefined
true => 1 ,false =>0

Op of Boolean()
==============
1 => true 
"" => false
"Ritesh" => true
*/

// ==============Operations=================
let value=3
// console.log(-value); // op-> -3

// console.log("Ritesh"+"Kumar");

// console.log("1"+2); // op => 12
// console.log("1"+2+2); //op -> 122
/console.log(1+2+"4"+"2"); //op -> 342
/*
    if inital string there it will treat remain as string and concat
    if final string there there all the process and iniial will be performed then concated
*/

//console.log(true);//op => true
// console.log(+true);// op => 1 as increment were done true
// console.log(+""); //op =>0

let x = 3;
const y = x++;
// postfix => first assign then increment
console.log(`x:${x}, y:${y}`); // string interpolation
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;
//prefix => first increment then assign
console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"