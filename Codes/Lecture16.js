// Objects can be declared as literal and constructor
//Singleton = when we make an object using constructor then it is made as a singleton means ye aapni tarah ka eak hji object hai , and opposite for the literal. 

// Object.create can also make object like this. This is the constructor method and issi ke aandar banta hai singleton



const jsUder = {
    "full name" /*key of an objct*/ :"Animesh" /* Value of an object*/,
    college :"XYZ",
    age :"18",
    email :"animesh@google.com",
    is_loggedIn :false,
} //Simple ban gaya object thastss it 

console.log(jsUder.age)         // Ways to acces things in objects 
console.log(jsUder["age"])
console.log(jsUder["full name"]);

//Better to use the 2nd way to access things in objects 

const mySym = Symbol("key1");

const jsUder2 = {
    "full name" /*key of an objct*/ :"Animesh" /* Value of an object*/,
    college :"XYZ",
    age :"18",
    email :"animesh@google.com",
    is_loggedIn :false,
    [mySym]: "mykey1", // Synatx for symbol
} //Simple ban gaya object thastss it 

console.log(jsUder2[mySym]); // This is the synatx 

// Taking a symbol , adding it to the object and then printing 


jsUder.age="12"; // To change the value of any key inside the object 

//Object.freeze(jsUder); // To freeze so that no one can change the object now and if someonw tries then no change will happen 



// Adding a fucntion inside an object 

jsUder.greeting = function(){
    console.log("Hello Animesh");
}

console.log(jsUder.greeting()); // will print undefined
console.log(jsUder.greeting); // will print an ananoymous function 


jsUder.greeting2 = function(){
    console.log(`Hello Animesh you are , ${this.age}` );
}

console.log(jsUder.greeting2()); 




