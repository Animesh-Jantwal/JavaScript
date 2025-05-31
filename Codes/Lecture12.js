const balance = new Number(100.1213); 


console.log(balance.toString); //Will get converted into string and now all the properties of strings can eb used in it 

console.log(balance.toFixed(2)); // To set precision value to 2 

const number = new Number(123.4355);

console.log(number.toPrecision(3)); //Give the preciseion value but priority jo hai woh decimal se phele mielgi decimal ke badh nahi 

const hundereds = 100000;

console.log(hundereds.toLocaleString('en-IN')); // When it is hard to read zeros then this comes in play and put commas for easy readibility 



// ++++++++++++++++++++++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

console.log(Math); // Math is an object 

console.log(Math.abs(-4)); // Turns n-ve to +ve and +ve remains the same 

console.log(Math.round(4.5)); // To round off

console.log(Math.ceil(4.3)); // Halki si bhi 4 se zayada then i will select 5 

console.log(Math.floor(4.8)); // No matter what i will select the lowest value 

console.log(Math.min(2,34,5,6)); // Tells the minimun value

console.log(Math.max(2,34,5,6)); // Tells the maximun value


console.log(Math.random()); // will give random values between 0 and 1

console.log((Math.random()*10) + 1); //  This assures that values are atleast 1 & more than 1 also To avoid any BODMAS rule miscalculation


//--- Trick to randomize value between range ----
const min = 10
const max = 20
const randomValue = Math.floor((Math.random() * (max - min + 1)) + min)








