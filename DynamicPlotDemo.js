// use function to initialize x and y data
function init()
{
    let trace = {
        x: [1, 2, 3, 4, 5],
        y: [2, 4, 6, 8, 10],
        type: "bar"
    }

    let data = [trace];

    let layout = {
        title: "Sample Data"
    }

    Plotly.newPlot("plot01", data, layout);
}

// make a function that updates based on the choice of the dropdown
function updatePlot()
{
    // use D3 to select the dropdown
    let dropdown = d3.select("#chooseDataset");
    // choose the dropdown option value
    let dataset = dropdown.property("value");

    let x = [];
    let y = [];

    // set the x and y data
    if(dataset == "dataset01")
    {
        x = [1, 2, 3, 4, 5];
        y = [2, 4, 6, 8, 10];
    }
    else 
    {
        x = [1, 2, 3, 4, 5];
        y = [5, 3, 7, 2, 6];
    }

    // once the x's and y's have been set
    // use Plotly.restyle() to update the data
    Plotly.restyle("plot01", "x", [x]);
    Plotly.restyle("plot01", "y", [y]);
}

// use d3.select to apply the action
d3.select("#chooseDataset").on("change", updatePlot);

// call init
init();