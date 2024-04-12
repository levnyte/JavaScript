/*
    python function definition
    def hello():
        print("Hello There")
*/

// to define a function in JS
function hello()
{
    console.log("The hello() function was called!");
}

// call the hello() function
hello();

// function that takes a value and multiplies times two
function timesTwo(num)
{
    return num * 2;
}

let doubleValue = timesTwo(2);

console.log(doubleValue);

// built in functions in JS
// use .floor() to round a value down
let longNum = 12.3456789;
let roundedNum = Math.floor(longNum);
console.log(`${longNum}`)
console.log(`${roundedNum}`)