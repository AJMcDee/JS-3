// Cannot be redefined

const DOB = "01.01.1961"; // Date of birth doesn't change, so this information can be put in a constant

// Block scoped

{
  const dogsName = "Fido";
}

console.log(dogsName); // Will log "undefined" because 'dogsName' can only be accessed within the 'world'(scope) of the curly brackets

// When a value won't be changed within its scope
// e.g. in loops, if statements, etc. where you only need to use the constant briefly
