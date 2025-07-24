const name = "shibam"
const repoCount = 2

//console.log(name + repoCount + "value"); this is an old method of concatenate srting

console.log(`Hi my name is ${name} and my repo count is ${repoCount}`); // use this modern method using (``)backticks
// backticks uses benifits is that it brings string interpretation, you can made 
// placeholder and the value you want to inject you can inject directly by using ${}


const gameName = new String('call-of-duty')


console.log(gameName.length);
console.log(gameName.__proto__);

console.log(gameName[5]);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('f'));
console.log(gameName.toUpperCase());

const newString = gameName.substring(0, 7) // in substring if we give -ve value then substring ignore that -ve value and starts with zero
console.log(newString);

const anotherString = gameName.slice(-8, 3) // in slice we can give -ve value as well
console.log(anotherString);

console.log(gameName.split('-'));


const newStringOne = "   shibam    "
console.log(newStringOne);
console.log(newStringOne.trim())

const url = "https://obscure-space-sniffle-4j6rr6rrgg9q3j69.github.dev/"

console.log(url.replace('4j6rr6rrgg9q3j69','%2'))

console.log(url.includes('sit'));











