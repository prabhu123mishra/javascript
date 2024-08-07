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

// const num1 = []
// myNums.filter( (num) => {
//     if(num > 6){
//       num1.push(num)
//     }
// })

// console.log(num1)

const books = [
  {title : 'book one' , genre:'history',publish:'2000',edition:'2008'},
  {title : 'book two' , genre:'economics',publish:'1998',edition:'2012'},
  {title : 'book three' , genre:'fiction',publish:'2005',edition:'2013'},
  {title : 'book four' , genre:'comic',publish:'2002',edition:'2014'},
  {title : 'book five' , genre:'accounting',publish:'2010',edition:'2016'},
  {title : 'book six' , genre:'commerce',publish:'1988',edition:'2010'},
  {title : 'book seven' , genre:'economics',publish:'2002',edition:'2015'},
  {title : 'book eight' , genre:'aptitute',publish:'2001',edition:'2016'},
  {title : 'book nine' , genre:'civics',publish:'1986',edition:'2014'},
  {title : 'book ten' , genre:'biology',publish:'1985',edition:'2008'}
];

//let userBooks = books.filter( (book) => { return book.genre === 'economics'})
let userBooks = books.filter( (book) => { return book.publish <= 2000 && book.genre === 'economics'})
console.log(userBooks)