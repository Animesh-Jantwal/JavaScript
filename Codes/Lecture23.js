const user = {
    username : "animesh",
    age : "18",

    text : function () {
        console.log(`${this.username}, hello`); // Here this. means current context , iss scope ke aandar jitne bhi variables hai unko access karne ke liye mai this laga dunga 
        // this tells us about the current context here
    }
}
user.text();
user.username = "lucky";
user.text();

// here this will give nothing ,empty parenthesis 
// browswer ke aandar jo global object hai woh widnow obejct hai 


function chai() {
    let user = "animesh";
    console.log(this.user);
}
// Function ke aandar this kaam nahi karta , this keyword only works in object 


const code =  () => {           //Ban gaya arrow function
    let user = "animesh";
    console.log(this.user);

}

//Basic arrow function 

const addtwo = (num1,num2) => {
    return num1+num2;
}

console.log(addtwo(5,2));

// Implicite return , no need to write return statement as you have only one line of code , can wrap in parenthesis but not in curly braces ( this technique will be used in react a lot )
const addtwo2 = (num1,num2) =>  (num1+num2);

// to return object we have to write it in () only 