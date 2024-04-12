// variables in JS are very similar to python
// python - name = "Dr. A"
// use var or let to declare a variable
let myName = "Dr. A";

// output the name to the console
console.log(`Hello ${myName}!`);

// numerical data
var monthNum = 12;
var dayNum = 14;
var yearNum = 2023;

// output today's date to the console
console.log(`Today is ${monthNum}/${dayNum}/${yearNum}`)

// declare a constant - value that does not change
const NUMDAYSINWEEK = 7;

//NUMDAYSINWEEK = 8; // produces Uncaught TypeError: Assignment to constant variable.

// JS Objects - aka JSONs resemble Python Dictionaries
let inky = {
    name: "Inky",
    color: "Blue"
};

let pinky = {
    name: "Pinky",
    color: "pink"
};

let blinky = {
    name: "Blinky",
    color: "Red"
};

let clyde = {
    name: "Clyde",
    color: "Orange"
};

console.log(inky);

// make an array
let ghosts = [inky, pinky, blinky, clyde];

console.log(ghosts);