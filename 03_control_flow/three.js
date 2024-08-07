//reduce function

const myArr1 = [1,2,3,4,5,6,7]

const myTotal = myArr1.reduce( function  (accumulator,currentValue) {
    console.log(`accu ${accumulator} and currValue is ${currentValue}`)
      return accumulator + currentValue
},6)

// const initialValue = 10
// const myTotal = myArr1.reduce( (accumulator,currentValue) => 
    
//       accumulator + currentValue ,initialValue
// )
console.log(myTotal)


const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10