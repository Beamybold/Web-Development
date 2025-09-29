// // //1. Shopping List

// // //1. An array with at least 5 items
// let shoppingLists = ["pen", "book", "Keys", "fan", "bag", "wine", "icecream", "flask"] 

// // //2. to add a new item to the end of the list
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

// 1. Create two arrays
let movies = ["Alakada", "Tundum","Tehillah", "Famous", "U-Turn", "Greatness"];
let ratings = [8.8, 9.2, 7.3, 9.8, 7.7, 7.8];

// 2. Function to add a movie and its rating
function addMovie(movie, rating) {
  movies.push(movie);
  ratings.push(rating); 
}
addMovie("US", 6.3)
addMovie("Hostage", 8.6)
console.log(movies)
console.log(ratings)
console.log("")

// 3. Function to calculate average rating
function getAverageRating() {
  let total = 0 ;
  for(let i = 0; i < ratings.length; i++){
    total += ratings[i];
  }
  return total / ratings.length;
}
console.log(`The average rating is ${getAverageRating().toFixed(2)}`)
console.log("")

// 4. Function to get the top-rated movie
function getTopMovie() {
  let highestRating = ratings[0]
  let topMovie = movies[0]
  for (let i = 1; i < movies.length; i++){
    if (ratings[i] > highestRating){
      highestRating = ratings[i];
      topMovie = movies[i]
    }    
  }
  return topMovie;
}
console.log(`The highest rated movie is ${getTopMovie()} `)
console.log("")

// 5. Print summary of all movies
function printSummary() {
  console.log("Movie Ratings Summary:");
  for (let i = 0; i < movies.length; i++) {
    console.log(`${movies[i]}: ${ratings[i]}`);
    
  }
  console.log("")
  console.log(`Average Rating: ${getAverageRating()}`);
  console.log("")
  console.log(`Top Movie: ${getTopMovie()}`);
  console.log("");

}

// Challenge: Sort movies by rating (high → low)
function sortedMoviesbyRating() {
  let combined = [];
  for(let i = 0; i < movies.length; i++){
    combined.push({name:movies[i], rating: ratings[i]});
  }
  combined.sort((a, b) => b.rating - a.rating);
  
}
  
 console.log("Sorted Movies by Rating:")






// // function printSortedMovies() {
//   let combined = movies.map((movie, i) => ({ movie, rating: ratings[i] }));
//   combined.sort((a, b) => b.rating - a.rating);
//   console.log("🔢 Sorted Movies by Rating:");
//   combined.forEach(item => {
//     console.log(`- ${item.movie}: ${item.rating}`);
//   });

// // 🔄 Update a movie's rating
// function updateRating(movie, newRating) {
//   let index = movies.indexOf(movie);
//   if (index !== -1) {
//     ratings[index] = newRating;
//     console.log(`Updated "${movie}" to new rating: ${newRating}`);
//   } else {
//     console.log(`Movie "${movie}" not found.`);
//   }
// }

// // ❌ Delete a movie
// function deleteMovie(movie) {
//   let index = movies.indexOf(movie);
//   if (index !== -1) {
//     movies.splice(index, 1);
//     ratings.splice(index, 1);
//     console.log(`Deleted "${movie}" from the list.`);
//   } else {
//     console.log(`Movie "${movie}" not found.`);
//   }
// }

// // Example usage
// addMovie("Inception", 9);
// addMovie("Titanic", 8.5);
// addMovie("Interstellar", 9.3);
// addMovie("The Matrix", 8.7);

// updateRating("Titanic", 9.1);
// deleteMovie("The Matrix");

// printSummary();
// printSortedMovies();







//4. Student Report System

// // Array to store student records
// let students = [];

// // ✅ 1. Add Student
// function addStudent(name, grade) {
//   if (grade < 0 || grade > 100) {
//     console.log(`Invalid grade for ${name}. Must be between 0 and 100.`);
//     return;
//   }
//   students.push({ name, grade });
// }

// // ✅ 2. Calculate Average
// function calculateAverage() {
//   let total = 0;
//   for (let student of students) {
//     total += student.grade;
//   }
//   return (total / students.length).toFixed(2);
// }

// // ✅ 3. Find Top & Bottom Student
// function findTopStudent() {
//   let topGrade = Math.max(...students.map(s => s.grade));
//   return students.find(s => s.grade === topGrade);
// }

// function findBottomStudent() {
//   let bottomGrade = Math.min(...students.map(s => s.grade));
//   return students.find(s => s.grade === bottomGrade);
// }

// // ✅ 4. Grade Categorizer
// function getLetterGrade(score) {
//   if (score >= 90) return 'A';
//   if (score >= 80) return 'B';
//   if (score >= 70) return 'C';
//   if (score >= 60) return 'D';
//   return 'F';
// }

// // ✅ 5. Report Generator
// function generateReport() {
//   // Sort students by grade (descending)
//   students.sort((a, b) => b.grade - a.grade);

//   console.log("📊 Class Report");
//   console.log("--------------------------------------------------");
//   console.log("Name\t\tGrade\tLetter Grade");
//   console.log("--------------------------------------------------");

//   for (let student of students) {
//     console.log(`${student.name}\t\t${student.grade}\t${getLetterGrade(student.grade)}`);
//   }

//   console.log("--------------------------------------------------");
//   console.log(`Class Average: ${calculateAverage()}`);
//   console.log(`Top Student: ${findTopStudent().name} (${findTopStudent().grade})`);
//   console.log(`Lowest Student: ${findBottomStudent().name} (${findBottomStudent().grade})`);
// }

// // 🧪 Sample Usage
// addStudent("Alice", 85);
// addStudent("Bob", 92);
// addStudent("Charlie", 67);
// addStudent("Diana", 74);
// addStudent("Eve", 58);

// generateReport();
// 📊 Class Report
// --------------------------------------------------
// Name        Grade   Letter Grade
// --------------------------------------------------
// Bob         92      A
// Alice       85      B
// Diana       74      C
// Charlie     67      D
// Eve         58      F
// --------------------------------------------------
// Class Average: 75.20
// Top Student: Bob (92)
// Lowest Student: Eve (58)

// // Step 1: Create an empty list to store students
// let students = [];

// // Step 2: Add a student with name and grade
// function addStudent(name, grade) {
//   if (grade < 0 || grade > 100) {
//     console.log("Grade must be between 0 and 100.");
//     return;
//   }
//   students.push({ name: name, grade: grade });
// }

// // Step 3: Get average grade
// function getAverage() {
//   let total = 0;
//   for (let i = 0; i < students.length; i++) {
//     total += students[i].grade;
//   }
//   return (total / students.length).toFixed(2);
// }

// // Step 4: Get letter grade
// function getLetter(grade) {
//   if (grade >= 90) return "A";
//   if (grade >= 80) return "B";
//   if (grade >= 70) return "C";
//   if (grade >= 60) return "D";
//   return "F";
// }

// // Step 5: Find top and bottom student
// function getTopStudent() {
//   let top = students[0];
//   for (let i = 1; i < students.length; i++) {
//     if (students[i].grade > top.grade) {
//       top = students[i];
//     }
//   }
//   return top;
// }

// function getBottomStudent() {
//   let bottom = students[0];
//   for (let i = 1; i < students.length; i++) {
//     if (students[i].grade < bottom.grade) {
//       bottom = students[i];
//     }
//   }
//   return bottom;
// }

// // Step 6: Show full report
// function showReport() {
//   // Sort students by grade (high to low)
//   students.sort((a, b) => b.grade - a.grade);

//   console.log("📋 Student Report");
//   console.log("----------------------------");
//   for (let i = 0; i < students.length; i++) {
//     let s = students[i];
//     console.log(`${s.name} - ${s.grade} - ${getLetter(s.grade)}`);
//   }
//   console.log("----------------------------");
//   console.log("Class Average:", getAverage());
//   console.log("Top Student:", getTopStudent().name, "-", getTopStudent().grade);
//   console.log("Lowest Student:", getBottomStudent().name, "-", getBottomStudent().grade);
// }

// // 🧪 Try it out
// addStudent("Ada", 88);
// addStudent("Bola", 95);
// addStudent("Chidi", 72);
// addStudent("Efe", 60);
// addStudent("Zara", 45);

// showReport();

// Adds students with their grades.

// Calculates the average grade.

// Finds the best and worst student.

// Gives each student a letter grade.

// Prints a clean report sorted by grade