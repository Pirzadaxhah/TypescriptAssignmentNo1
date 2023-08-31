const string1: string = "apple";
const string2: string = "banana";
const number1: number = 3;
const number2: number = 5;
const array: number[] = [1, 2, 3, 4, 5];

// Tests for equality and inequality with strings
console.log("Equality Test 1:", string1 === string2); // Expected: false
console.log("Inequality Test 1:", string1 !== string2); // Expected: true

// Tests using the lower case function
console.log("Lowercase Test 1:", string1.toLowerCase() === "APPLE"); // Expected: false
console.log("Lowercase Test 2:", string2.toLowerCase() !== "BANANA"); // Expected: true

// Numerical tests involving different operators
console.log("Equality Test 2:", number1 === number2); // Expected: false
console.log("Inequality Test 2:", number1 !== number2); // Expected: true
console.log("Greater Than Test:", number1 > number2); // Expected: false
console.log("Less Than Test:", number1 < number2); // Expected: true
console.log("Greater Than or Equal Test:", number1 >= number2); // Expected: false
console.log("Less Than or Equal Test:", number1 <= number2); // Expected: true

// Tests using "and" and "or" operators
console.log("AND Test 1:", number1 < 10&& number2 > 5); // Expected: false
console.log("AND Test 2:", number1 > 3 && number2 < 5); // Expected: false
console.log("OR Test 1:", number1 < 10 || number2 > 20); // Expected: true
console.log("OR Test 2:", number1 > 1 || number2 < 5); // Expected: false

// Test whether an item is in an array
console.log("Array Inclusion Test 1:", array.includes(3)); // Expected: true
console.log("Array Inclusion Test 2:", array.includes(6)); // Expected: false

// Test whether an item is not in an array
console.log("Array Exclusion Test 1:", !array.includes(6)); // Expected: true
console.log("Array Exclusion Test 2:", !array.includes(2)); // Expected: false
