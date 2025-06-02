function calculateCartPrice (...number1){
    return number1;
}

console.log(calculateCartPrice(200 , 400 , 500));

// this ... is rest operator , this packs all the input and give them in a single array 

function handleObject (anyObj) {
    
}

// We can pass object inside a function 

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

// We can pass array inside a function 
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));