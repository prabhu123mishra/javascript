//  const coding = ["java","javascript","python","oops","cpp"]
// //forEach  vales dont return anything..
//  const values = coding.forEach( (item) => {
//     console.log(item)
//     return item
//  })

//  console.log(values)

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (nums) => nums > 4)
// console.log(newNums)

//or 
// const newNums = myNums.filter( (num) => {
//    return num > 4
// })

const num1 = []
myNums.filter( (num) => {
    if(num > 6){
      num1.push(num)
    }
})

console.log(num1)



