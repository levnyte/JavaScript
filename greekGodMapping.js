// use console.log to check to see if the data is there
console.log(searchResults);

// get the greek god names 

/*
    let greekNames = [];

    for (var i = 0; i < searchResults.length; i++)
    {
        greekNames.push(searchResults.greekName)
    }
*/

// use MAPPING!!
let greekNames00 = searchResults.map(
    function(result){
        return result.greekName;
    }
);

// more streamlined!!
let greekNames = searchResults.map(result => result.greekName);
let greekSearchResults = searchResults.map(result => result.greekSearchResults);

// trace data
let trace01 = {
    x: greekNames,
    y: greekSearchResults,
    type: "bar"
}

// put the trace data into an array
let data01 = [trace01];

// add layout information
let layout01 = {
    title: "Greek God Search Results"
}

// call Plotly.newPlot and plot to an id
Plotly.newPlot("plot01", data01, layout01);

/* 
Create a custom function to return Roman gods with more than 100 million search results.
*/

function over100Million(roman)
{
    // check the roman search results property
    return roman.romanSearchResults > 100000000;
}

/*
Create an array of Roman god names from the filtered data.
*/

let poppinRomans = searchResults.filter(over100Million);
let popularRomanNames = poppinRomans.map(roman => roman.romanName);

//Create an array of Roman god search results from the filtered data.
let popularRomanSearchResults = poppinRomans.map(
    roman => roman.romanSearchResults);

/*
Create a Plotly bar chart with names on the x-axis and search results on the y-axis. 
*/

let trace02 = {
    x: popularRomanNames,
    y: popularRomanSearchResults,
    type: "bar"
};

let data02 = [trace02];

let layout02 = {
    title: "Roman Gods with over 100 Million Search Results"
}

// plot to the new id
Plotly.newPlot("plot02", data02, layout02);


//Sort the data by Greek search results in descending order.
let greekSorted = searchResults.sort(
    (a, b) => b.greekSearchResults-a.greekSearchResults
);

//Slice the first 10 objects of the array for the plot.
let greekSliced = greekSorted.slice(0, 10);

//Reverse the array to compensate for Plotly's horizontal bar chart defaults.
greekSliced.reverse();

//Create a Plotly bar chart with names on the x-axis 
// and search results on the y-axis.
slicedGreekNames = greekSliced.map(greek => greek.greekName);
slicedGreekSearchResults = greekSliced.map(greek => greek.greekSearchResults);

// set up trace
let trace03 = {
    x: slicedGreekSearchResults,
    y: slicedGreekNames,
    text: slicedGreekNames,
    name: "Greek Name",
    type: "bar",
    orientation: "h"
};

// data array
let data03 = [trace03];

// layout information
let layout03 = {
    title: "Horizontal Bar Chart of Greek God Search Results",
    l: 100,
    r: 100,
    t: 100,
    b: 100
}

Plotly.newPlot("plot03", data03, layout03);