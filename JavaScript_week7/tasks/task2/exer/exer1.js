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


function getGrade(){ //function `getGrade(score)` 
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



// // Function that gives weather advice
function weatherAdvice(temperature, isRaining) {
    let advice= "";
    // let  isRaining = true;

 
//Using if/else if to return advice
if (temperature < 32 && isRaining) {
    advice = "Freezing rain! Stay inside!";
} else if (temperature < 32) {
    advice = "Very cold! Wear a heavy coat!";
} else if (temperature >= 32 && temperature <= 60) {
    advice = "Chilly, bring a jacket.";
} else if (temperature > 60 && temperature <= 80) {
    advice = "Nice weather!";
} else if (temperature > 80) {
    advice = "It's hot, stay hydrated!";
} else {
    advice = "It's warm! T-shirt weather!";
}


//Adding a tenary operator
advice += "" + (isRaining = advice ? "Bring an umbrella" : "No umbrella needed");
return advice;
}

console.log(weatherAdvice(85, true))
console.log(weatherAdvice(35, true))
console.log(weatherAdvice(78, false))





// ATM Simulation  

// **Requirements:**  
// 1. Create a function `atm(balance, action, amount)`  
// 2. If action is `"withdraw"`, check if balance is enough:  
//    - If yes, subtract amount and return new balance  
//    - If no, return `"Insufficient funds"`  
// 3. If action is `"deposit"`, add amount to balance and return new balance  
// 4. Use clear messages in template literals  

// **Challenge:** Add a condition that blocks withdrawals over 500 at once.

//function for ATM withdrawal
function atm(balance, action, amount) {
    
  if (action === "withdraw") { //To check the condition if action is withdraw
    if (amount > 500) { //condition to block withdrawal over 500 at once
      return "Withdrawal blocked: You cannot withdraw more than 500 at once."; 
    } else if (amount > balance) { 
      return "Insufficient funds. Your balance is ${balance}";
    } else {
      balance -= amount;
      return "Withdrawal successful. New balance: ${balance}";
    }
  } 
  
  else if (action === "deposit") { //condition for deposit
    balance += amount;
    return "Deposit successful. New balance: ${balance}.";
  } 
  
  else {
    return "Invalid input, choose withdraw or deposit.";
  }
}
 
console.log(atm(1000, "withdraw", 200))






// Personal Assistant Function

// Now let's combine everything you've learned to create a "personal assistant" function that makes smart decisions based on different inputs.

// **Your Mission:**
// Create a function called `personalAssistant` that:
// 1. Takes parameters for: time (hour), weather(sunny, rainy,cloudy), and day type(workday, weekend, holiday)
// 2. Uses conditional logic to give appropriate advice
// 3. Returns different messages based on the conditions
// 4. Handles various scenarios intelligently

// **Requirements:**
// - Use if/else statements for complex logic
// - Include at least one logical operator (&&, ||, !)
// - Use a ternary operator for simple decisions
// - Return helpful, personalized advice
// - Handle edge cases (invalid inputs)


function personalAssistant(hour, weather, dayType) {
  // Handle invalid inputs
 
  let message = "";

  // Time-based advice
  if (hour >= 6 && hour < 12) {
    message += "Good morning! ";
  } else if (hour >= 12 && hour < 18) {
    message += "Good afternoon! ";
  } else if (hour >= 18 && hour < 22) {
    message += "Good evening! ";
  } else {
    message += "It's late, you should consider resting. ";
  }

  // Weather-based advice
  if (weather === "rainy") {
    message += "Don't forget your umbrella. ";
  } else if (weather === "sunny" && hour < 17) {
    message += "Great day for a walk. ";
  } else {
    message += weather === "cloudy" ? "Might get chilly, take a jacket. " : "";
  }

  // Day type advice with logical operators
  if (dayType === "workday" && hour >= 9 && hour <= 17) {
    message += "Stay focused on work. ";
  } else if (dayType === "weekend" || dayType === "holiday") {
    message += "Relax and enjoy your free time! ";
  }

  // Quick ternary operator for lunch advice
  message += (hour === 12) ? "It's lunchtime now!" : "";

  return message.trim();
}

// Example calls
console.log(personalAssistant(17, "sunny", "workday"));
