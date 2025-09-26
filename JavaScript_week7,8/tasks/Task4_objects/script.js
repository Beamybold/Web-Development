Can this be written in a more simple manner for a beginner to easily understand

solve in the simplest way possible and use template literal that a beginner can easily grab.





// Step 1: Create a movie object
let movie = {
  title: "Inception",
  director: "Christopher Nolan",
  releaseYear: 2010,
  rating: 9,

  // Step 2: Add a method to summarize the movie
  getSummary: function () {
    return `${this.title} (${this.releaseYear}), directed by ${this.director}, rated ${this.rating}/10`;
  }
};

// Step 3: Add a new property and update it
movie.isWatched = true;

// Show the summary
console.log(movie.getSummary());
console.log(`Watched: ${movie.isWatched}`);

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

// 🔥 Challenge: Create a list of movies
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
    rating: 8,
    isWatched: true
  },
  {
    title: "The Room",
    director: "Tommy Wiseau",
    releaseYear: 2003,
    rating: 3,
    isWatched: false
  }
];

// Function to show movies with rating 8 or more
function showGoodMovies(movies) {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].rating >= 8) {
      console.log(movies[i].title + " - " + movies[i].rating + "/10");
    }
  }
}

// Run the function
showGoodMovies(movieList);



//task2
// Step 1: Create one cart item object
let cartItem = {
  name: "Laptop",
  price: 1500,
  quantity: 2,

  // Step 2: Method to calculate total cost of this item
  getTotal: function () {
    return this.price * this.quantity;
  }
};

// Show total for this item
console.log("Total for " + cartItem.name + ": $" + cartItem.getTotal());

// Step 3: Create an array with at least 3 cart items
let cart = [
  {
    name: "Laptop",
    price: 1500,
    quantity: 1,
    getTotal: function () {
      return this.price * this.quantity;
    }
  },
  {
    name: "Headphones",
    price: 200,
    quantity: 2,
    getTotal: function () {
      return this.price * this.quantity;
    }
  },
  {
    name: "Mouse",
    price: 50,
    quantity: 3,
    getTotal: function () {
      return this.price * this.quantity;
    }
  }
];

// Step 4: Function to calculate total cost of all items in the cart
function getCartTotal(cart) {
  let total = 0;

  // Loop through each item and add its total to the overall total
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].getTotal();
  }

  console.log("🛒 Total cost of all items: $" + total);
  return total;
}

// Run the function
getCartTotal(cart);


3.
// Step 1: Create a member object
let member = {
  name: "Alice",
  membershipType: "premium", // can be "basic" or "premium"
  borrowedBooks: [],

  // Step 2: Method to borrow a book
  borrowBook: function (book) {
    this.borrowedBooks.push(book);
    console.log(this.name + " borrowed: " + book);
  },

  // Step 3: Method to count borrowed books
  getBorrowedCount: function () {
    return this.borrowedBooks.length;
  },

  // Step 4: Method to show membership info
  getMembershipInfo: function () {
    if (this.membershipType === "premium") {
      return "Premium members can borrow unlimited books.";
    } else {
      return "Basic members can borrow up to 5 books.";
    }
  }
};

// Try borrowing some books
member.borrowBook("The Hobbit");
member.borrowBook("1984");

// Show borrowed count
console.log("Books borrowed: " + member.getBorrowedCount());

// Show membership info
console.log(member.getMembershipInfo());
