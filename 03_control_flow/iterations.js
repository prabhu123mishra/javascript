//for loop...
const arr = [1,2,3,4,5,6]

for(const num of arr){
   // console.log(num)
}

const greetings = "Hello world!"
for(const greet of greetings){
    //console.log(`Each char is ${greet}`);
}

//Map 
const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATES OF AMERICA")
map.set('fr',"FRANCE")
map.set('IN',"INDIA")

//console.log(map)


for(const [key,value] of map){
    //console.log(key, ':--',value)
}
//it doesnt work for object..
//we use for In loop for iterating on object..

const myObject = {
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

for(const key in myObject){
    //console.log(`${key} stand for ${myObject[key]}`)
}

const programming = ["java","js","cpp","pyython"]

for(const key in programming){
   // console.log(programming[key]);
}

const coding = ["java","python","cpp"]

coding.forEach( function(item) {
  //console.log(item)
})

coding.forEach((item) => {
    //console.log(item)
})

function printMe(item){
    //console.log(item);
}
coding.forEach(printMe)

coding.forEach((item,index,arr) => {
   // console.log(item,index,arr)
})

const MyCoding = [
        {
           username:"javascript" ,
           filename:"one.js"
        },{
            username:"typescript" ,
           filename:"one.ty"
        },{
            username:"java" ,
           filename:"one.java"
        },{
            username:"python" ,
           filename:"one.py"
        }
]

MyCoding.forEach((item ) => {
    console.log(item.filename)
    console.log(item.username)
})
