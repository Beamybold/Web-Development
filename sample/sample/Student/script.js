
document.getElementById("update").style.display = "none"

let arrayData = [];
function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    objData = {username, password}

    console.log(objData)

    arrayData.push(objData)

    console.log(arrayData)
    displayShow()

}

function displayShow(){
    document.getElementById("display").innerHTML = "";
    for (let i=0; i < arrayData.length; i++){

        document.getElementById("display").innerHTML += `
        <td>${i + 1}</td>
        <td>${arrayData[i].username}</td>
        <td>${arrayData[i].password}</td>
        <td>
        <button id="edit" onclick="edit()" >Edit</button>
        <button>Delete</button>
        </td>
        `

    }
    
}


// function edit(){
//     document.getElementById("login").style.display = "none";
//     document.getElementById("update").style.display = "block";

// }