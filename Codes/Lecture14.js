const myArr = [12,43,2532,52];
console.log(myArr[3]);

/*
1. Array is written in brackets [  ].
2.Array data type is an object.
3.Array can contain different data types . i.e string,number,boolean,array etc.
4. Array is zero based indexing. It starts with zero.
5. Once changed its original value will also change beacause it is non primitive (refrence) type.
*/

const myarray2 = new Array(1,2,3,4,5);

//Array Methods 

myArr.push(6); //Adds value to last of an array
myArr.pop();   //Removes last value of an array
myArr.unshift(9); //Adds value at first of an array
myArr.unshift(); //Removes first value of an array
console.log(myArr);


console.log(myArr.includes(12)); //Checks true or false
console.log(myArr.indexOf(12));  //Checks the position of value in number form.
console.log(myArr.join());//Converts to string


console.log(myArr.slice(0,2)); //(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it


console.log(myArr.splice(0,2)); //(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array