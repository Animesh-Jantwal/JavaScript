// // Nested Scope


// function one(){
//     const username = "animesh";
//     function two () {
//         const website = "youtube"
//         console.log(username);
//     }
//     console.log(website);
//     two();
// }
// one();
// //Child fucntion can accces the variable in parent function


// if(true){
//     const username = "animesh";
//     if(username === "animesh"){
//         const web = "youtube";
//         console.log(username + website);
//     }
//     //console.log(website); 
// }
// //console.log(username);


console.log(addone(5));
//This is valid 

function addone (num1) {
    return num1+1;
}

// This is not valid 
addtwo(5);
// this is also a function but we can also call it expression , its like a variable . Variable in js are a lot powerful they can hold anything.
const addtwo = function adtwo(num) {
    return num+2;
}


