//1. Simple Grading System  


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
   let score =  number(prompt("What is your score: "))
    
    //Use if/else if statements to assign grades
    if (score === 100){
        console.log (`Outstanding! Grade: A+`); //condition for a perfect scores (100) that returns `"Outstanding! Grade: A+"`
    }else if (score > 90 && score === 99){
        console.log (`Score: ${score} -> Grade: A`);
    }else if (score >= 80 && score === 89){
        console.log (`Score: ${score} -> Grade: B`);
    }else if (score >= 70 && score === 79){
        console.log (`Score: ${score} -> Grade: C`);
    }else if (score >= 60 && score === 69){
        console.log (`Score: ${score} -> Grade: D`);
    }else  if (score < 60) {
        console.log (`Score: ${score} -> Grade: F`);
    }else {
      console.log("Invalid score");
    } 
}


// //2.  Discount Calculator  

// // **Requirements:**  
// // 1. Write a function `calculatePrice(price, customerType, isFirstPurchase)`  
// // 2. Apply discounts:  
// //    - Student → 10%  
// //    - Senior → 15%  
// //    - Employee → 20%  
// // 3. If `isFirstPurchase` is true, add an extra 5% discount  
// // 4. Return the final price (rounded to 2 decimals)  

// // **Challenge:** Print a full receipt showing original price, discount percent, and final price.




// Function that calculates discounts
function calculateDiscount() {
  let price =  number(prompt("Enter price: "));
  let customerType = String(prompt(`Are you a : \n1. Student \n2. Senior \n3. Employee`));
  let isFirstPurchase = String(prompt(`Is this your first purchase? \n1. Yes \n2. No`));
    let discount = 0;
    if (customerType === "1") {
        discount = 0.10; // 10% discount
        console.log("Your discount is 10%");
    } else if (customerType === "2") {
        discount = 0.15; // 15% discount
        console.log("Your discount is 15%");

    } else if (customerType === "3") {
        discount = 0.20; // 20% discount
        console.log("Your discount is 20%");

    }else{
      console.log("Invalid input");
    }
    
    // Additional discount for first-time customers
    if (isFirstPurchase === "1")  {
        discount += 0.05; // Extra 5%
        console.log("This is your first purchase! You have an extra 5%")
    }else {
      console.log("Thanks for your patronage")
    }

    //a full receipt showing original price, discount percent, and final price.

let finalPrice = price * (1 - discount); //To calculate final price after discount
console.log (`\n
        originalPrice: ${price},
        discountPercent: ${discount.toFixed(2) * 100},
        finalPrice: ${finalPrice.toFixed(2)}`)
    console.log(`You are paying ${finalPrice}`)
}




// // **Task:** Weather Advisor  

// // **Requirements:**  
// // 1. Write a function `weatherAdvice(temperature, isRaining)`  
// // 2. Use if/else if to return advice:  
// //    - < 32 and raining → "Freezing rain! Stay inside!"  
// //    - < 32 → "Very cold, wear a heavy coat."  
// //    - 32–60 → "Chilly, bring a jacket."  
// //    - 60–80 → "Nice weather!"  
// //    - `>` 80 → "It's hot, stay hydrated!"  
// // 3. Return the advice as a string  

// // **Challenge:** Add a ternary operator for quick advice like:  
// //    `"Bring an umbrella"` if raining, otherwise `"No umbrella needed"`.



// // Function that gives weather advice
function weatherAdvice() {
    let temperature = Number(prompt("Enter temperature: "));let isRaining = String(prompt(`Is it raining? \n1. Yes \n2. No`));
    let advice = ""
 
//Using if/else if to return advice
if (temperature < 32 && isRaining === "1") {
    console.log("Freezing rain! Stay inside!");
} else if (temperature < 32 ) {
    advice = "Very cold! Wear a heavy coat!";
} else if (temperature >= 32 && temperature <= 60 && isRaining === "2" ) {
    console.log("Chilly, bring a jacket.");
} else if (temperature > 60 && temperature <= 80) {
    console.log("Nice weather!");
} else if (temperature > 80 && isRaining === "2") {
    console.log("It's hot, stay hydrated!");
} else {
    console.log("It's warm! T-shirt weather!");
}


//Adding a tenary operator
advice += "" + (isRaining = advice ? "Bring an umbrella" : "No umbrella needed");
if (isRaining == true) {
    console.log(advice==true);
}else {
    console.log(advice==false)
}
}

console.log(advice(85, true))
console.log(weatherAdvice(35, true))
console.log(weatherAdvice(78, false))





// // ATM Simulation  

// // **Requirements:**  
// // 1. Create a function `atm(balance, action, amount)`  
// // 2. If action is `"withdraw"`, check if balance is enough:  
// //    - If yes, subtract amount and return new balance  
// //    - If no, return `"Insufficient funds"`  
// // 3. If action is `"deposit"`, add amount to balance and return new balance  
// // 4. Use clear messages in template literals  

// // **Challenge:** Add a condition that blocks withdrawals over 500 at once.

// //function for ATM withdrawal
function atm() {
 let balance = 1000;
 let action = String(prompt(`Select: \n1. Withdraw \n2. Deposit `));
 let amount = Number(prompt("Enter the amount: "))
 
   

  if (action === "1") { //To check the condition if action is withdraw
    if (amount > 500) { //condition to block withdrawal over 500 at once
      console.log("Withdrawal blocked: You have exceeded the withdrawal amount."); 
    } else if (amount > balance) { 
      console.log(`Insufficient funds. Your balance is ${balance}`);
    } else {
      balance -= amount;
      console.log(`Withdrawal successful. New balance: ${balance}`);
    }
  } 
  
  else if (action === "2") { //condition for deposit
    balance += amount;
    console.log(`Deposit successful. New balance: ${balance}.`);
  } 
  
  else {
    console.log(`Invalid input, choose withdraw or deposit.`);
  }
}
 






// // Personal Assistant Function

// // Now let's combine everything you've learned to create a "personal assistant" function that makes smart decisions based on different inputs.

// // **Your Mission:**
// // Create a function called `personalAssistant` that:
// // 1. Takes parameters for: time (hour), weather(sunny, rainy,cloudy), and day type(workday, weekend, holiday)
// // 2. Uses conditional logic to give appropriate advice
// // 3. Returns different messages based on the conditions
// // 4. Handles various scenarios intelligently

// // **Requirements:**
// // - Use if/else statements for complex logic
// // - Include at least one logical operator (&&, ||, !)
// // - Use a ternary operator for simple decisions
// // - Return helpful, personalized advice
// // - Handle edge cases (invalid inputs)


function personalAssistant() {
    let hour = Number(prompt(`Enter the current hour (24hours): `))
     let weather = String(prompt(`Select the appropiate weather: \n1. Sunny \n2. Raining \n3. Cloudy`))
     let dayType = String(prompt(`Select the appropriate: \n1. Workday \n2. Weekend \n3. Holiday`))
 

  // Handle invalid inputs
   if (typeof hour !== "number" || hour < 0 || hour > 23) {
    console.log("Invalid input! Please enter a number between 0 and 23.");
  }
  if (!["1", "2", "3"].includes(weather)) {
    console.log("Invalid weather! Choose sunny, rainy, or cloudy.");
  }
  if (!["1", "2", "3"].includes(dayType)) {
    console.log("Invalid day type! Choose workday, weekend, or holiday.");
  }
 
  let message = "";

  // Time-based advice
  if (hour >= 6 && hour < 12) {
    console.log(`${message += "Good morning!"}`);
  } else if (hour >= 12 && hour < 18) {
    console.log(`${message += "Good afternoon! "}`);
  } else if (hour >= 18 && hour < 22) {
    console.log(`${message += "Good evening! "}`);
  } else {
    console.log(`${message += "It's late, you should consider resting."}`);
  }


 

  // Weather-based advice
  if (weather === "1") {
    console.log(`${message += "Don't forget your umbrella. "}`); 
  } else if (weather === "2" && hour < 17) {
    console.log(`${message += "Great day for a walk. "}`) ;
  } else {
    console.log(`${message += weather === "3" ? "Might get chilly, take a jacket. " : "" }`);
  }

 
  // Day type advice with logical operators
  if (dayType === "workday" && hour >= 9 && hour <= 17) {
    console.log(`${message += "Stay focused on work. "}`);
  } else if (dayType === "weekend" || dayType === "holiday") {
    console.log(`${message += "Enjoy your free time! "}`);
  }

  // Quick ternary operator for lunch advice
  console.log(`${message += (hour === 12) ? "It's lunchtime now!" : "It is not yet lunchtime"}`);

//   return message.trim();
}

// Example calls
// console.log(personalAssistant(17, "sunny", "workday"));
