// Primitive

// 7 types : String, Number, Boolean, Symbol, Null, Undefined, BigInt

const userName  = "Shibam"
console.log(typeof (userName));

const score = 100
console.log(typeof (score));

const isLoggedIn = false
console.log(typeof (isLoggedIn));

const bigNumber = 23758674635242634n
console.log(typeof (bigNumber));

const outSideTemp = null
console.log(typeof (outSideTemp));

let userEmail;
console.log(typeof (userEmail));

const id = Symbol('4070')
const anotherId = Symbol('4070')
console.log(id === anotherId);

// Reference (Non - Primitive)

// Array, Objects, Functions

let heroes = ["Hulk", "SpiderMan", "Thanos"]

const myObj = {
    name : "Shibam",
    age : 28,
}

const myFunction = function(){
    console.log("Hello Google");
    
}

console.log(typeof anotherId);



//======================================Memory=============================

// Stack(Primitive), Heap(Non Primitive)

let myInstaName = "Shibamroy"

let anotherInstaName = myInstaName
anotherInstaName = "suttaaurcode"


console.log(myInstaName);
console.log(anotherInstaName);


let userOne = {
    email : "shibam@yahoo.com",
    upi   : "roy@ybl"
}

let userTwo = userOne

userTwo.upi = "upi@ybl"

console.log(userOne.upi);
console.log(userTwo.upi);








