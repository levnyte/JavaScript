// slicing allows for you to get a subset of array data based on index values
let tysFriends = ["Jim", "James", "Paul", "Tyrone", "Erykah"];

// get the first 3 names using .slice()
let first3 = tysFriends.slice(0, 3); // gets values from indexes 0, 1, and 2
console.log(first3);

// get the last two names using .slice()
let last2 = tysFriends.slice(3, 5); // gets values from indexes 3 and 4
console.log(last2);

// get the middle 3 names using .slice()
let middle3 = tysFriends.slice(1, 4); // gets values from indexes 1, 2, and 3
console.log(middle3);

/* SORTING TIME */
console.log("--------------------------------");

let numbers = [2, 4, 1, 3, 5];
console.log("Original Array")
console.log(numbers);
// to sort values in an array, use .sort() function with an inline function
// to sort in ascending order do the following:

    // a - b = calculates a difference
    // put a-b in an inline function for sorting, it tells the type of sort
    // to do

numbersSortedAsc = numbers.sort(
    function(a, b) {
        // a is a first number
        // b is a second number
        return a - b; // tells the function to order the values where a < b
    }
);

console.log("Sorted Array (Ascending):");
console.log(numbersSortedAsc);

// to sort in descending order, do the following:
numbersSortedDsc = numbers.sort(
    function(a, b) {
        // a is a first number
        // b is a second number
        return b - a; // tells the function to order the values where b > a
    }
);

console.log("Sorted Array (Descending):");
console.log(numbersSortedDsc);

numbersSortedAscArrow = numbers.sort((a, b) => a-b);
console.log("Sorted Array (Ascending using an arrow function):");
console.log(numbersSortedAscArrow);

numbersSortedDscArrow = numbers.sort((a, b) => b-a);
console.log("Sorted Array (Descending using an arrow function):");
console.log(numbersSortedDscArrow);

// use the .reverse function
let reversedArray = numbers.reverse();
console.log(reversedArray);

/*
    In this activity you will sort, slice, and reverse the following array:
*/
console.log("-------------------------")
numArray = [9.9, 6.1, 17.1, 22.7, 4.6, 8.7, 7.2];
console.log(numArray);

// Sort the array in descending order and assign the results to a variable.
let desc = numArray.sort(
    function(a, b){
        return b-a;
    }
)
console.log(desc);

// Sort the array in ascending order using an arrow function.
let asc = numArray.sort((a, b) => a-b);
console.log(asc);

// Slice the first five elements of the sorted ascending array 
// and assign them to a variable.
let sliced = asc.slice(0, 5);
console.log(sliced);

// Reverse the array order.
let slicedReverse = sliced.reverse();
console.log(slicedReverse);