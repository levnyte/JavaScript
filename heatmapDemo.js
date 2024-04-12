let myMap = L.map("map", {
    center: [-32.8, 117.9],
    zoom: 7
  });
  
// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

let dataPoints = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/15-Mapping-Web/Water_Hydrant_WCORP_070_WA_GDA2020_Public.geojson";

d3.json(dataPoints).then(
    data => {
        console.log(data);
        // draw the markers on to the map
        let features = data.features;

        // make an array to hold the data points
        let heatArray = [];

        for (i = 0; i < features.length; i++)
        {
            let hydrantLocation = features[i].geometry;
            if (hydrantLocation)
            {
                // if the hydrant location is not empty, plot a marker
                /*L.marker(
                    [hydrantLocation.coordinates[1], hydrantLocation.coordinates[0]]
                ).addTo(myMap);
                */
               // push the point into the array
               heatArray.push([hydrantLocation.coordinates[1], hydrantLocation.coordinates[0]]);
            }
        }

        // make the heatmap
        let heatmap = L.heatLayer(heatArray, {
            radius: 50,
            blur: 35
        }).addTo(myMap);
    }
);