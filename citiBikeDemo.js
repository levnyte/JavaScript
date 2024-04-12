// load the API Data
let citiBikeURL = "https://gbfs.citibikenyc.com/gbfs/en/station_information.json";

d3.json(citiBikeURL).then(
    data => {
        //console.log(data);

        // get the stations property from the data
        let stations = data.data.stations; // first data comes from the promise, then second data is the object property
        console.log(stations);

        // make the array to hod themarkers for teh stations
        let stationMarkers = [];

        // loop through the stations and get the marker info, bind popup, and add to the array of
        // station markers
        for (var i = 0; i < stations.length; i++)
        {
            // set the current station 
            let currentStation = stations[i];

            let bikeStationMarker = L.marker([currentStation.lat, currentStation.lon])
            .bindPopup("<b>Station Name: </b> " + currentStation.name + "<br>" +
            "<b>Capacity: </b>" + currentStation.capacity);

            // add the marker to the array
            stationMarkers.push(bikeStationMarker);
        }

        // after the loop and populate the array of station markers, make a layer group
        let bikeStations = L.layerGroup(stationMarkers);

        // then start building the map
        // make the tile layers
        let tile01 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });

        let tile02 = L.tileLayer('https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png', {
            attribution: 'Map <a href="https://memomaps.de/">memomaps.de</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });

        // make an object with our base maps
        let baseMaps = {
            "Street 01": tile01,
            "Street 02": tile02
        };

        // make an object for the overlays (marker layer)
        let overlayMaps = {
            "Bike Stations": bikeStations
        };

        let myMap = L.map("map", {
            center: [40.73, -74.0059],
            zoom: 10,
            layers: [tile01, bikeStations]
        });

        // make the layer control
        L.control.layers(baseMaps, overlayMaps, {
            collapsed: false
        }).addTo(myMap);
    }
)