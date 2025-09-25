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
console.log("First 3 items:", number.slice(0, 3)); //start on 0 items stop befoe the 3rd element 
console.log("Last 2 numbers:", number.slice(-2));

console.log("Last 2 numbers:", number.slice(1, 4));


// splice() - Remove/add items at specific position (changes original)
let fruit = ["apple", "banana", "orange", "grape", "kiwi"];
console.log("Original fruits:", fruit);

// Remove 2 items starting at index 1
let removed = fruit.splice(1, 2);
console.log("Removed items:", removed);
console.log("After removal:", fruit);

// Add items at index 1
fruit.splice(1, 0, "mango", "pineapple"); // Remove 0, add 2 items
console.log("After adding:", fruit);

console.log(""); // Empty line

//Loops
//Loops allow you to repeat code multiple times without writing the same code over and over. They're essential for processing arrays and automating repetitive tasks.

// Common Loop Types:**
// 1. **for loop** - When you know how many times to repeat
// 2. **while loop** - When you repeat based on a condition
// 3. **for...of loop** - When you want to go through each array item
// 4. **forEach** - Array method for processing each item

// Basic for loop structure:
// for (initialization; condition; increment) {
//     code to repeat
// }


// Simple counting loop
console.log("Counting from 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
}

console.log(""); // Empty line

// Counting backwards
console.log("Countdown from 5 to 1:");
for (let i = 5; i >= 1; i--) {
    console.log("Countdown:", i);
}
console.log("Blast off!");

console.log(""); // Empty line

// Using loops with calculations
console.log("Multiplication table for 3:");
for (let i = 1; i <= 12; i++) {
    let result = 3 * i;
    console.log(`3 × ${i} = ${result}`);
}

console.log(""); // Empty line

// Loop with different step sizes
console.log("Even numbers from 2 to 10:");
for (let i = 2; i <= 10; i += 2) {  // i += 2 means i = i + 2
    console.log("Even number:", i);
}

console.log(""); // Empty line

// Loop through an array using index
let newColors = ["red", "green", "blue", "yellow"];
console.log("Colors in the array:");
for (let i = 0; i <newColors.length; i++) {
    console.log(`Color ${i + 1}: ${newColors[i]}`);
}

// **For Loop Parts:**
// - **Initialization**: `let i = 1` - Set up counter variable
// - **Condition**: `i <= 5` - Keep looping while this is true
// - **Increment**: `i++` - Change counter each time
// - **Body**: Code inside `{}` - What to repeat






