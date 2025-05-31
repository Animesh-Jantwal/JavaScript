//String can be denoted from '' and "" both.

const name = "animesh"
const repoCount = 12;

console.log(name + " " + repoCount); // Bad and outdated syntax don't use it 


console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
 // Use backticks yaha par aata hai stirng interpolation , here we create placeholders and then we directly inject variable name in it 
// We can add method and other things with the help of this 



const gameName = new String("Animesh");
// new keyword use karte hai toh objects use karte hai javascript ke  and we game the string inside the constructor
// Now we can use a lot of methods.

console.log(gameName[0]); // To access the key value pair 
console.log(gameName[0]); // To access the key value pair 

console.log(gameName.length); // Tells the length of the string or the number of elements in it 
console.log(gameName.toUpperCase); // Turns the string letters into upper case

//keep one thing in mind that it doesn't change the real string because string data type is passed by value not by refrence so all the modifications happens in a copy not in the main string 

console.log(gameName.charAt(0)); // To find the character at x index
console.log(gameName.indexOf("A")); // To find which character comes at which index 

// Make a notes of all the methods mastering them means mastering strings in js

const newString = gameName.substring(0,4) // will print char at 0,1,2 adn 3 but will not print the character at 4. If we will give negative value then it will ignore than and will start from 0

console.log(newString);

const anotherString = gameName.slice(-8,4) // // will print char at 0,1,2 adn 3 but will not print the character at 4. If we will give negative value then it will start from the reverse


console.log(anotherString);


const newStringOne = "  animesh  ";
console.log(newStringOne.trim); // Removes the white spaces 


const url =  "https://animesh.com//animesh 101"// Browswer here will convert that space into % then we can do 

console.log(url.replace("%" , "-")); // This replaces % to - in the url constant


console.log(url.includes("animesh")); // Gives a booelan value and tells wheather animesh exist in the url or not 

console.log(gameName.split("-")) // We can split any string on basis of -












