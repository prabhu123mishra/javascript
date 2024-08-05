//iife=> IMMEDIATELY INVOKED FUNCTION EXPRESSION
//global scope ke poolution se bachne ke lie "iife" ka use krte h..
(function chai(){
    //named iife
    console.log("database connected")
})();
//he dont know where to stop thats why use parenthesis at the end..
( (name) => {
    console.log(`database connected two ${name}`)
}) ("krishna")