// function greet(name){
//     console.log(`Welcome to avascript! ${name}`);
// }
// greet("Ade")


// function calculateSquare(a){ // a is a parameter
//     return a**2;
// }

// console.log(squareNumber(2)) // 2 is an argument

// const subtract = function(a, b){
//     return a - b;
// }
// // console.log(subtract(5, 7))
// const subtractThenAdd = function(a, b){
//     let add = a + b;
//     return subtract(add, b);
// }
// console.log(subtractThenAdd(7, 5))



//Arrow function
// const divide =  (a,b) =>  a/b;
// 
// const greetUser = (name) => `You are welcome ${name}`
// console.log(greetUser("Ayo"))
// console.log(divide(20, 10))

// function startWork(){
//     let message = "Start work now" // this variable cannot be called outside this function
//     return message
// }
// console.log(startWork())

const sayHello = () => `Hello, World!`
const welcomeUser = (name) => `Welcome to web development ${name}`
const add = (a,b) => a+b;
const calculateSquare = (a) => a ** 2
function double(a){
    return a * 2
}
function addThenDouble(a, b){
    let add = a + b
    return double(add)
}

console.log(sayHello())
console.log(welcomeUser("Folarin"))
console.log(addThenDouble(8, 4))
