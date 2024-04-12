// to set up our plot using plotly, do the following:

// 1. make an object that will hold the trace data (your x and y data)
let trace = {
    x: xValues,
    y: yValues
}

// 2. put the trace data into an array
let data = [trace];

// 3. set the layout info for the plot
let layout = {
    title: "A plotly plot"
}

// 4. call Plotly.newPlot() and pass in the id for the plot, the data, and layout
// info
Plotly.newPlot("plot", data, layout);