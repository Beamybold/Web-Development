
// function generateReport() {
//   // Sort students by grade (descending)
//   students.sort((a, b) => b.grade - a.grade);

//   console.log(" Class Report");
//   console.log("--------------------------------------------------");
//   console.log("Name\t\tGrade\tLetter Grade");
//   console.log("--------------------------------------------------");




// // Step 6: Show full report
// function showReport() {
//   // Sort students by grade (high to low)
//   students.sort((a, b) => b.grade - a.grade);

//   console.log("Student Report");
//   console.log("----------------------------");
//   for (let i = 0; i < students.length; i++) {
//     let s = students[i];
//     console.log(`${s.name} - ${s.grade} - ${getLetterGrade(s.grade)}`);
//   }
//   console.log("----------------------------");
//   console.log("Class Average:", calculateAverage());
//   console.log("Top Student:", findTopStudent().name, "-", findTopStudent().grade);
//   console.log("Lowest Student:", findbottomStudent().name, "-", findbottomStudent().grade);
// }



// 🔥 Challenge: Create an array of movies
let movieList = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010,
    rating: 9,
    isWatched: true
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    releaseYear: 2014,
    rating: 8.6,
    isWatched: true
  },
  {
    title: "The Room",
    director: "Tommy Wiseau",
    releaseYear: 2003,
    rating: 3.7,
    isWatched: false
  }
];

// Function to show only top-rated movies (rating ≥ 8)
function showTopRated(movies) {
  let topMovies = movies.filter(movie => movie.rating >= 8);
  topMovies.forEach(movie => {
    console.log(`${movie.title} (${movie.releaseYear}) - ${movie.rating}/10`);
  });
}

// Run the challenge function
showTopRated(movieList);


// Step 1: Create one movie object
let movie = {
  title: "Inception",
  director: "Christopher Nolan",
  releaseYear: 2010,
  rating: 9,

  // Step 2: Method to show summary
  getSummary: function () {
    return this.title + " (" + this.releaseYear + "), directed by " + this.director + ", rated " + this.rating + "/10";
  }
};

// Step 3: Add a new property and set it to true
movie.isWatched = true;

// Show the summary and watched status
console.log(movie.getSummary());
console.log("Watched: " + movie.isWatched);



const addForm = document.getElementById('addForm');
const menuTableBody = document.querySelector('#menuTable tbody');

let menuItems = [];

function renderTable() {
  menuTableBody.innerHTML = '';
  menuItems.forEach((item, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${item.name}</td>
      <td>₦${item.price}</td>
      <td>${item.description}</td>
      <td>
        <input type="number" value="${item.price}" onchange="updatePrice(${index}, this.value)" />
      </td>
      <td>
        <button onclick="removeItem(${index})">Remove</button>
      </td>
    `;

    menuTableBody.appendChild(row);
  });
}

function updatePrice(index, newPrice) {
  menuItems[index].price = parseFloat(newPrice);
  renderTable();
}

function removeItem(index) {
  if (confirm(`Are you sure you want to remove "${menuItems[index].name}"?`)) {
    menuItems.splice(index, 1);
    renderTable();
  }
}

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const price = parseFloat(document.getElementById('price').value);
  const description = document.getElementById('description').value.trim();

  if (name && !isNaN(price) && description) {
    menuItems.push({ name, price, description });
    addForm.reset();
    renderTable();
  }
});
