// A method to indicate if a string exists within another string

let greeting = "Hello everyone";
greeting.includes("Hey"); //FALSE
greeting.includes("Hello"); // TRUE

// Returns TRUE or FALSE
// .includes is CASE SENSITIVE

greeting.includes("hello"); //FALSE

// Example: WORD SEARCH!

const puzzle = "WINECOFFEEDRINKSPUDDINGSPAGHETTI";
puzzle.includes("pudding"); //false
puzzle.toLowerCase().includes("pudding"); // TRUE! We first convert the string to lower case letters before checking if it includes our word.
