// Simple Grading System  

// **Requirements:**  
// 1. Create a function `getGrade(score)`  
// 2. Use if/else if statements to assign grades:  
//    - 90+ → "A"  
//    - 80–89 → "B"  
//    - 70–79 → "C"  
//    - 60–69 → "D"  
//    - Below 60 → "F"  
// 3. Return a message like: `"Score: 85 → Grade: B"`  

// **Challenge:** Add a condition for perfect scores (100) that returns `"Outstanding! Grade: A+"`


function getGrade() {
   let score =  Number(prompt("What is your score: "))
    
    //console.log("You have an excellent result")
    if (score == 100){
        console.log (`Outstanding! Grade: A+`);
    }else if (score >= 90){
        console.log (`Score: ${score} -> Grade: A`);
    }else if (score >= 80){
        console.log (`Score: ${score} -> Grade: B`);
    }else if (score >= 70){
        console.log (`Score: ${score} -> Grade: C`);
    }else if (score >= 60){
        console.log (`Score: ${score} -> Grade: D`);
    }else {
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
function calculateDiscount(price, customerType, isFirstTime) {
    let discount = 0;
    
    if (customerType === "student") {
        discount = 0.10; // 10% discount
    } else if (customerType === "senior") {
        discount = 0.15; // 15% discount
    } else if (customerType === "employee") {
        discount = 0.20; // 20% discount
    }
    
    // Additional discount for first-time customers
    if (isFirstTime) {
        discount += 0.05; // Extra 5%
    }
    
    let finalPrice = price * (1 - discount);
    return {
        originalPrice: price,
        discountPercent: discount * 100,
        finalPrice: finalPrice.toFixed(2)
    };
}

// Test discount function
let result = calculateDiscount(100, "student", true);
console.log("Price calculation:");
console.log(`Original: $${result.originalPrice}`);
console.log(`Discount: ${result.discountPercent}%`);
console.log(`Final price: $${result.finalPrice}`);
```

This shows how functions and conditionals work together to create smart, decision-making code!
