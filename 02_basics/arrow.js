const user = {
    username:"krishna",
    wife:"radha",

     welcome : function(){
        console.log(`${this.username} is `,`${this.wife}'s husband`)
        console.log(this);
    }
}

// user.welcome()
// user.username="keshav"
// user.welcome()

//empty object
//console.log(this)


//function ke andar "this" keyword ko nhi use krte h ,sirf object ke andr "this" keyword ka use krte h 
//  const Radha = function (){
//     username:"krishna"
//     console.log(this)
//    //console.log(this.username)
// }
// Radha()

// const Radha = () => {
//     username:"krishna"
//    console.log(this)
//    //console.log(this.username)
// }

// Radha()

//  const addTwo = (num1,num2) => {
//       return num1+num2;
//  }

//implicit return ,if it returns in one line..then we can use this also
//curly braces use krnge toh return likhna pdega..
//lekin agar parenthesis use kiye toh nhi likhna pdega..

//const addTwo = (num1,num2) => num1+num2
const addTwo = (num1,num2) => (num1+num2)

//agar object return karna hua toh..
const addT = (num1,num2) => ({username:"mahesh"})
 console.log(addT(4,6))
