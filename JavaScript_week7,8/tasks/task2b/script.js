//Task 6
// 1. isStrongPassword(password)
// Checks if a password is strong.


// function isStrongPassword(password) {
//   const hasNumber = /\d/.test(password);
//   const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
//   const isLongEnough = password.length >= 8;

//   return isLongEnough && hasNumber && hasSpecialChar;
// }



// 2. formatPercentage(value)
// Formats a number as a percentage with one decimal place.
// function formatPercentage(value) {
//   return value.toFixed(1) + "%";
// }



// 3. calculateCompoundInterest(principal, rate, years)
// Calculates compound interest using the formula: ...formula.
// function calculateCompoundInterest(principal, rate, years) {
//   const amount = principal * Math.pow(1 + rate, years);
//   return parseFloat(amount.toFixed(2));
// }


// 4. canGraduate(credits, gpa)
// Checks if a student meets graduation requirements.

// function canGraduate(credits, gpa) {
//   return credits >= 120 && gpa >= 2.0;
// }


// 5. reverseWords(sentence)
// Reverses the words and capitalizes the first letter of each word.
// function reverseWords(sentence) {
//   return sentence
//     .split(" ")
//     .reverse()
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }


// console.log(isStrongPassword("Hello123!"));           // true
// console.log(formatPercentage(87.456));                // "87.5%"
// console.log(calculateCompoundInterest(1000, 0.05, 3)); // 1157.63
// console.log(canGraduate(130, 2.5));                   // true
// console.log(reverseWords("hello world from javascript")); // "Javascript From World Hello"



function isStrongPassword(password) {
  const hasNumber = /\d/.test(password); // checks for a number
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password); // checks for special character
  const isLongEnough = password.length >= 8; // checks length

  return isLongEnough && hasNumber && hasSpecialChar;
}
console.log(isStrongPassword("Hello123!")); // true
console.log(isStrongPassword("short"));     // false


function formatPercentage(value) {
  return value.toFixed(1) + "%";
}
console.log(formatPercentage(87.456)); // "87.5%"

𝐴=𝑃×(1+𝑟)𝑡
Where:

P = starting money (principal)

r = interest rate (like 0.05 for 5%)

t = number of years

function calculateCompoundInterest(principal, rate, years) {
  const amount = principal * Math.pow(1 + rate, years);
  return parseFloat(amount.toFixed(2));
}
console.log(calculateCompoundInterest(1000, 0.05, 3)); // 1157.63

4. canGraduate(credits, gpa)
Goal: Decide if a student can graduate.

Rules:

Must have at least 120 credits

Must have GPA of 2.0 or more

function canGraduate(credits, gpa) {
  return credits >= 120 && gpa >= 2.0;
}
console.log(canGraduate(130, 2.5)); // true
console.log(canGraduate(100, 2.5)); // false


function reverseWords(sentence) {
  return sentence
    .split(" ") // turn sentence into words
    .reverse()  // reverse the order
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize
    .join(" "); // join back into a sentence
}


//7. 

// 1. Product Calculator
function calculateProductTotal(price, quantity, discount) {
  if (price < 0 || quantity < 0 || discount < 0 || discount > 100) {
    return "Invalid product input";
  }
  let subtotal = price * quantity;
  let discountAmount = subtotal * (discount / 100);
  let total = subtotal - discountAmount;
  return total;
}

// 2. Tax Calculator
function calculateTax(total, location) {
  let taxRate = 0;
  if (location === "NY") {
    taxRate = 0.08875;
  } else if (location === "CA") {
    taxRate = 0.0725;
  } else if (location === "TX") {
    taxRate = 0.0625;
  } else {
    taxRate = 0.05;
  }
  return total * taxRate;
}

// 3. Shipping Calculator
function calculateShipping(weight, distance) {
  if (weight <= 0 || distance <= 0) {
    return "Invalid shipping input";
  }
  let baseRate = 5;
  let weightRate = 0.1 * weight;
  let distanceRate = 0.05 * distance;
  return baseRate + weightRate + distanceRate;
}

// 4. Membership Discount
function applyMembershipDiscount(total, level) {
  let discount = 0;
  if (level === "Gold") {
    discount = 15;
  } else if (level === "Silver") {
    discount = 10;
  } else if (level === "Bronze") {
    discount = 5;
  }
  return total - (total * discount / 100);
}

// 5. Final Receipt Generator
function generateReceipt(price, quantity, discount, location, weight, distance, level) {
  let productTotal = calculateProductTotal(price, quantity, discount);
  if (typeof productTotal === "string") return productTotal;

  let tax = calculateTax(productTotal, location);
  let shipping = calculateShipping(weight, distance);
  if (typeof shipping === "string") return shipping;

  let preDiscountTotal = productTotal + tax + shipping;
  let finalTotal = applyMembershipDiscount(preDiscountTotal, level);

  // Ternary operator for shipping note
  let shippingNote = (level === "Gold" && preDiscountTotal > 100) ? "Free shipping applied!" : "Standard shipping applied.";

  // Final receipt
  let receipt = `
  🧾 Final Receipt
  ----------------------------
  Item Total:        $${productTotal.toFixed(2)}
  Tax (${location}): $${tax.toFixed(2)}
  Shipping:          $${shipping.toFixed(2)}
  Membership:        ${level}
  ----------------------------
  Total Before Discount: $${preDiscountTotal.toFixed(2)}
  Final Total:            $${finalTotal.toFixed(2)}
  Note: ${shippingNote}
  `;
  return receipt;
}

// Example usage
console.log(generateReceipt(50, 3, 10, "CA", 2.5, 100, "Gold"));
