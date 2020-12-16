// Gives us the final index where a string can be found in another string

let sentence =
  "JavaScript is great because JavaScript allows us to write JavaScript programmes... in JavaScript!";

let lastIndexJavaScript = sentence.lastIndexOf("JavaScript"); // Returns 86: the last index where "JavaScript is found"
console.log(lastIndexJavaScript);

sentence[lastIndexJavaScript] = "L";

//  "JavaScript is great because JavaScript allows us to write JavaScript programmes... in LavaScript!";
