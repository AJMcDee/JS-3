// Var is a way to declare a variable

var videoCreator = "Anna McDougall, follow me on Twitter";

// We can change the value of that variable later
// If you reassign a variable, you don't need to retype "var"

videoCreator = "Florin Pop";

// We can also declare a variable without giving it a value
// Multiple variables can be declared, separated with commas

var puppyName, kittyName, bunnyName;

doStuff();

puppyName = "Bob";
kittyName = "Cecilia";

// Var is function scoped, not block scoped!

function doStuff() {
  var count = 0;
  count = count + 1;
  //count === 1
}

count = count + 1; //FAIL
count++; //FAIL

// Will throw an error: 'count' cannot
// be accessed outside of the function
