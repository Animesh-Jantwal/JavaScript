// Immediately Invoked Function Expressions (IIFE) in JavaScript
// Jasa hi fucntion likha usko eak dam immediatly execute karana hai 
// dont need pollution from global scope 

(function chai (){
    console.log("DB CONNECTED");
    
})(); // Structure for IIFE 

(
    () => {
        console.log("DB CCONNTCTED 2");
        
    }
)();

// keep ; in mind to put it in the last of iife function

(
    (sir) => {
        console.log( `DB CCONNTCTED 2 ${sir}`);
        
    }
)("hwllo sir")


// named and unnamed iifi 
