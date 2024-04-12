// D3 - Data Driven Documents
/*
    1. Connect the APIs / external files such as JSONs and CSVs
        - Must be served across a connection (localhost or www)
        - If not, a CORS error is produced (Cross-Origin References)
    2. Get information from tags / ids in the HTML
    3. Add information to tags / ids in HTML
    4. Make pages interactive by handling events
 */

    // When connecting to an API, use D3 to fulfill a promise
        // A promise is similar to request in Python
        // You connect to a data source, then use an internal function to fulfill
            // the promise (do something with the data)

d3.json("https://api.spacexdata.com/v4/launchpads").then(
    function(data)
    {
        // if data is received, we can display its contents to the console
        console.log(data);
    }
);

// store the url for the API as a variable
let roadster = "https://api.spacexdata.com/v4/roadster";

d3.json(roadster).then(data => console.log(data));

// store the url for the capsules endpoint as a constant
const capsules = "https://api.spacexdata.com/v4/capsules"

d3.json(capsules).then(data => console.log(data));

let fitnessFile = "fitnessData.json";

d3.json(fitnessFile).then(
    data => {
        console.log(data);
        // use mapping to get the names of the activities
        activityList = data.map(activityObj => activityObj["activity"])
        calorieList = data.map(activityObj => activityObj["calories burned per hour"])

        console.log(activityList);
        console.log(calorieList);      
    }
)