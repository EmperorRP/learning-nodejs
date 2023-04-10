// Modules - encapsulated code
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative_syntax");
const mind = require("./7-mind-grenade"); // Function called even if not mentioned right here read more in ./7-mind-grenade

console.log(data);

sayHi(names.abhinav);
sayHi(names.rahul);

console.log(names);
console.log(sayHi);

// sayHi("Susan");
// sayHi(rahul);
// sayHi(abhinav);
