var c=300

if(true){
    let a=10
    const b=20
    var c=30
}
// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "krishna"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}

//one()

if(true){
    const username = "RAM"

    if(true){
        const website = " google"
        //console.log(username+website)
    }
    //console.log(website)
}
//console.log(username)

//hoisting is happening
console.log(addOne(5))

function addOne(num){
    return num+1
}


//hoisting is not happening
//console.log(addTwo(6))
const addTwo = function(num){
    return num+2
}

