// //1. Shopping List

// //1. An array with at least 5 items
let shoppingLists = ["pen", "book", "Keys", "fan", "bag", "wine", "icecream", "flask"] 

// //2. to add a new item to the end of the list
// shoppingLists.push("oil") 
// console.log("Complete Shopping list: " + shoppingLists)
// console.log("")

// // //3. To remove the first item from a list
// shoppingLists.shift()
// console.log("first item deleted: " + shoppingLists)
// console.log("")

// // //4. To display the total number of items
// console.log(shoppingLists.length)


// // //5. Looping through the list
// for(let i = 0; i < shoppingLists.length; i++) {
//     console.log(`Item ${i+1}: ${shoppingLists[i]}`)
// }
// console.log("")

// // // Challenge: Create a function `formatList(list)` that returns the shopping list in a numbered format
// function formatList(list) {
//   return list.map((item, index) => `${index + 1}. ${ item}`);
// }

// console.log(`Formatted List: ${formatList (shoppingLists)}`)



// //Exercise 2: Student Grades Analyser
// //1. Storing grades in an array
// let grades = [67, 97, 90, 42, 90, 75, 63];

// //2. A function `getAverage(grades)` to calculate average grade

// function getAverage(grades) {
//   let total = 0;
//   for (let i = 0; i < grades.length; i++) {
//     total += grades[i];
//   }
//   return total / grades.length;
// }
// console.log("The average grade is " + getAverage(grades).toFixed(2))
// console.log("")

// // 3. a function `getHighest(grades)` to find the highest grade
// function getHighest(grades) {
//   let highest = grades[0];
//   // Add all grades together
//   for (let i = 1; i < grades.length; i++) {
//     if (grades[i] > highest) {
//       highest = grades[i];
//     }
//   }
//   return highest;
// }
// console.log("The highest grade is ", getHighest(grades))
// console.log("")

// //4. a function `getLowest(grades)` to find the highest grade
// function getLowest(grades) {
//   let lowest = grades[0];
//   for (let i = 1; i < grades.length; i++)
//   {
//     if(grades[i] < lowest) {
//       lowest = grades[i];
//     }
//   }
//   return lowest;
// }
// console.log("The lowest grade is", getLowest(grades))
// console.log("")

// // 5. Challenge: Function to calculate pass rate
// function getPassRate(grades) {
//   let passScore = 0;
//   for (let i = 0; i < grades.length; i++) {
//     if (grades[i] >= 50) {
//       passScore++;
//     }
//   }
//    // Calculate percentage of students who passed
//   return ((passScore / grades.length) * 100).toFixed(2) + "%";
// }
// console.log("PassRate is", getPassRate(grades));
// console.log("")

//3. Movie ratings System

// // 1. Create two arrays
// let movies = ["Alakada", "Tundum","Tehillah", "Famous", "U-Turn", "Greatness"];
// let ratings = [8.8, 9.2, 7.3, 9.8, 7.7, 7.8];

// // 2. Function to add a movie and its rating
// function addMovie(movie, rating) {
//   movies.push(movie);
//   ratings.push(rating); 
// }
// addMovie("US", 6.3)
// addMovie("Hostage", 8.6)
// console.log(movies)
// console.log(ratings)
// console.log("")

// // 3. Function to calculate average rating
// function getAverageRating() {
//   let total = 0 ;
//   for(let i = 0; i < ratings.length; i++){
//     total += ratings[i];
//   }
//   return total / ratings.length;
// }
// console.log(`The average rating is ${getAverageRating().toFixed(2)}`)
// console.log("")

// // 4. Function to get the top-rated movie
// function getTopMovie() {
//   let highestRating = ratings[0]
//   let topMovie = movies[0]
//   for (let i = 1; i < movies.length; i++){
//     if (ratings[i] > highestRating){
//       highestRating = ratings[i];
//       topMovie = movies[i]
//     }    
//   }
//   return topMovie;
// }
// console.log(`The highest rated movie is ${getTopMovie()} `)
// console.log("")

// // 5. Print summary of all movies
// function printSummary() {
//   console.log("Movie Ratings Summary:");
//   for (let i = 0; i < movies.length; i++) {
//     console.log(`${movies[i]}: ${ratings[i]}`);
    
//   }
//   console.log("")
//   console.log(`Average Rating: ${getAverageRating()}`);
//   console.log("")
//   console.log(`Top Movie: ${getTopMovie()}`);
//   console.log("");

// }

// // Challenge: Sort movies by rating (high → low)
// function sortedMoviesbyRating() {
//   let combined = [];
//   for(let i = 0; i < movies.length; i++){
//     combined.push({name:movies[i], rating: ratings[i]});
  
//   }
//   combined.sort((a, b) => b.rating - a.rating);
//   for(let item of combined){
//     console.log(item.name, "Rating", item.rating)
//   }
  
// } 
  
//   console.log("Sorted Movies by Rating:");
//   console.log(sortedMoviesbyRating());
//   console.log(" ");






//4. Student Report System
// Array to store student records
let students = [];

//  1. Function to add Student
function addStudent(name, grade) {
  if (grade < 0 || grade > 100) {
    console.log(`Invalid grade for ${name}.`);  
  }else {
    students.push({name: name, grade: grade});
  }  
}
  addStudent("Tope", 89)
  addStudent("Ike", 98)
  addStudent("Tola", 74)
  addStudent("Ola", 75)
  addStudent("oye", 130)
  console.log(students)
 

//  2. Calculate Average
function calculateAverage() {
let grades = [];
  let total = 0;
  for (let i = 0; i < students.length; i++) {
    total += students[i].grade;
  }
  let average = total / students.length
  return average;
}

console.log("The average score is", calculateAverage())


//  3. Find Top & Bottom Student
function findTopStudent() {
  let topGrade = Math.max(...students.map(s => s.grade));//.map creates a new array containing only the grades of all students.
  //The spread operator ... expands the array into individual arguments
  //returns the max grade
  return students.find(s => s.grade === topGrade);
}
console.log("The student with the highest grade is", findTopStudent())


function findBottomStudent() {
  let bottomGrade = Math.min(...students.map(s => s.grade));
  return students.find(s => s.grade === bottomGrade);
}
console.log("The student with the least grade is", findBottomStudent())





// 4. Grade Categorizer
function getLetterGrade(score) {
  if (score >= 90 || score === 100) {
    return 'A';
  } else if (score >= 80 || score === 89){ return 'B';
  } else if (score >= 70 || score === 79){ return 'C';
  } else if  (score >= 60 || score === 69){
    return 'D';
  } else if (score >= 0 || score === 59){
  return 'F';
  } else {
    return "Invalid input"
  }
}

console.log(getLetterGrade(98))


// // 5. Report Generator
  for (let student of students) {
    console.log(`${student.name}\t\t${student.grade}\t${getLetterGrade(student.grade)}`);
  }

  console.log("--------------------------------------------------");
  console.log(`Class Average: ${calculateAverage()}`);
  console.log(`Top Student: ${findTopStudent().name} (${findTopStudent().grade})`);
  console.log(`Lowest Student: ${findBottomStudent().name} (${findBottomStudent().grade})`);













