let choroData = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/15-Mapping-Web/ACS-ED_2014-2018_Economic_Characteristics_FL.geojson";

// florida coordinates: 27.96044, -82.30695

let myMap = L.map("map", {
    center: [27.96044, -82.30695],
    zoom: 6
});

// add the street layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

d3.json(choroData).then(
    data => {
        console.log(data);

        // make a choropleth data layer
        let choroLayer = L.choropleth(data, {
            // choose the property to create the gradients for the choropleth
                // DP03_16E - the code which indicates the estimated employed population with children aged 6–17
            valueProperty: "DP03_16E",

            // establish the range of the color scale for the choropleth 
            scale: ["#fee8c8", "#e34a33"],

            // establish the number of breaks (blocks) in the step range on the scale
            steps: 10,

            // establish a mode of "q" so that the breaks are distributed based
            // on quantiles
            mode: "q",

            // add a style attribute that will show an outline on the counties
            style: {
                // border attributes
                color: "#FFFFFF", // white border
                weight: 1.0,
                fillOpacity: 0.75
            },

            // use onEachFeature to get the name of the county and the DP03_16E data
            // then bind the info to the popups for each county in the map
            onEachFeature: function(feature, layer)
            {
                layer.bindPopup("<b>County Name</b>: " + feature.properties.NAME + "<hr>" + "<b>Est. Population with children between 6-17: </b>" + feature.properties.DP03_16E);
            }

        }).addTo(myMap);

        // set up the legend
        let legend = L.control(
            {position: "bottomright"}
        );

        // use .onAdd to add properties to the legend
        legend.onAdd = function(){
            // draw the legend onto the map by adding a div to the page dynamically
            let div = L.DomUtil.create("div", "info legend");

            // to establish the limits, reference the choropleth layer (choroLayer),
            // and use the valueProperty value to get a value named limits
            let limits = choroLayer.options.limits;

            // to establish the colors on the legend, reference the choropleth layer
            // (choroLayer) and use the scale property to get a value named colors
            let colors = choroLayer.options.colors;

            // create an empty array to hold the blocks that represent the gradients
            let labels = [];

            // adding the maximum and minimum
            let legendInfo = "<h1>Population with Children<br />(ages 6-17)</h1>" +
            "<div class=\"labels\">" +
              "<div class=\"min\">" + limits[0] + "</div>" +
              "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
            "</div>";

            // to add the legendInfo
            div.innerHTML = legendInfo;

            // make an ul of the limits
            limits.forEach(function(limit, index) {
                labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
              });

            div.innerHTML += "<ul>" + labels.join("") + "</ul>";

            // return the div so that its added to the map
            return div;
        };

        // add the legend to the map
        legend.addTo(myMap);
    }
)