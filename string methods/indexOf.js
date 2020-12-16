// To use indices to reference items, pull them out of strings, etc.
// we first need to know what index they're at!
// ENTER .INDEXOF

const name = "Anna Jean McDougall";

let gSpot = name.indexOf("g");
name[gSpot] = "d";

// Case sensitive!
// If an item can't be found, it returns -1

name.indexOf("p"); // Returns -1

// Optional 2nd parameter tells it what index to start searching from

name.indexOf("a", 4); // Returns 7
