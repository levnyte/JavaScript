// Charlotte's Coordinates = 35.2271° N, 80.8431° W

let myMap = L.map("map", {
  center: [35.2271, -80.8431],
  zoom: 2
});

// add a tile layer - map image at the coordinates
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(myMap);

// Country data
let countries = [
  {
    name: "Luxembourg",
    location: [49.815273, 6.129583],
    gdp_pc: 116014.6025
  },
  {
    name: "Bermuda",
    location: [32.321384, -64.75737],
    gdp_pc: 107079.4798
  },
  {
    name: "Switzerland",
    location: [46.818188, 8.227512],
    gdp_pc: 87097.03645
  },
  {
    name: "Ireland",
    location: [53.41291, -8.24389],
    gdp_pc: 85267.76474
  },
  {
    name: "Cayman Islands",
    location: [19.513469, -80.566956],
    gdp_pc: 85082.52686
  },
  {
    name: "Norway",
    location: [60.472024, 8.468946],
    gdp_pc: 67389.91205
  },
  {
    name: "United States",
    location: [37.09024, -95.712891],
    gdp_pc: 63413.51386
  },
  {
    name: "Denmark",
    location: [56.26392, 9.501785],
    gdp_pc: 61063.31643
  },
  {
    name: "Singapore",
    location: [1.352083, 103.819836],
    gdp_pc: 59797.75218
  },
  {
    name: "Iceland",
    location: [64.963051, -19.020835],
    gdp_pc: 59270.18005
  },
  {
    name: "Netherlands",
    location: [52.132633, 5.291266],
    gdp_pc: 52397.11671
  },
  {
    name: "Sweden",
    location: [60.128161, 18.643501],
    gdp_pc: 52274.40879
  },
  {
    name: "Australia",
    location: [-25.274398, 133.775136],
    gdp_pc: 51692.84275
  },
  {
    name: "Qatar",
    location: [25.354826, 51.183884],
    gdp_pc: 50124.38594
  },
  {
    name: "Finland",
    location: [61.92411, 25.748151],
    gdp_pc: 48773.28117
  },
  {
    name: "Austria",
    location: [47.516231, 14.550072],
    gdp_pc: 48586.80132
  },
  {
    name: "Hong Kong",
    location: [22.396428, 114.109497],
    gdp_pc: 46323.86344
  },
  {
    name: "Germany",
    location: [51.165691, 10.451526],
    gdp_pc: 46208.42947
  },
  {
    name: "Belgium",
    location: [50.503887, 4.469936],
    gdp_pc: 45159.34822
  },
  {
    name: "Israel",
    location: [31.046051, 34.851612],
    gdp_pc: 44168.94364
  }
];

// function markerSize() gives a circle a radius based on the gdp
function markerSize(gdp)
{
  return Math.sqrt(gdp) * 500;
}

/*  A color for each circle that you determine as follows:
For countries with more than 100,000 GDP per capita, set the color of the circle to yellow.
For countries with more than 75,000 GDP per capita, set the color of the circle to blue.
For countries with more than 50,000 GDP per capita, set the color of the circle to green.
Render the remaining country circles in violet.
*/
function circleColor(gdp)
{
  if(gdp > 100000)
      return "yellow";
  else if(gdp > 75000)
      return "blue";
  else if(gdp > 50000)
      return "green";
  else
      return "violet"
}

// loop through the array of countries
for (var i = 0; i < countries.length; i++)
{
  // get each country from the array and do the following:
      // get the location property
      // make a circle using the location
      // bind a popup to the marker that has the country name and population
          // with embedded HTML
  let country = countries[i];   // gets the current city
  L.circle(country["location"], {
      color: "black",
      fillColor: circleColor(country["gdp_pc"]),
      fillOpacity: 0.8,
      // call the markerSize function to set the radius property
      radius: markerSize(country["gdp_pc"])
  })
  .bindPopup(`<center><h2>${country['name']}</h2><hr><p>GDP: ${country["gdp_pc"]}</p></center>`)
  .addTo(myMap);
}