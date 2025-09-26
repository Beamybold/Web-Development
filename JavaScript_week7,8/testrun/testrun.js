// Step 1: Store grades in an array
const grades = [70, 45, 88, 53, 39, 100, 67, 49];

// Step 2: Calculate average grade
const getAverage = (grades) => {
  let total = 0;
  grades.forEach(grade => total += grade);
  const average = total / grades.length;
  console.log(`📊 Average grade is: ${average}`);
};

// Step 3: Find highest grade
const getHighest = (grades) => {
  let highest = grades[0];
  grades.forEach(grade => {
    if (grade > highest) highest = grade;
  });
  console.log(`🏆 Highest grade is: ${highest}`);
};

// Step 4: Find lowest grade
const getLowest = (grades) => {
  let lowest = grades[0];
  grades.forEach(grade => {
    if (grade < lowest) lowest = grade;
  });
  console.log(`🔻 Lowest grade is: ${lowest}`);
};

// Step 5: Calculate pass rate (grades ≥ 50)
const getPassRate = (grades) => {
  let passCount = 0;
  grades.forEach(grade => {
    if (grade >= 50) passCount++;
  });
  const passRate = (passCount / grades.length) * 100;
  console.log(`✅ Pass rate is: ${passRate}%`);
};

// Run all functions
getAverage(grades);
getHighest(grades);
getLowest(grades);
getPassRate(grades);
