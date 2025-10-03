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
    let status = average < 50 ? "Failed" : "Passed; //
    return `Name: ${this.name}\nAge: ${this.age}\nAverage: ${average.toFixed(2)}\nStatus: ${status}`;
  }
}

// Example usage
let student1 = new Student('Ada', 17, [65, 70, 58, 80]);
let student2 = new Student('Bola', 16, [45, 38, 50, 42]);

console.log(student1.getDetails());
console.log('\n' + student2.getDetails());

