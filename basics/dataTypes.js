"use strict"; //treat all JS code as newer version

console.log(typeof null);  // type of null is object
console.log(typeof undefined); //type of undefined is undefined


// null => standlone value
//jese hm server se puche temperature kya h aaj ka toh agr server ke pass nhi hoga toh wo null return krega..
//undefined mtlb not assign any value 
//undefined means a variable has been declared but has not yet been assigned a value.
// null is an assignment value. It can be assigned to a variable to indicate that it explicitly has no value.

//null is explicitly set by the programmer.
//undefined is used by JavaScript when a variable is declared but not assigned a value.

let x = null;
console.log(x); // null

console.log(null == undefined); // true

console.log(null === undefined); // false
//Strict Equality (===)
/*The strict equality operator (===) checks for both value and type without performing type coercion. 
This means the values must be of the same type and value to be considered equal.
*/
/*
Equality (==) in JavaScript
The equality operator (==), also known as the abstract equality operator, is used to compare two values for equality. 
When using ==, JavaScript performs type coercion, meaning it converts the values to a common type before making the comparison.

*/

console.log(null == undefined); // true
console.log(null == 0);         // false
console.log(undefined == 0);    // false


//primitive
//7 types : string,number,null,undefined,symbol,boolean,BigInt

const id=symbol('123')
const anotherId=symbol('123')

console.log(id==anotherId); //false

const bignumber = 7864648656586n;


//reference(non primitive)
//arrays,objects,functions

const heros = ["shaktiman","hatim","tamrajkilwis"]

let myObj = {
       
      name : "prabhuu",
      age : 23,
}

const myFunction = function(){
      console.log("hello world");
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack(primitive)

let mychannel1="hjhjhdb"
let mychannel2=mychannel1;

mychannel2 = "chaiorcode"
console.log(mychannel1)    //hjhjhdb
console.log(mychannel2)   //chaiorcode
//heap(non-primitive)

let userOne = {
      email : "ghhuah@gmail.com",
      upi : "ahu@ybl"
}

let userTwo = userOne
userTwo.email = "ram@gmail.com"

console.log(userOne.email)  //ram@gmail.com
console.log(userTwo.email)  //ram@gmail.com








