//array= shallow copy
const arr=[5,1,2,"RItesh"]
let arr2=["Kumar",true,null]
//console.log(arr[0]); //5
//console.log(arr[5]); // undefined 

//console.log(arr2);
//console.log(arr.concat(arr2));

//Methods
const myArray=new Array(1,2,3,4)
//myArray.push(6) //[ 1, 2, 3, 4, 6 ] add value to last index
//push(6,2) ->[ 1, 2, 3, 4, 6, 2 ]
//myArray.pop() //[ 1, 2, 3, 4 ] -> always remove last value
// myArray.unshift(9) // [ 9, 1, 2, 3, 4 ] -> add val to first index
// myArray.shift() // [ 1, 2, 3, 4 ] -> remove first index
// console.log(myArray);
// console.log(myArray.includes("Ritesh"));

const newArray=myArray.join()
console.log(`Old array : ${myArray} and new array : ${newArray}`);
//op -Old array : 1,2,3,4 and new array : 1,2,3,4
console.log(`Old array type : ${typeof myArray} and new array tyoe after join: ${typeof newArray}`);
// Old array type : object and new array tyoe after join: string

/// SLice and Splice

const originalArray = [1, 2, 3, 4, 5];
//array.slice(startIndex, endIndex);
const slicedArray = originalArray.slice(1, 4);
// slice cretae shollow copy so doesnot affect original array
console.log(originalArray);  // [1, 2, 3, 4, 5]
console.log(slicedArray);    // [2, 3, 4]

const originalArray2 = [1, 2, 3, 4, 5];
//array.splice(startIndex, deleteCount, item1, item2, ...);
const removedElements = originalArray2.splice(1, 2, 6, 7);
console.log(originalArray);  // [1, 6, 7, 4, 5]
console.log(removedElements); // [2, 3]

/*
slice() Method:
Purpose: Creates a shallow copy of a portion of an array.
Syntax: array.slice(startIndex, endIndex)
Behavior:
Returns a new array containing elements from startIndex to endIndex (excluding the element at endIndex).
Does not modify the original array.


splice() Method:
Purpose: Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
Syntax: array.splice(startIndex, deleteCount, item1, item2, ...)
Behavior:
Removes deleteCount elements from the array starting at startIndex.
Can replace the removed elements with new elements (item1, item2, ...).
Modifies the original array in place.



*/

