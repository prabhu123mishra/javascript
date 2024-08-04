
//object literals
  const mySym = Symbol("key1")

const jsUser = {
    name: "prabhu",
    [mySym]:"mykey1",
    age: 23,
    email:"prabhu1@google.com",
    location:"kolkata",
    isLoggedIn:false,
    lastLoginDays:["Monday","tuesday"]
}

// console.log(jsUser.email)
// console.log(jsUser["location"])
// console.log(jsUser[mySym])

jsUser.email="prabhu123@chatgpt.com"
//Object.freeze(jsUser)
jsUser.email="prabhu456@microsoft.com"
// console.log(jsUser)
// jsUser.greeting = function(){
//     console.log("hello js user");
// }
// jsUser.greetingTwo = function(){
//     console.log(`hello js user, ${this.name}`);
// }

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());

//singleton object
//const tinderUser = new Object()

const tinderUser = {}
tinderUser.id="123456"
tinderUser.name="bhaskar"
tinderUser.email="abc@gmail.com"
//console.log(tinderUser)

const regularUser = {
    email:"",
    fullname: {
        userfullname:{
            firstname:"prabhakar",
            lastname:"mishra"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:"a",2:"b"}
const obj2= {3:"c",4:"d"}

//const obj3=Object.assign({},obj1,obj2)
const obj3= {...obj1,...obj2}
//console.log(obj3)

const users = [
    {
        id: 123456,
        email: "bhaskar@gmail.com"
    },
    {
        id: 123457,
        email: "bhaskar1@gmail.com"
    },
    {
        id: 123458,
        email: "bhaskar2@gmail.com"
    }

]
users[1].email

// console.log(tinderUser);
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

//console.log(tinderUser.hasOwnProperty('email'));

//object destructring...
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor : instructor} = course
//console.log(courseInstructor)
console.log(instructor)