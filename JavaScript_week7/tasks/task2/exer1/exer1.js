// Simple Grading System  

// **Requirements:**  
// 1. Create a function   
// 2. Use if/else if statements to assign grades:  
//    - 90+ → "A"  
//    - 80–89 → "B"  
//    - 70–79 → "C"  
//    - 60–69 → "D"  
//    - Below 60 → "F"  
// 3. Return a message like: `"Score: 85 → Grade: B"`  

// **Challenge:** Add a condition for perfect scores (100) that returns `"Outstanding! Grade: A+"`


function getGrade() { //function `getGrade(score)` 
   let score =  Number(prompt("What is your score: "))
    
    //Use if/else if statements to assign grades
    if (score == 100){
        console.log (`Outstanding! Grade: A+`); //condition for a perfect scores (100) that returns `"Outstanding! Grade: A+"`
    }else if (score >= 90){
        console.log (`Score: ${score} -> Grade: A`);
    }else if (score >= 80){
        console.log (`Score: ${score} -> Grade: B`);
    }else if (score >= 70){
        console.log (`Score: ${score} -> Grade: C`);
    }else if (score >= 60){
        console.log (`Score: ${score} -> Grade: D`);
    }else  {
        console.log (`Score: ${score} -> Grade: F`);
    }  

}


// Discount Calculator  

// **Requirements:**  
// 1. Write a function `calculatePrice(price, customerType, isFirstPurchase)`  
// 2. Apply discounts:  
//    - Student → 10%  
//    - Senior → 15%  
//    - Employee → 20%  
// 3. If `isFirstPurchase` is true, add an extra 5% discount  
// 4. Return the final price (rounded to 2 decimals)  

// **Challenge:** Print a full receipt showing original price, discount percent, and final price.




// Function that calculates discounts
function calculateDiscount(price, customerType, isFirstPurchase) {
    let discount = 0;
    
    if (customerType === "student") {
        discount = 0.10; // 10% discount
    } else if (customerType === "senior") {
        discount = 0.15; // 15% discount
    } else if (customerType === "employee") {
        discount = 0.20; // 20% discount
    }
    
    // Additional discount for first-time customers
    if (isFirstPurchase)  {
        discount += 0.05; // Extra 5%
    }
    
    let finalPrice = price * (1 - discount); //To calculate final price after discount
    return {
        originalPrice: price,
        discountPercent: discount.toFixed(2) * 100,
        finalPrice: finalPrice.toFixed(2)
    };
}

// Test discount function
let result = calculateDiscount(1000, "senior", true);
console.log("Price calculation:");
console.log(`Original: $${result.originalPrice}`);
console.log(`Discount: ${result.discountPercent}%`);
console.log(`Final price: $${result.finalPrice}`);


// **Task:** Weather Advisor  

// **Requirements:**  
// 1. Write a function `weatherAdvice(temperature, isRaining)`  
// 2. Use if/else if to return advice:  
//    - < 32 and raining → "Freezing rain! Stay inside!"  
//    - < 32 → "Very cold, wear a heavy coat."  
//    - 32–60 → "Chilly, bring a jacket."  
//    - 60–80 → "Nice weather!"  
//    - `>` 80 → "It's hot, stay hydrated!"  
// 3. Return the advice as a string  

// **Challenge:** Add a ternary operator for quick advice like:  
//    `"Bring an umbrella"` if raining, otherwise `"No umbrella needed"`.



// Function that gives weather advice
function weatherAdvice(temperature, isRaining) {
 
//Using if/else if to return advice
if (temperature < 32 && isRaining) {
    console.log("Freezing rain! Stay inside!");
} else if (temperature < 32) {
    console.log("Very cold! Wear a heavy coat!");
} else if (temperature <= 32 && temperature <= 60) {
    console.log("Chilly, bring a jacket.");
} else if (temperature <= 60 && temperature <= 80) {
    console.log("Nice weather!");
} else if (temperature > 80) {
    console.log("It's hot, stay hydrated!");
} else {
    console.log("It's warm! T-shirt weather!");
}
}

//Adding a tenary operator
isRaining = true


let weatherAdvisor = isRaining ? "Bring an umbrella" : "No umbrella needed";
console.log(`Weather Advice: ${isRaining}`)



