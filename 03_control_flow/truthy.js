//const userEmail = "krishna1@gmail.com"
//const userEmail  = []
const userEmail=""
if(userEmail){
    console.log("got user email");
}
else{
    console.log("dont have user email..")
}

//falsy values 
//false, 0, -0, "", null, undefined, NaN, BigInt 0n

//truthy values
//"0", 'false',  " ", [], {}, function(){}

// const emptyObj = {}

// if(Object.keys(emptyObj).length == 0){
//     console.log("got an empty object")
// }

//nullish coalescing operator (??) : null undefined

let val1;
//val1= 5 ?? 10
// val = undefined ?? 15
val1= null ?? 10 ?? 15

//console.log(val1)

//ternary opeartor
//condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("greater than 80")