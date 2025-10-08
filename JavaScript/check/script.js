// // <!-- Arrays and loop
// // Arrays are ordered collections of data. Its characteristics are:
// // 1. ordered: Each items have specific positions (indexes)
// // 2. Indexed: Each item has a number starting from zero
// // 3. Dynamic: not static, can be added to, removed from, and chamged
// // 4. Mixed type: can contain different data types  -->



// // <!-- creating Arrays with [] -->
//  let fruits = ["apple", "banana", "orange", "grape"];
//  let numbers = [10, 25, 30, 45, 50]
//  let booleans = [true, false, true, true];
//  let mixedArray = ["John", 25, true, "student"];

//  //empty arrays
//  let emptyArray = [];

//  //display the arrays
//  console.log("Fruits array:", fruits);
//  console.log("Number array:", numbers);
//  console.log("Mixed array:", mixedArray);
// console.log("Empty array:", emptyArray);

// console.log("");

// //Array length property
//  let length = fruits.length;
//  console.log("Numbers of fruits:", length);
//  console.log("Numbers of numbers", numbers.length);
//  console.log("Numbers of mixed array", mixedArray.length);
//  console.log("Empty array length:", emptyArray.length);
//  console.log("");

//  // Accessing individual elements with index [0, 1, 2, ...]
// console.log("First fruit:", fruits[0]);     // apple
// console.log("Second fruit:", fruits[1]);    // banana
// console.log("Last fruit:", fruits[length - 1]); // grape
// console.log("First number:", numbers[0]);   // 10
// console.log("Third number:", numbers[2]);   // 30
// // What happens with invalid indexes?
// console.log("Index that doesn't exist:", fruits[10]); // undefined



// //Modifying arrays|array METHODS
// let colors = ["red", "blue", "green"];
// console.log("Original colors:", colors);

// //Changing existing items
// colors[0] = "purple";
// colors[2] = "yellow";
// console.log("after changing:", colors)
//  console.log("");

// // Removing the last element with pop()
// let shoppingList = ["bag", "shoe", "gold", "ring"];
// let removedItem = shoppingList.pop();
// console.log("Removed item:", removedItem);
// console.log("Remaining:", shoppingList);
// console.log("");


// // Adding elements to the beginning with unshift()
// shoppingList.unshift("icecream");
// console.log(shoppingList);

// // Removing the first element with shift()
// shoppingList.shift();
// console.log(shoppingList);
// console.log("");

// // Finding elements
// let students = ["Tayo", "Nike", "Sola", "Ade", "Ike", "Ayo"];
// console.log("Is Ayo a student?", students.includes("Ayo"))
// console.log("Is Sam  a student: ", students.includes("Sam"))
// console.log("Is Ayo a student?", students.includes("ayo")) //it is case sensitive
// console.log("");

// let number = [1, 2, 3, 4, 5, 6,];
// let name = ["John", "Paul", "Temi", "Tola"];
// console.log("Original numbers:", number);
// console.log("Original names:", name);
// console.log("First 3 items:", number.slice(0, 3)); //start on 0 items stop befoe the 3rd element 
// console.log("Last 2 numbers:", number.slice(-2));

// console.log("Last 2 numbers:", number.slice(1, 4));


// // splice() - Remove/add items at specific position (changes original)
// let fruit = ["apple", "banana", "orange", "grape", "kiwi"];
// console.log("Original fruits:", fruit);

// // Remove 2 items starting at index 1
// let removed = fruit.splice(1, 2);
// console.log("Removed items:", removed);
// console.log("After removal:", fruit);

// // Add items at index 1
// fruit.splice(1, 0, "mango", "pineapple"); // Remove 0, add 2 items
// console.log("After adding:", fruit);

// console.log(""); // Empty line

// //Loops
// //Loops allow you to repeat code multiple times without writing the same code over and over. They're essential for processing arrays and automating repetitive tasks.

// // Common Loop Types:**
// // 1. **for loop** - When you know how many times to repeat
// // 2. **while loop** - When you repeat based on a condition
// // 3. **for...of loop** - When you want to go through each array item
// // 4. **forEach** - Array method for processing each item

// // Basic for loop structure:
// // for (initialization; condition; increment) {
// //     code to repeat
// // }


// // Simple counting loop
// console.log("Counting from 1 to 5:");
// for (let i = 1; i <= 5; i++) {
//     console.log("Count:", i);
// }

// console.log(""); // Empty line

// // Counting backwards
// console.log("Countdown from 5 to 1:");
// for (let i = 5; i >= 1; i--) {
//     console.log("Countdown:", i);
// }
// console.log("Blast off!");

// console.log(""); // Empty line

// // Using loops with calculations
// console.log("Multiplication table for 3:");
// for (let i = 1; i <= 12; i++) {
//     let result = 3 * i;
//     console.log(`3 × ${i} = ${result}`);
// }

// console.log(""); // Empty line

// // Loop with different step sizes
// console.log("Even numbers from 2 to 10:");
// for (let i = 2; i <= 10; i += 2) {  // i += 2 means i = i + 2
//     console.log("Even number:", i);
// }

// console.log(""); // Empty line

// // Loop through an array using index
// let newColors = ["red", "green", "blue", "yellow"];
// console.log("Colors in the array:");
// for (let i = 0; i <newColors.length; i++) {
//     console.log(`Color ${i + 1}: ${newColors[i]}`);
// }

// // **For Loop Parts:**
// // - **Initialization**: `let i = 1` - Set up counter variable
// // - **Condition**: `i <= 5` - Keep looping while this is true
// // - **Increment**: `i++` - Change counter each time
// // - **Body**: Code inside `{}` - What to repeat

// for...of loop - easier way to go through array items
let fruits = ["apple", "banana", "orange", "grape"];

console.log("Using for...of loop:");
for (let fruit of fruits) {
    console.log("I like", fruit);
}

console.log(""); // Empty line

// Compare with traditional for loop
console.log("Using traditional for loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log("I like", fruits[i]);
}

console.log(""); // Empty line

// Processing numbers with for...of
let scores = [85, 92, 78, 96, 88];
let total = 0;

console.log("Calculating average score:");
for (let score of scores) {
    console.log("Adding score:", score);
    total += score;  // Same as: total = total + score
}

let average = total / scores.length;
console.log(`Total: ${total}, Average: ${average.toFixed(1)}`);

console.log(""); // Empty line

// Using loops with conditions
let temperatures = [68, 72, 85, 90, 75, 82, 88];
let hotDays = 0;
let coldDays = 0;

console.log("Analyzing temperatures:");
for (let temp of temperatures) {
    if (temp >= 85) {
        hotDays++;
        console.log(`${temp}°F - Hot day!`);
    } else if (temp < 70) {
        coldDays++;
        console.log(`${temp}°F - Cold day!`);
    } else {
        console.log(`${temp}°F - Nice day!`);
    }
}

console.log(`Summary: ${hotDays} hot days, ${coldDays} cold days`);

console.log(""); // Empty line

// Building new arrays with loops
let numbers = [1, 2, 3, 4, 5];
let doubled = [];

console.log("Doubling each number:");
for (let num of numbers) {
    let doubledValue = num * 2;
    doubled.push(doubledValue);
    console.log(`${num} × 2 = ${doubledValue}`);
}

console.log("Original:", numbers);
console.log("Doubled:", doubled);

// **When to Use Each Loop:**
// - **for...of** - When you want each item, don't need index
// - **Traditional for** - When you need the index number
// - **Both work**, for...of is usually cleaner and easier to read

// # While Loops

// // While loop - repeats as long as condition is true
// // while (condition) {
// //     code to repeat
// // }

console.log("Basic while loop - counting to 5:");
let count = 1;
while (count <= 5) {
    console.log("Count is:", count);
    count++; // IMPORTANT: Must change the condition variable!
}

console.log(""); // Empty line

// While loop processing array until condition met
let numberz = [2, 4, 6, 8, 3, 10, 12];
let i = 0;
let foundOdd = false;

console.log("Looking for first odd number:");
while (i < numberz.length && !foundOdd) {
    console.log(`Checking ${numbers[i]}...`);
    
    if (numberz[i] % 2 === 1) {  // Check if odd
        console.log(`Found odd number: ${numberz[i]}`);
        foundOdd = true;
    } else {
        console.log(`${numberz[i]} is even, continuing...`);
    }
    
    i++;
}

if (!foundOdd) {
    console.log("No odd numbers found!");
}

console.log(""); // Empty line

// do...while loop - runs at least once
let number = 1;

do {
    console.log("Number is: " + number);
    number++;
} while (number <= 3);

console.log("Loop finished!");



// **While Loop Key Points:**
// - **Condition checked first** - May never run if condition is false
// - **Must change condition variable** - Or you get infinite loop!
// - **do...while** - Runs at least once, checks condition at end
// - **Use for unknown number of iterations** - When you don't know how many times to loop



//Arry methods that use functions

// Modern array methods that make processing easier
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Original numbers:", nums);
console.log(""); // Empty line

// forEach() - Do something with each element
console.log("Using forEach to print each number:");
nums.forEach(function(num) {
    console.log("Number:", num);
});

console.log(""); // Empty line

// More concise with arrow function
console.log("forEach with arrow function:");
nums.forEach(num => console.log(`Value: ${num}`));

console.log(""); // Empty line

// map() - Transform each element and create new array
console.log("Using map to double each number:");
let doubledd = numbers.map(function(number) {
    return number * 2;
});
console.log("Doubled:", doubledd);

// Shorter arrow function version
let tripled = nums.map(num => num * 3);
console.log("Tripled:", tripled);

console.log(""); // Empty line

// filter() - Keep only elements that meet condition
console.log("Using filter to get even numbers:");
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log("Even numbers:", evenNumbers);

// Get odd numbers with arrow function
let oddNumbers = numbers.filter(number => number % 2 === 1);
console.log("Odd numbers:", oddNumbers);

console.log(""); // Empty line

// find() - Get first element that meets condition
let firstBigNumber = numbers.find(number => number > 5);
console.log("First number > 5:", firstBigNumber);



// **Array Methods Summary:**
// - **forEach()** - Do something with each item (no return)
// - **map()** - Transform each item, return new array
// - **filter()** - Keep items that pass test, return new array  
// - **find()** - Return first item that passes test
