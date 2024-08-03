//array
const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)
//console.log(myArr[1]);

myArr.push(6);
//console.log(myArr);

// console.log(myArr.includes(9));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr)

//slice ,splice
//splice use krne se original array me change ho jata h and range last wla include  krna hota h
//slice me range include nhi hota h 
// console.log("A",myArr);

// const myn1 = myArr.slice(1,3)

// console.log(myn1);
// console.log("B",myArr);

// const myn2 = myArr.splice(1,3)
// console.log("c",myArr);
// console.log(myn2);


const marvel_heros = ["thor","spiderman","ironman"]
const dc_heros = ["superman","batman","mahesh"]

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)

const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros)

// const arr1= [1,2,3,[4,5,6],[6,7,[8,9]]]
// console.log(arr1.flat(Infinity))

// console.log(Array.isArray("prabhu"))
// console.log(Array.from("prabhu"))

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));