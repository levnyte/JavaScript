// GOAL: Make a clustered column chart of Greek vs Roman search results from
// data.js

// arrays to hold data
let pairNames = [] // hold the 'pair' value
let greekNames = [] // hold the 'greekName' value
let romanNames = [] // hold the 'romanName' value
let gSearchResults = [] // hold the 'greekSearchResults' value
let rSearchResults = [] // hold the 'romanSearchResults' value

for (var i = 0; i < searchResults.length; i++)
{
    // store the JSON from the index in a variable
    let entry = searchResults[i];
    pairNames.push(entry.pair);
    greekNames.push(entry.greekName);
    romanNames.push(entry.romanName);
    gSearchResults.push(entry.greekSearchResults);
    rSearchResults.push(entry.romanSearchResults);
}

// set up the Greek trace
let greekTrace = {
    x: pairNames,
    y: gSearchResults,
    text: greekNames,
    name: "Greek",
    type: "bar"
}

// set up the Roman trace
let romanTrace = {
    x: pairNames,
    y: rSearchResults,
    text: romanNames,
    name: "Roman",
    type: "bar"
}

// data array
let data = [greekTrace, romanTrace]

// add some layout features
let layout = {
    title: "Greek vs. Roman Search Results",
    barmode: "group",
    margin: {
        l: 50,
        r: 50,
        b: 200,
        t: 50,
        pad: 4
    }
}

Plotly.newPlot("plot", data, layout);