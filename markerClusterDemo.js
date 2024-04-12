// Creating the map object
let myMap = L.map("map", {
    center: [40.7, -73.95],
    zoom: 11
  });
  
// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Store the API query variables.
// For docs, refer to https://dev.socrata.com/docs/queries/where.html.
// And, refer to https://dev.socrata.com/foundry/data.cityofnewyork.us/erm2-nwe9.
let baseURL = "https://data.cityofnewyork.us/resource/fhrw-4uyv.json?";
let date = "$where=created_date between'2016-01-01T00:00:00' and '2017-01-01T00:00:00'";
let complaint = "&complaint_type=Rodent";
let limit = "&$limit=10000";

// Assemble the API query URL.
let url = baseURL + date + complaint + limit;

// retrieve data using D3
d3.json(url).then(
    data => {

        console.log(data);
        
        // make a marker cluster group
        let markers = L.markerClusterGroup();

        // loop through the array of results
        for (let i = 0; i < data.length; i++)
        {
            // set the location property to a variable
            let location = data[i].location;

            // set the incident address to a variable
            let address = data[i].incident_address;

            // check to see if the location is not empty
            if(location)
            {
                // if the location is not empty, make a marker and then add it
                // to the marker cluster group
                let marker = L.marker([location.coordinates[1], location.coordinates[0]]).bindPopup(
                    '<b>Address: </b>' + address + '<br>'+
                    '<b>Incident Type: </b>'+ data[i].descriptor
                );
                // use the addLayer property to add the point to the marker cluster
                // group
                // use .bindPopup to add information about the type of incident
                // as well as the address
                markers.addLayer(marker);
            }
        }

        // add the marker cluster group to the map
        myMap.addLayer(markers);
    }
);