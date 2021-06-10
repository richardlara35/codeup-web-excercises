const mapboxToken = 'pk.eyJ1IjoicmljaGFyZGxhcmEzNSIsImEiOiJja3BwbmZ6MzkwMG11MzFsdGg0cWxidHRxIn0.B3v16Pz6ypIS1kUQFA6OXA'

mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-day-v1',
    center: [-95.3698, 29.4604],
    zoom: 12
});


// call function to create method and give initial point
let marker = setMarker([-95.3698, 29.7604]);

// call addMapEvent AFTER the marker has been initially set
addMapEvent(marker);

// creat new geocoder and assign to variable
let geocoder = setGeocoder();

// add geocoder to map
addGeocoderToMap(geocoder);
addGeocoderEvent(geocoder);
setPopup();

// creates and returns new Geocoder (search box)
function setGeocoder() {
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })
}

// add geocoder to map
function addGeocoderToMap(geocoder) {
    map.addControl(geocoder);
}

//// add event listener to geocoder and set new marker location
function addGeocoderEvent(geocoder) {
    geocoder.on("result", function (event) {
        marker.setLngLat(event.result.geometry.coordinates)

        setPopup(event.result.place_name)
    })
}

function setMarker(point) {

    return new mapboxgl.Marker().setLngLat(point)
        .addTo(map)
}

function addMapEvent(marker) {
    map.on('click', function (event) {
        marker.setLngLat(event.lngLat)
            .addTo(map);
    })
}

function setPopup(textDetails) {
    let popup = new mapboxgl.Popup()
        .setHTML(`<p>${textDetails}</p>`)
        .addTo(map);

    marker.setPopup(popup);
}