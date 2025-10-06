// it passes a function as an argument
function greet(name) {
    return`Hello ${name}`
}

function processUserInput(callback){
    const name = "Jolaoluwa";
    return callback(name)

}
console.log(processUserInput(greet ))