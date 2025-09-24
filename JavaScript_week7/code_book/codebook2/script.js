// <!-- Arrays and loop
// Arrays are ordered collections of data. Its characteristics are:
// 1. ordered: Each items have specific positions (indexes)
// 2. Indexed: Each item has a number starting from zero
// 3. Dynamic: not static, can be added to, removed from, and chamged
// 4. Mixed type: can contain different data types  -->



// <!-- creating Arrays with [] -->
 let fruits = ["apple", "banana", "orange", "grape"];
 let numbers = [10, 25, 30, 45, 50]
 let booleans = [true, false, true, true];
 let mixedArray = ["John", 25, true, "student"];

 //empty arrays
 let emptyArray = [];

 //display the arrays
 console.log("Fruits array:", fruits);
 console.log("Number array:", numbers);
 console.log("Mixed array:", mixedArray);
console.log("Empty array:", emptyArray);

console.log("");

//Array length property
 let length = fruits.length;
 console.log("Numbers of fruits:", length);
 console.log("Numbers of numbers", numbers.length);
 console.log("Numbers of mixed array", mixedArray.length);
 console.log("Empty array length:", emptyArray.length);
 console.log("");

 // Accessing individual elements with index [0, 1, 2, ...]
console.log("First fruit:", fruits[0]);     // apple
console.log("Second fruit:", fruits[1]);    // banana
console.log("Last fruit:", fruits[length - 1]); // grape
console.log("First number:", numbers[0]);   // 10
console.log("Third number:", numbers[2]);   // 30
// What happens with invalid indexes?
console.log("Index that doesn't exist:", fruits[10]); // undefined



//Modifying arrays|array METHODS
let colors = ["red", "blue", "green"];
console.log("Original colors:", colors);

//Changing existing items
colors[0] = "purple";
colors[2] = "yellow";
console.log("after changing:", colors)
 console.log("");

// Removing the last element with pop()
let shoppingList = ["bag", "shoe", "gold", "ring"];
let removedItem = shoppingList.pop();
console.log("Removed item:", removedItem);
console.log("Remaining:", shoppingList);
console.log("");


// Adding elements to the beginning with unshift()
shoppingList.unshift("icecream");
console.log(shoppingList);

// Removing the first element with shift()
shoppingList.shift();
console.log(shoppingList);
console.log("");

// Finding elements
let students = ["Tayo", "Nike", "Sola", "Ade", "Ike", "Ayo"];
console.log("Is Ayo a student?", students.includes("Ayo"))
console.log("Is Sam  a student: ", students.includes("Sam"))
console.log("Is Ayo a student?", students.includes("ayo")) //it is case sensitive
console.log("");

let number = [1, 2, 3, 4, 5, 6,];
let name = ["John", "Paul", "Temi", "Tola"];
console.log("Original numbers:", number);
console.log("Original names:", name);
console.log("First 3 items:", number.slice(0, 3)); //0-3 items 
console.log("Last 2 numbers:", number.slice(-2));

console.log("Last 2 numbers:", number.slice(1, 4));









