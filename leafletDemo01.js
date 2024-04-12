// Charlotte's Coordinates = 35.2271° N, 80.8431° W

let myMap = L.map("map", {
    center: [35.2271, -80.8431],
    zoom: 13
});

// add a tile layer - map image at the coordinates
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(myMap);

// to add a marker, use L.Marker and give the marker some information
let marker = L.marker(
    [35.2271, -80.8431], {
        title: "Hello From Charlotte!"
    }
).addTo(myMap);

// bind a popup to the marker (makes it clickable)
marker.bindPopup("You clicked the Charlotte Marker!");