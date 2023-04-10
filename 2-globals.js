// GLOBALS - no window

// __dirname - path to current directory
// __filename - file name
// require - function to use modules(CommonJS)
// module - info about current module (file)
// process - info about environment where the program is being executed

console.log("command __dirname: ", __dirname);
console.log("command __filename: ", __filename);

// Print hello, world every 1 second:
setInterval(() =>{
    console.log("Hello, World!");
}, 1000);

// console.log(require);
// console.log(module);
// console.log(process);

