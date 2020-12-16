// Takes a section out of a string
// Doesn't change the original string

let greeting = "Hi Bob Jones";
let person = greeting.slice(3);
console.log(person); // Bob Jones

// Two parameters: start index and end index
// End index can be a negative number

let firstName = greeting.slice(3, 6); // Bob

// Task: Capitalise first letter only

let userInput = "annA";

let firstLetter = userInput.slice(0, 1).toUpperCase();
let restOfName = userInput.toLowerCase();

let finalName = firstLetter + restOfName;

console.log(finalName);
