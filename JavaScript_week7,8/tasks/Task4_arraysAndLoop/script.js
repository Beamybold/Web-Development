//Exervise 1

//1. An array with at least 5 items
let shoppingLists = ["pen", "book", "Keys", "fan", "bag", "wine", "icecream", "flask"] 

//2. to add a new item to the end of the list
shoppingLists.push("oil") 
console.log("Complete Shopping list: " + shoppingLists)
console.log("")

//3. To remove the first item from a list
shoppingLists.shift()
console.log("first item deleted: " + shoppingLists)
console.log("")

//4. To display the total number of items
console.log(shoppingLists.length)


//5. Looping through the list
for(let i = 0; i < shoppingLists.length; i++) {
    console.log(`Item ${i+1}: ${shoppingLists[i]}`)
}
console.log("")

// Challenge: Create a function `formatList(list)` that returns the shopping list in a numbered format
function formatList(list) {
  return list.map((item, index) => `${index + 1.}. ${item}`);
}
console.log(formatList(shoppingLists))
console.log("")


// function formatList(list) {
//   let result = '';
//   for (let i = 0; i < list.length; i++) {
//     result += (i + 1) + '. ' + list[i] + '\n';
//   }
//   return result;
// }
// console.log(`Formatted List: ${formatList}`)


// is function takes any list and returns a string with each item numbered.

// .map() creates a new array with formatted strings.

// .join('\n') combines them into one string with line breaks.


//Exercise 2: Student Grades Analyser
//1. Storing grades in an array
let grades = [67, 97, 90, 42, 90, 75, 63];

//2. A function `getAverage(grades)` to calculate average grade

function getAverage(grades) {
  let total = 0;
  for (let i = 0; i < grades.length; i++) {
    total += grades[i];
  }
  return total / grades.length;
}
console.log("The average grade is " + getAverage(grades).toFixed(2))
console.log("")

// 3. a function `getHighest(grades)` to find the highest grade
function getHighest(grades) {
  let highest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] > highest) {
      highest = grades[i];
    }
  }
  return highest;
}
console.log("The highest grade is ", getHighest(grades))
console.log("")

getb