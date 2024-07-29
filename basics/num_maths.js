const score = 400
// console.log(score)

const score1= new Number(1000.789)
// console.log(score1)
// console.log(score1.toString().length);
// console.log(score1.toFixed(2))

// console.log(score1.toPrecision(5))

const num1= 100000000
// console.log(num1.toLocaleString('en-IN'))

//++++++maths+++++++++

// console.log(Math.abs(-8))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.1))
// console.log(Math.floor(4.9))
// console.log(Math.min(7,88,1,89))
// console.log(Math.max(78,58,89,102))


//important
// console.log(Math.random())
// console.log((Math.random() * 10) + 1 )
// console.log(Math.floor(Math.random()*10) + 1)


const min = 17
const max = 30

console.log(Math.floor(Math.random() * 10) + min)

console.log(Math.floor(Math.random() * (max-min+1)) + min)
