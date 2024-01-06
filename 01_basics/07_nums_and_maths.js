const score=400
console.log(score);  //op 400

const balance=new Number(200)
console.log(balance); //op [Number: 200]

console.log(balance.toString().length); //3
console.log(balance.toFixed(3)); //op 200.000
const otherNum=23.8966
console.log(otherNum.toPrecision(3));// op 23.9
const otherNum2=123.8966
console.log(otherNum2.toPrecision(3));// op 124
const otherNum3=1123.8966
console.log(otherNum3.toPrecision(3)); //op -1.12e+3


const hundreds=1000000000
console.log(hundreds.toLocaleString('en-IN'));// default us standard if u want ind the use en-IN

console.log("//////   Maths ///////////");
console.log(Math.abs(-5));//5
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.4)); // 5
console.log(Math.floor(4.9)); //4
console.log(Math.min(2,4,6)); //2
console.log(Math.random()); // always between 0 and 1
console.log(Math.floor((Math.random()*10)+1)); // will come more than 1 will have abs val

const min=10
const max=20
// formula to bring no in a particular range
console.log(Math.floor(Math.random()*(max-min+1))+ min) 
