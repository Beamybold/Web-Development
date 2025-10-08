//object literal - most common
let person = {
    name: "Ade",
    age: 21,
    isDeveloper: true,
    gender: "male",
    grade: {
        math: "C",
        english: "A",
        biology: "A"
    }
};
console.log(person.grade.english)
person.age = 34;
person.country = "USA"
// console.log(person.grade)
delete person.gender;

// console.log("name" in person)
// console.log("gender" in person)

//constructor
let user = new Object();
user.name = "Ogo";
user.age = 24;
user.isDeveloper = true;
console.log(user.name)
for(let key in user){
    console.log(key, user[key])
}

Object.assign(person, user)
console.log(person, user)
structuredClone[person]
console.log(person)

let car ={
    brand: "Toyota",
    model : "Corolla",
    year : 2020,
    start : function() {
        console.log(`${this.brand} ${this.model} is starting.`);
    }
}
console.log(car.start())

// console.log(car[year])