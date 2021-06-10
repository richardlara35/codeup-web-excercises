const mapboxToken = 'pk.eyJ1IjoicmljaGFyZGxhcmEzNSIsImEiOiJja3ByMXZsdmYwaTMyMnZwYWx5cDlibWpuIn0.8FclJDqw_rXGcmYY1GteBQ'


mapboxgl.accessToken = mapboxToken

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    center: [-95.36786464142847, 29.75989741259255],
    zoom: 10
});

let restaurants = [
    {
        name: "Pappasitos",
        location: [-95.555031433557, 29.783316174308776],
        popup: "Fajitas and Margs for the win",
    },
    {
        name: "Neo",
        location: [-95.40010570864465, 29.747716921614483],
        popup: "Best Omakase in the city!"
    },
    {
        name : 'Pho Saigon',
        location: [-95.7514475635159, 29.77442592205565],
        popup: "Favorite spot for Pho and spring rolls"
    }]

for ( let i = 0; i < restaurants.length; i++){
    let marker = setMarker(restaurants[i].location);

    function setMarker(point) {

        return new mapboxgl.Marker().setLngLat(point)
            .addTo(map)
    }
// map.on('click', )
    let popup = new mapboxgl.Popup()
        .setHTML(`<h2>${restaurants[i].name}</h2> <p>${restaurants[0].popup}</p>`)
        .addTo(map)

    marker.setPopup(popup)
    console.log(marker.setPopup(popup))
}

// restaurants.forEach(function(i) {
//     console.log(restaurants[0].location);
//     let marker = setMarker(restaurants[i].location);
//
//
//     function setMarker(point) {
//
//         return new mapboxgl.Marker().setLngLat(point)
//             .addTo(map)
//     }
//
//     var popup = new mapboxgl.Popup()
//         .setHTML(`<h2>${restaurants[i].name}</h2> <p>${restaurants[0].popup}</p>`)
//         .addTo(map)
//
//     marker.setPopup(popup)
//
//
// })