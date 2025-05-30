/*
2>1
2>=1
2<1
2=1
2!=1
2=<1
*/

console.log("2" > 1); // true
console.log("02" > 1); // true


console.log(null>0);    //false
console.log(null==0);   //false
console.log(null>=0);   //true

// The reason is that == and > < >= =< works differently they converts null to a number treating it as 0
// therefore null>=0 (false) null>0 (true)

console.log(undefined > 0); // false for all > < =< >= 

// === strict check , it checks value and datatypes


