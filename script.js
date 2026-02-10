mapboxgl.accessToken = 'pk.eyJ1IjoiY2hlbmphbmEiLCJhIjoiY21rNGdpc3BoMDdiNzNlb3Yxbm02dGpwOCJ9.xYpWe_CkRr_Oe_Q-DtaVYw'; //Add public map token from Mapbox account

const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/chenjana/cmkyj8q7o00ak01s017y27pcb', //style URL
    center: [-79.4133, 43.7725], // starting position (middle of the mapped area)
    zoom: 12, // starting zoom of the map
});

// Load the map
map.on('load', () => {

// 1. ADD DATA SOURCES
    // Add a data source containing GeoJSON data
    map.addSource('Walking-Area-Data', {
        type: 'geojson',
        data: 'https://JananChen.github.io/GGR472Lab2/data/walkingarea.geojson' //Add walking area polygon data source path
    });
    
    // Add a data source containing GeoJSON data
    map.addSource('Restaurants-Data', {
        type: 'geojson',
        data: 'https://JananChen.github.io/GGR472Lab2/data/restaurants.geojson' //Add restaurants point data source path
    });
// 2. VISUALIZE DATA LAYERS
    map.addLayer({
        'id': 'walking-ply',
        'type': 'fill', // Fill the entire polygon area with the chosen colour
        'source': 'Walking-Area-Data', // Get data from the Walking-Area-Data data source
        'paint': {
            'fill-opacity': 0.2, // Set opacity to make the polygon walking area boundary see-through
            'fill-color': '#ee3737', // Set colour of the polygon to red
            'fill-outline-color': 'black' // Make a black outline
        }
    });
    
    map.addLayer({
        id: 'restaurants-pnt',
        type: 'circle', // Choose the symbol to be a triangle
        source: 'Restaurants-Data', // Get data from the Restaurants-Data data source
        paint: {
            'circle-radius': 5, // Set radius of restaurant points
            'circle-color': '#05df55' // Set colour of restaurant points to green
        }

    });})


