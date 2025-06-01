const user = {
    email : "sum@gmail.com",
    fullname : {
        userfullname : {
            firstname : "animesh",
            lastname  : "jantwal",

        }
    }
}

// console.log(user.fullname.userfullname.firstname); // To access objects inside objects 


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

const obj3 = {obj1,obj2}; // Similarly like array , it willl create object inside object 
console.log(obj3);

const obj4 = Object.assign({},obj1,obj2); // the first one is target and the other are source
console.log(obj4);

const obj5 = {...obj1,...obj2} // use the spread one its the best and the latest one 
console.log(obj5);



const users = [ // Array of obejct generally data from database comes in this form 
    {
        id1:1,
        email:"1@google.com"
    },
    {
        id2:2,
        emal:"2@google.com"
    },
    {
        id3:3,
        emal:"3@google.com"
    }
]


console.log(users[0].id1);

console.log(Object.keys(user)); // array out of keys 

console.log(Object.values(user)); // can do the same with values 

console.log(Object.entries(user)); // array ke andar array , har eak key value of array mai bana diya hai 


console.log(user.hasOwnProperty("emai")); // to check if that property exist or not 

