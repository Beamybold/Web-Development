 if (typeof hour !== "number" || hour < 0 || hour > 23) {
    return "Invalid hour! Please enter a number between 0 and 23.";
  }
  if (!["sunny", "rainy", "cloudy"].includes(weather)) {
    return "Invalid weather! Choose sunny, rainy, or cloudy.";
  }
  if (!["workday", "weekend", "holiday"].includes(dayType)) {
    return "Invalid day type! Choose workday, weekend, or holiday.";
  }



console.log(personalAssistant(20, "rainy", "weekend"));
console.log(personalAssistant(12, "cloudy", "holiday"));