//Task 6
// 1. Creating a validation function isStrongPassword(passsword) 
function isStrongPassword(password) {
  const hasNumber = /\d/.test(password); // checks for a number
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password); // checks for special character
  const isLongEnough = password.length >= 8; // checks length

  return isLongEnough && hasNumber && hasSpecialChar;
}
console.log(isStrongPassword("Adebimpe@23!")); 
console.log(isStrongPassword("short"));    

//2. Formatter function that alway shows 1dp with %
function formatPercentage(value) {
  return value.toFixed(1) + "%";
}
console.log(formatPercentage(96.456)); 


//3. Calculator function calculateCompoundInterest(principal, rate, years)
// A = Px(1 + r)^t
function calculateCompoundInterest(principal, rate, years) {   //Using the formular A = Px(1 + r)^t
  let amount = principal *(1 + rate/100)**years;
  return Number(amount.toFixed(2));
}
console.log(calculateCompoundInterest(2000, 5, 4)); 

//4. A decision maker function canGraduate(credits, gpa) that checks if a student meets graduation requirements.
function canGraduate(credits, gpa) {
  return credits >= 120 && gpa >= 2.0;
}
console.log(canGraduate(190, 4.5)); // true
console.log(canGraduate(150, 1.5)); // false


//5. A utility function reverseWords(sentence) that takes a string and returns the sentence with the words reversed.
function reverseWords(sentence) {
  return sentence.split(" ").reverse().map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
 
  // split turns sentence into words
  //reverse reverses the words order
  // join back into a sentence
  // map to transform the world and capitalize each words
  //word,chaAt(0) - get the first char of the string
}
console.log(reverseWords("I like apple")); 


// //7. Smart Shopping Calculator

// // 1. Product Calculator 
function calculateProductTotal(price, quantity, discount) {
  if (price < 0 || quantity < 0 || discount < 0 || discount > 100) {
    return "Invalid product input";
  }
  let subtotal = price * quantity;
  let discountAmount = subtotal * (discount / 100);
  let total = subtotal - discountAmount;
  return total;
}
console.log(calculateProductTotal(1000, 2, 0.1))

// // 2. Tax Calculator
function calculateTax(total, location) {
  let taxRate = 0;
  if (location === "OG") {
    taxRate = 0.075;
  } else if (location === "ABJ") {
    taxRate = 0.08;
  } else if (location === "IB") {
    taxRate = 0.09;
  } else {
    taxRate = 0.05;
  }
  return total * taxRate;
}
console.log(calculateTax(10000, "OS"))

// // 3. Shipping Calculator
function calculateShipping(weight, distance) {
  if (weight <= 0 || distance <= 0) {
    return "Invalid shipping input";
  }
  let baseFee = 5; //starting cost
  let weightFee = 0.1 * weight; //cost per kg
  let distanceFee = 0.05 * distance; //cost per km
  return baseFee + weightFee + distanceFee;
}
console.log(calculateShipping(100, 200))


// // 4. Membership Discount
function applyMembershipDiscount(total, level) {
  let discount = 0;
  if (level === "Gold") {
    discount = 0.15;
  } else if (level === "Silver") {
    discount = 0.10;
  } else if (level === "Bronze") {
    discount = 0.05;
  }
  return total - (total * discount);
}
console.log(applyMembershipDiscount(1000, "Silver"))

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
  \n----------------------------
          \n\t\tFinal Receipt
  \n----------------------------
  \nItem Total:        $${productTotal.toFixed(2)}
  \nTax (${location}): \t\t\t$${tax.toFixed(2)}
 \n Shipping:          $${shipping.toFixed(2)}
  \nMembership:        \t${level}
  \n-------------------------------
  \nTotal Before Discount: $${preDiscountTotal.toFixed(2)}
  \nFinal Total:            $${finalTotal.toFixed(2)}
  \nNote: ${shippingNote}
  `;
  return receipt;
}


console.log(generateReceipt(500, 5, 10, "IB", 1.5, 100, "Gold"));
