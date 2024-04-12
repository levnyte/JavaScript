// array of books
let books = ["Why I am Afraid of Bees", "The Cuckoo Clock of Doom",
"It Came from Beneath the Sink"];

// array holding the number of times Dr. A read those books
let timesRead = [5, 3, 10];

// set up the plotly plot
// set up the trace info
let trace = {
    x: books,
    y: timesRead,
    type: 'bar'
}

// set up the data list of traces
let data = [trace];

// set up the layout 
let layout = {
    title: "Dr. A's Children's Thriller Book Reads"
}

// call on Plotly
Plotly.newPlot("plot", data, layout);