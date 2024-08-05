
function addTwoNumbers(number1,number2){
    console.log(number1 + number2);
}
// addTwoNumbers(4,5);

function addTwoNumbers(number1,number2){
    // let result = number1 + number2;
    // return result;

    return number1 + number2;
}
const result = addTwoNumbers(4,7);
// console.log("Result :",result);

function loginUserMessage(username){
    if(!username ){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage())

//spread opearator..
function calculateCartPrice(val1,val2, ...num1){
    return num1;
}
console.log(calculateCartPrice(455,123,896,563,124,965))

//how to pass a object in function

const user = {
    username:"prabhu",
    price:"266"
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`)
}

//handleObject(user)

handleObject({
    username : "krishna",
    price:"0000"
})

//passing a array in function

const myNewArray = [458,785,896,453]

function returnSecondValue(getArray){
    return getArray[2]
}
//console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([789,500,200,5668]))