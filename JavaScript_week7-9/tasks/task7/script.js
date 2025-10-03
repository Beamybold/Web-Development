//1- Book class
//1. Define a Book class
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isBorrowed = false; // Challenge: default value
  }

  // 2. Method to get summary
  getSummary() {
    return `Book: ${this.title} by ${this.author} (${this.year})`;
  }

  // Challenge: Method to borrow the book
  borrowBook() {
    this.isBorrowed = true;
  }
}

// 3. Create Book objects
let book1 = new Book("Outsource", "Leo Rapheal", 2024);
let book2 = new Book("Tech Wins", "Ade Adeimpe", 2003);

// Call getSummary for each
console.log(book1.getSummary());
console.log(book2.getSummary());

// Challenge: Borrow book1
book2.borrowBook();
console.log(`Is "${book2.title}" borrowed?`, book2.isBorrowed); 



//2 - Student Report card
// 1. Create the Student class
class Student {
  constructor(name, age, grades) {
    this.name = name;
    this.age = age;
    this.grades = grades;
  }

  // 2. Method to calculate average grade
  calculateAverage() {
    let total = 0;
    for (let i = 0; i < this.grades.length; i++) {
      total += this.grades[i];
    }
    return total / this.grades.length;
  }
   
  // 3. Method to show student details
  getDetails() {
    let average = this.calculateAverage();
    let status = average < 50 ? "Failed" : "Passed"; //
    return `Name: ${this.name}\nAge: ${this.age}\nAverage: ${average.toFixed(2)}\nStatus: ${status}`;
  }
}

let student1 = new Student('Ade', 17, [90, 75, 98, 87]);


console.log(student1.getDetails());
console.log(student1.getDetails());

//3 -Vehicle Inheritance
// 1. Base class: Vehicle
class Vehicle {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  // 2. Method to print vehicle info
  getInfo() {
    return `Vehicle: ${this.brand} ${this.model} (${this.year})`;
  }

  // Challenge: function to check if vehicle is more than 10 years old
  isOld() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year > 10;
  }
}

// 3. Car class that extends Vehicle and adds fuelType
class Car extends Vehicle {
  constructor(brand, model, year, fuelType) {
    super(brand, model, year); 
    this.fuelType = fuelType;
  }

  // 4. Override getInfo to include fuelType
  getInfo() {
    return `Car: ${this.brand} ${this.model} (${this.year}) - Fuel: ${this.fuelType}`;
  }
}


let vehicle1 = new Vehicle('Toyota', 'Corolla', 2010);
let car1 = new Car('Honda', 'Civic', 2014, 'Diesel');



console.log(car1.getInfo());
console.log('Is old?', vehicle1.isOld()); 



//4 - Shopping Cart with classes
// 1. Product class
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// 2. Cart class
class Cart {
  constructor() {
    this.items = [];  
  }

  // Add product to cart
  addProduct(product, quantity) {
    this.items.push({ product, quantity });
  }

  // Remove product by name
  removeProduct(productName) {
    this.items = this.items.filter(item => item.product.name !== productName);
  }

  // Get total price
  getTotal() {
    let total = 0;
    for (let item of this.items) {
      total += item.product.price * item.quantity;
    }
    return total > 100 ? "Free Shipping" : `Total: N${total}`; //challenge
  }
}


let product1 = new Product('Rice', 40);
let product2 = new Product('Beans', 30);
let product3 = new Product('Oil', 50);

let myCart = new Cart();
myCart.addProduct(product1, 2); 
myCart.addProduct(product2, 1); 
myCart.addProduct(product3, 1); 

console.log(myCart.getTotal()); 

myCart.removeProduct('Beans');
console.log(myCart.getTotal()); 




