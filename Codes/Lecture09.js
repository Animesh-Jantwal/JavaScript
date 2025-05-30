/*
1-Primitive data types [are call by values]

strings 
booelan 
number 
null
undefined
symbol
bigInt

2-Non-Primitive/Refrence data types [are call by refrence]

Arrays 
Objects 
Functions 

*/


// javascript is dynamically typed

const id1 = Symbol("123");
const id2 = Symbol("123");

console.log(id1 === id2); // false because of symbol data type 


const code = 1232141n;  // This n at the last of number turns it into bigInt
