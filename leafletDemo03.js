// Charlotte's Coordinates = 35.2271° N, 80.8431° W

/*
let myMap = L.Map("map", {
    center: [35.2271, -80.8431],
    zoom: 13
});
*/
let myMap = L.map("map").setView([45.52, -122.67], 12);

// add a tile layer - map image at the coordinates
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(myMap);

// to add a marker, use L.Marker and give the marker some information
let marker = L.marker(
    [45.52, -122.67], {
        title: "Hello from Portland!"
    }
).addTo(myMap);

// bind a popup to the marker (makes it clickable)
marker.bindPopup("You clicked the Portland Marker!");

// Create a circle, and pass in some initial options.
L.circle([45.52, -122.69], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.75,
    radius: 500
  }).addTo(myMap);

  // Create a Polygon, and pass in some initial options.
L.polygon([
    [45.54, -122.68],
    [45.55, -122.68],
    [45.55, -122.66]
  ], {
    color: "yellow",
    fillColor: "yellow",
    fillOpacity: 0.75
  }).addTo(myMap);

  // The coordinates for each point to use in the polyline
let line = [
    [45.51, -122.68],
    [45.50, -122.60],
    [45.48, -122.70],
    [45.54, -122.75]
  ];

  // Create a polyline by using the line coordinates, and pass in some initial options.
L.polyline(line, {
    color: "red"
  }).addTo(myMap);

  // Create a rectangle, and pass in some initial options.
L.rectangle([
    [45.55, -122.64],
    [45.54, -122.61]
  ], {
    color: "black",
    weight: 3,
    stroke: true
  }).addTo(myMap);