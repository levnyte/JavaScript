// Charlotte's Coordinates = 35.2271° N, 80.8431° W

/*
let myMap = L.Map("map", {
    center: [35.2271, -80.8431],
    zoom: 13
});
*/
let myMap = L.map("map").setView([39.8283, -98.5795], 4);

// add a tile layer - map image at the coordinates
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(myMap);

// A red circle over the city of Dallas ([32.7767, -96.7979])
L.circle([32.7767, -96.7979], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.80,
    radius: 100000
}).addTo(myMap);

// A line connecting NYC ([40.7128, -74.0060]) to Toronto ([43.6532, -79.3832])
L.polyline([[40.7128, -74.0060], [43.6532, -79.3832]], {color: "black"}).addTo(myMap);

/*
    A polygon that covers the area inside Atlanta ([33.7490, -84.3880]), 
    Savannah ([32.0809, -81.0912]), 
    Jacksonville ([30.3322, -81.6557]), 
    and Montgomery ([32.3792, -86.3077])
*/

L.polygon([
    [33.7490, -84.3880],
    [32.0809, -81.0912],
    [30.3322, -81.6557],
    [32.3792, -86.3077]
], {color: "black", fillColor: "gold", fillOpacity: 0.8}).addTo(myMap);