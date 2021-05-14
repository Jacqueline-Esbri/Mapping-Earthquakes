// Add console.log to check to see if our code is working.
console.log("working");







// //Grabbing our GeoJSON data.(poinTolayer feature)
// L.geoJson(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//    return L.marker(latlng)
// //     .bindPopup("<h2>" + feature.properties.city + "</h2>");
//        .bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>");
//      }

//  }).addTo(map);

// Grabbing our GeoJSON data (onEachFeature) bindPopup
// L.geoJson(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup("<h2>Airline code: " + feature.properties.faa + "</h2> <hr> <h3>Airport name: " + feature.properties.name + "</h3>");
//   }

// }).addTo(map);



// Coordinates for each point to be used in the line.
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790],
//   [40.7899, -111.9791],
//   [47.4502, -122.3088]
// ];

// Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//   color: "yellow"
// }).addTo(map);


// Add a circle marker to Los Angeles, CA
// L.circle([34.0522, -118.2437], {
//     radius: 100
//  }).addTo(map);

// Circle (light-yellow) w blk lines 300-px on drk map
// L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor: '#ffffa1'
// }).addTo(map);
    

//  Add a marker to the map for Los Angeles, California.
//   let marker = marker([34.0522, -118.2437]).addTo(map);

// Get data from cities.js
// let cityData = cities;

  // Loop through the cities array and create one marker for each city. (marker)
//   cityData.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location)
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });
  
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//     radius: city.population/100000
// })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });



// OPTION #1 
// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// });
// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// OPTION #2
// // We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// // We create the tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// // We create the dark view tile layer that will be an option for our map.
// let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// // We create the dark view tile layer that will be an option for our map.
// let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// Create a base layer that holds both maps.
// let baseMaps = {
//   Light: light,
//   Dark: dark
// };

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
});



// // Pass our map layers into our layers control and add the layers control to the map.
 L.control.layers(baseMaps).addTo(map);


 
// // Then we add our 'streets' tile layer to the map.
 //satelliteStreets.addTo(map);

 // Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  //L.geoJson(data).addTo(map);
//});
// This function returns the style data for each of the earthquakes we plot on
// the map. We pass the magnitude of the earthquake into a function
// to calculate the radius.
function styleInfo(feature) {
  return {
    opacity: 1,
    fillOpacity: 1,
    fillColor: "#ffae42",
    color: "#000000",
    radius: getRadius(),
    stroke: true,
    weight: 0.5
  };
}
// This function determines the radius of the earthquake marker based on its magnitude.
// Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
function getRadius(magnitude) {
  if (magnitude === 0) {
    return 1;
  }
  return magnitude * 4;
}

// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {

    // We turn each feature into a circleMarker on the map.
    
    pointToLayer: function(feature, latlng) {
                console.log(data);
                return L.circleMarker(latlng);
            },
            // We set the style for each circleMarker using our styleInfo function
          style: styleInfo
        }).addTo(map);
      });



// // Accessing the Toronto neighborhoods GeoJSON URL
// let torontoHoods = "https://raw.githubusercontent.com/Jacqueline-Esbri/Mapping-Earthquakes/main/torontoNeighborhoods.json";

// // // Create a style for the lines. (Skill drill)
// let myStyle = {
// 	color: "blue",
// 	weight: 1,
// fillColor: "yellow",
// fillOpacity: 0.2
// }

// // Grabbing our GeoJSON data.
// d3.json(torontoHoods).then(function(data) {
//     console.log(data);
// //     L.geoJson(data).addTo(map);
// // });


    

//   //Creating a GeoJSON layer with the retrieved data.
//   	L.geoJson(data, {
//       style: myStyle,
// 	  	onEachFeature: function(feature, layer) {
// 				layer.bindPopup("<h3>Neighborhood: " + feature.properties.AREA_NAME +  "</h3>");
// 		},
//   })	
//   .addTo(map);
// });


// // Creating a GeoJSON layer with the retrieved data. (Plus skill drill)
// L.geoJson(data, {
//   onEachFeature: function(feature, layer) {
//     layer.bindPopup("<h2>Airport code: " + feature.properties.faa + "</h2> <hr> <h3>Airport name: " + feature.properties.name + "</h3>");
//   },
// }).addTo(map);


// // Creating a GeoJSON layer with the retrieved data (part of toggle map feature)
// // L.geoJson(data).addTo(map);

// });

