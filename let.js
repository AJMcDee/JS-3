// Let is a way to declare a variable

let theBook = "Clean Code";
let favNum = 7;
let arrayOfValues = [1, 2, 3, 4];

// We can change the value of that variable later
// If you reassign a variable, you don't need to retype "let"

favNum = 3;

// We can also declare a variable without giving it a value
// Multiple variables can be declared, separated with commas
let pants, shirt, socks;

pants = "Jeans";
shirt = "Blouse";
socks = "Warm winter socks";

// We can only access that variable within the scope in which it was created

{
  let count = 3;
}

console.log(count);

// Won't work, because 'count' is declared within
// the 'world' of the curly brackets (its scope)
