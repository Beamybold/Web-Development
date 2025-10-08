








// 1. Create two arrays
let movies = [];
let ratings = [];

// 2. Function to add a movie and its rating
function addMovie(movie, rating) {
  movies.push(movie);
  ratings.push(rating);
  console.log(`Added "${movie}" with a rating of ${rating}`);
}

// 3. Function to calculate average rating
function getAverageRating() {
  let total = ratings.reduce((sum, r) => sum + r, 0);
  let average = total / ratings.length;
  return average.toFixed(2); // rounded to 2 decimal places
}

// 4. Function to get the top-rated movie
function getTopMovie() {
  let maxRating = Math.max(...ratings);
  let index = ratings.indexOf(maxRating);
  return `${movies[index]} (${maxRating})`;
}

// 5. Print summary of all movies
function printSummary() {
  console.log("🎬 Movie Ratings Summary:");
  for (let i = 0; i < movies.length; i++) {
    console.log(`- ${movies[i]}: ${ratings[i]}`);
  }
  console.log(`📊 Average Rating: ${getAverageRating()}`);
  console.log(`🏆 Top Movie: ${getTopMovie()}`);
}

// Challenge: Sort movies by rating (high → low)
function printSortedMovies() {
  let combined = movies.map((movie, i) => ({ movie, rating: ratings[i] }));
  combined.sort((a, b) => b.rating - a.rating);
  console.log("🔢 Sorted Movies by Rating:");
  combined.forEach(item => {
    console.log(`- ${item.movie}: ${item.rating}`);
  });
}

// Example usage
addMovie("Inception", 9);
addMovie("Titanic", 8.5);
addMovie("Interstellar", 9.3);
addMovie("The Matrix", 8.7);

printSummary();
printSortedMovies();

let movies = [];
let ratings = [];

function addMovie(movie, rating) {
  movies.push(movie);
  ratings.push(rating);
  console.log(`Added "${movie}" with a rating of ${rating}`);
}

function getAverageRating() {
  let total = ratings.reduce((sum, r) => sum + r, 0);
  let average = total / ratings.length;
  return average.toFixed(2);
}

function getTopMovie() {
  let maxRating = Math.max(...ratings);
  let index = ratings.indexOf(maxRating);
  return `${movies[index]} (${maxRating})`;
}

function printSummary() {
//   console.log("🎬 Movie Ratings Summary:");
//   for (let i = 0; i < movies.length; i++) {
//     console.log(`- ${movies[i]}: ${ratings[i]}`);
//   }
//   console.log(`📊 Average Rating: ${getAverageRating()}`);
//   console.log(`🏆 Top Movie: ${getTopMovie()}`);
// }

// function printSortedMovies() {
//   let combined = movies.map((movie, i) => ({ movie, rating: ratings[i] }));
//   combined.sort((a, b) => b.rating - a.rating);
//   console.log("🔢 Sorted Movies by Rating:");
//   combined.forEach(item => {
//     console.log(`- ${item.movie}: ${item.rating}`);
//   });
// }

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



