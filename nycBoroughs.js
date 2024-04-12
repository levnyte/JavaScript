// NYC coordinates - 40.7128, -74.0059

// make a map object centered on the NYC Coordinates
let myMap = L.map("map", {
    center: [40.7128, -74.0059],
    zoom: 10
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// add ter reference to the nyc data
let nycData = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/15-Mapping-Web/nyc.geojson";

/*let mapStyle = {
    color: "black",
    fillColor: "pink",
    fillOpacity: 0.60,
    weight: 1.0
};*/

// make a function that will determine a color of a neighborhood based on its borough
function boroughColor(borough)
{
    if (borough == "Brooklyn")
        return "orange";
    else if (borough == "Bronx")
        return "blue";
    else if (borough == "Manhattan")
        return "green";
    else if (borough == "Queens")
        return "yellow";
    else
        return "pink"; // Staten Island
}

// load the NYC GeoJSON Data
d3.json(nycData).then(
   data => {
    // first, show the GeoJSON data in the console
    console.log(data);
    // next, create a GeoJSON Layer with the retrieved data that draws boundary
    // lines around the neighborhood using the polygon / geometry attribute in the
    // dataset
    //L.geoJson(data).addTo(myMap); // by default draws in blue outline
    /*L.geoJson(data, {
        style: {
            color: "black",
            fillColor: "pink",
            fillOpacity: 0.60,
            weight: 1.0
        }
    }).addTo(myMap); */
    // L.geoJson(data, {style: mapStyle}).addTo(myMap); // uses a variable / object property
    // use L.geoJson() with an inline function for the style property
    L.geoJson(data, {
        style: function(feature) {
            return {
                color: "black",
                fillColor: boroughColor(feature.properties.borough),
                fillOpacity: 0.60,
                weight: 1.0
            };
        },
        onEachFeature: function(feature, layer){
            // use this inline function to make the map interactive
            // set up mouse events - layer references the colored neighborhoods on the map
            layer.on({
                mouseover: function(event) {
                    // on a mouseover, highlight the neighbor hood by increasing opacity
                    layer.setStyle({
                        fillOpacity: 0.90
                    });
                },
                mouseout: function(event) {
                    // on a mouseout, dim the neighborhood to original opacity
                    layer.setStyle({
                        fillOpacity: 0.60
                    });
                },
                click: function(event) {
                    // make the neighborhood centered on the map
                    myMap.fitBounds(event.target.getBounds());
                }
            })
            // bind a popup that contains the neigborhood information
            layer.bindPopup("Neighborhood: " + feature.properties.neighborhood + "<br>" +
            "Borough: " + feature.properties.borough);
        }
    }).addTo(myMap);
    } 
);