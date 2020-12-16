// We can access specific characters in a string in two ways.

const name = "Anna McDougall";

// Option 1: charAt method

name.charAt(2); // === "n"
name.charAt(0); // === "A"

// Option 2: Bracket notation []

name[2]; // === "n"
name[0]; // === "A"
name[4]; // === " "
name[2 + 1]; // same as name[3] === "a"  // We can do mathematical equations inside the brackets if we want
