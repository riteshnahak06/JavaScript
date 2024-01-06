/*
    Javascript is dynamic typed language and java is statically typed 

    Primitive - 7 types (Call by value=> when u copy u wont get refernce of original data so when u change it only the copy changes)
    String,Number,Boolean,null,undefined,Symbol,BigInt
    stored in stack 

    type of BigInt is undefined. 

    Non Primitive (call by reference -> u will get the direct reference)
    Array,Objects,Functions
    stored in heap
*/
/*
    Datatype (typeof xx)
    123 - number
    null -object
    arrays - object
    object -object
    function - function -- it is a object function
    bigint - undefined
    true,false->boolean
    Boolean-> function
    Date -> object
*/

console.log(typeof 4);


const id=Symbol("123")
const anotherId=Symbol("123")
console.log(id==anotherId); // false as symbol always give unique val

// Array
const heros=["Shaktiman","Junior G"]
//Object
let obj={
    name:"ritesh",
    age:25
}

//function
const myFunction=function(){
    console.log("Hello world");
}

console.log(myFunction());