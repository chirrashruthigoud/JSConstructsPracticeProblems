/*1.Write a program in the following steps
a. Generates 10 Random 3 Digit number.
b. Store this random numbers into a array.
c. Then find the 2nd largest and the 2nd smallest element without sorting the array.*/



// Generate 10 random 3-digit numbers
/*let nums = [];
for (let i = 0; i < 10; i++) {
  nums.push(Math.floor(Math.random() * 900) + 100);
}
console.log("Generated numbers:", nums);

// Find 2nd largest and 2nd smallest elements without sorting
let largest = secondLargest = smallest = secondSmallest = null;
for (let num of nums) {
  if (largest === null || num > largest) {
    secondLargest = largest;
    largest = num;
  } else if (secondLargest === null || num > secondLargest) {
    secondLargest = num;
  }
  
  if (smallest === null || num < smallest) {
    secondSmallest = smallest;
    smallest = num;
  } else if (secondSmallest === null || num < secondSmallest) {
    secondSmallest = num;
  }
}
console.log("2nd largest number:", secondLargest);
console.log("2nd smallest number:", secondSmallest);*/



/*Extend the above program to sort the array and then find the 2nd largest

and the 2nd smallest element.*/

// Generate 10 random 3-digit numbers
const numm = Array.from({length: 10}, () => Math.floor(Math.random() * 900) + 100);

// Print the array of random numbers
console.log("Random numbers:");
console.log(numm);

// Sort the array in ascending order
numm.sort((a, b) => a - b);

// Find the 2nd largest and 2nd smallest elements
const secondLargest = numm[numm.length - 2];
const secondSmallest = numm[1];

// Print the results
console.log("Second largest number: " + secondLargest);
console.log("Second smallest number: " + secondSmallest);


3. /*Extend the Prime Factorization Program to store all the Prime Factors of a

number n into an array and finally display the output.*/

function primeFactors(n) {
    const factors = [];
    let divisor = 2;
  
    while (n >= 2) {
      if (n % divisor == 0) {
        factors.push(divisor);
        n = n / divisor;
      } else {
        divisor++;
      }
    }
  
    return factors;
  }
  
  const n = 84;
  const primeFactorsArray = primeFactors(n);
  
  console.log(`Prime factors of ${n}: ${primeFactorsArray}`);


  /*5. Take a range from 0 – 100, find the digits that are repeated twice like 33, 77,

  etc and store them in an array
  */
  function findRepeatedDigits(rangeStart, rangeEnd) {
    const repeatedDigits = [];
  
    for (let i = rangeStart; i <= rangeEnd; i++) {
      const numString = i.toString();
  
      if (numString.length == 2 && numString[0] == numString[1]) {
        repeatedDigits.push(i);
      }
    }
  
    return repeatedDigits;
  }
  
  const rangeStart = 0;
  const rangeEnd = 100;
  const repeatedDigits = findRepeatedDigits(rangeStart, rangeEnd);
  
  console.log(`Digits repeated twice: ${repeatedDigits}`);

  
  /*1. Write a program in the following steps
  a. Roll a die and find the number between 1 to 6
  b. Repeat the Die roll and find the result each time
  c. Store the result in a dictionary
  d. Repeat till any one of the number has reached 10 times
  e. Find the number that reached maximum times and the one that was for
  minimum times*/

  // Initialize an empty Map to store the results
const resultCount = new Map();

// Function to roll a die and return the result
function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

// Roll the die until one of the numbers reaches 10 times
while (true) {
  // Roll the die and get the result
  const result = rollDie();

  // Update the count for the result in the Map
  if (resultCount.has(result)) {
    resultCount.set(result, resultCount.get(result) + 1);
  } else {
    resultCount.set(result, 1);
  }

  // Check if any number has reached 10 times
  const maxCount = Math.max(...resultCount.values());
  if (maxCount >= 10) {
    // Find the number that reached maximum times
    const maxResult = [...resultCount.entries()].find(([_, count]) => count === maxCount)[0];
    console.log(`The number ${maxResult} reached maximum times: ${maxCount}`);

    // Find the number that reached minimum times
    const minCount = Math.min(...resultCount.values());
    const minResult = [...resultCount.entries()].find(([_, count]) => count === minCount)[0];
    console.log(`The number ${minResult} reached minimum times: ${minCount}`);

    // Exit the loop
    break;
  }
}


/*2.Write a Program to generate a birth month of 50 individuals

between the year 92 & 93. Find all the individuals having birthdays
in the same month. Store it to finally print.*/

// Function to generate a random birth month between Jan (1) and Dec (12)
function generateBirthMonth() {
    return Math.floor(Math.random() * 12) + 1;
  }
  
  // Generate the birth month of 50 individuals between the years 1992 and 1993
  const birthMonths = [];
  for (let i = 0; i < 50; i++) {
    const birthYear = Math.floor(Math.random() * 2) + 1992;
    const birthMonth = generateBirthMonth();
    birthMonths.push({ year: birthYear, month: birthMonth });
  }
  
  // Group the individuals by birth month
  const groupedBirthMonths = {};
  birthMonths.forEach(({ year, month }) => {
    if (groupedBirthMonths[month]) {
      groupedBirthMonths[month].push(year);
    } else {
      groupedBirthMonths[month] = [year];
    }
  });
  
  // Print the individuals having birthdays in the same month
  for (const month in groupedBirthMonths) {
    const years = groupedBirthMonths[month];
    if (years.length > 1) {
      console.log(`Individuals with birthdays in month ${month}: ${years.join(', ')}`);
    }
  }
  
  
