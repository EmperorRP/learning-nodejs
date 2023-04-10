const num1 = 5;
const num2 = 10;

function addValues() {
  console.log(`Sum is ${num1 + num2}`);
}

addValues();

// Since I am calling addValues() right here in this module, 
// when I mention it in a require statement in another file, that 
// file automatically calls this function first and executes it
