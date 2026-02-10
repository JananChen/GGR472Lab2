mapboxgl.accessToken = 'pk.eyJ1IjoiY2hlbmphbmEiLCJhIjoiY21rNGdpc3BoMDdiNzNlb3Yxbm02dGpwOCJ9.xYpWe_CkRr_Oe_Q-DtaVYw'; //Add public map token from Mapbox account

const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/chenjana/cmkyj8q7o00ak01s017y27pcb', //style URL
    center: [-79.4133, 43.7725], // starting position (middle of the mapped area)
    zoom: 12, // starting zoom
});

//Listen for load event, once map finishes loading, trigger the following functions
map.on('load', () => {

// 1. ADD DATA SOURCES
    // Add a data source containing GeoJSON data
    map.addSource('Walking-Area-Data', {
        type: 'geojson',
        data: 'https://JananChen.github.io/GGR472Lab2/data/walkingarea.geojson'
        // Format for raw data link in online repo whilst still working on website - 'https://raw.githubusercontent.com/yourusername/respoitoryname/main/yourfile.geojson'
        // Update to following format once website is published - //'https://yourusername.github.io/repositoryname/yourfile.geojson'
    });
    // Add a data source containing GeoJSON data
    map.addSource('Restaurants-Data', {
        type: 'geojson',
        data: 'https://JananChen.github.io/GGR472Lab2/data/restaurants.geojson'
        // Format for raw data link in online repo whilst still working on website - 'https://raw.githubusercontent.com/yourusername/respoitoryname/main/yourfile.geojson'
        // Update to following format once website is published - //'https://yourusername.github.io/repositoryname/yourfile.geojson'
    });
// 2. VISUALIZE DATA LAYERS
    map.addLayer({
        'id': 'walking-ply',
        'type': 'fill',
        'source': 'Walking-Area-Data',
        'paint': {
            'fill-opacity': 0.2,
            'fill-color': '#ee3737',
            'fill-outline-color': 'black'
        }
    });

    map.addLayer({
        id: 'restaurants-pnt',
        type: 'circle',
        source: 'Restaurants-Data',
        paint: {
            'circle-radius': 20,
            'circle-color': '#05df55'
        }

    });})
