// declare an array with empty contents
let myArray = [];

// add elements to the empty (or non-empty array) using .push()
myArray.push("one");
myArray.push("two");
myArray.push("three");

// display the contents
console.log(myArray);

// display the first index contents
console.log(myArray[0]);

// update the contents of an index
myArray[2] = "THREE";

console.log(myArray);

// use .slice() function to get elements from a subset of indexes
console.log(myArray.slice(1, 3)); // display two and THREE

console.log("--------------------------------------")

// JSONs are collections of key value pairs that identify properties
let city = {
    name: "Charlotte",
    state: "North Carolina",
    nickname: "The Queen City"
};

console.log(city["name"]); // displays Charlotte
console.log(city.state);    // displays North Carolina

// to add a property, add a new key
city.areacode = 704;

console.log(city);