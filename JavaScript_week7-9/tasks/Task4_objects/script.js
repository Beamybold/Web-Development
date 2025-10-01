// Task 1
//1: Create a movie object
let movie = {
  title: "Inception",
  director: "Christopher Nolan",
  releaseYear: 2010,
  rating: 9,

  //2: Add a method to summarize the movie
  getSummary: function () {
    return `${this.title} (${this.releaseYear}), directed by ${this.director}, rated ${this.rating}/10`;
  }
};

// 3: Add a new property and update it
movie.isWatched = true;


console.log(movie.getSummary());
console.log(`Watched: ${movie.isWatched}`);



//Challenge: Create a list of movies
let movieList = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2019,
    rating: 9,
    isWatched: true
  },
  {
    title: "Awesome",
    director: "Ajala Jalingo",
    releaseYear: 2024,
    rating: 8,
    isWatched: true
  },
  {
    title: "The War Room",
    director: "Kemi Adetiba",
    releaseYear: 2013,
    rating: 5.9,
    isWatched: false
  }
];

// Function to show movies with rating 8 or more
function highltRatedMovies(movies) {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].rating >= 8) {
      console.log(movies[i].title + " - " + movies[i].rating + "/10");
    }
  }
}




//2
// 1: Create one cart item object
let cartItem = {
  name: "bag",
  price: 1500,
  quantity: 2,

  //2: Method to calculate total cost of this item
  getTotal: function () {
    return this.price * this.quantity;
  }
};

// Show total for this item
console.log("Total for " + cartItem.name + ": $" + cartItem.getTotal());

//3: Create an array with at least 3 cart items
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
    name: "Cake",
    price: 200,
    quantity: 2,
    getTotal: function () {
      return this.price * this.quantity;
    }
  },
  {
    name: "Icecream",
    price: 50,
    quantity: 3,
    getTotal: function () {
      return this.price * this.quantity;
    }
  }
];

//4: Function to calculate total cost of all items in the cart
function getCartTotal(cart) {
  let total = 0;

  // Loop through each item and add its total to the overall total
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].getTotal();
  }

  console.log("Total cost of all items: $" + total);
  return total;
}


console.log("Total cost =",getCartTotal(cart));


3.
//1: Create a member object
let member = {
  name: "Ade",
  membershipType: "basic",
  borrowedBooks: [],

  // 2: Method to borrow a book
  borrowBook: function (book) {
    this.borrowedBooks.push(book);
    console.log(this.name + " borrowed: " + book);
  },

  // 3: Method to count borrowed books
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
member.borrowBook("The Beginners");
member.borrowBook("Agbara");

// Show borrowed count
console.log("Books borrowed: " + member.getBorrowedCount());

// Show membership info
console.log(member.getMembershipInfo());
