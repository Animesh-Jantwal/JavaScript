const marval_heros = ["thor" , "ironman" , "spiderman" ];
const dc_heros = ["superman", "flash" , "batman"];

// marval_heros.push(dc_heros); // this is kinda wrong because it will create an array inside an array also it proves a point that array takes any type as an input like here it tooom array as an input 
// console.log(marval_heros);
// console.log(marval_heros[3][1]); // Not a good way to access


// const all_heros = marval_heros.concat(dc_heros);
// console.log(all_heros); 
// This me .push pushes on the existing array and .concat returns you a new array 


// const allnewheros = [...marval_heros,...dc_heros];
// console.log(allnewheros);
// Spread , this does the work of concat but it can also work for multiple arrays


// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
// const newarray = another_array.flat(Infinity);
// console.log(newarray);
// Returns a new array with all sub array elements concatenated into it up to specified depth


console.log(Array.isArray("Animesh")); // Tells wheather it is array or not 
console.log(Array.from("Animesh")); // Converts into array 
console.log(Array.from({name: "Animesh"})); //it will return empty array until and unless you dont tell wheather you have to make an array of keys or value


let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1 , score2 , score3)); // Returns a new array from the set of elements 


