let carte;
const greenIcon = L.icon({
    iconUrl: '/images/leaf-green.png',
    shadowUrl: '/images/leaf-shadow.png',
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

function initMap() {
    carte = L.map('macarte').setView([43.246463, 5.999967], 2);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(carte);

}

function addMarker(etape) {
    const marker = L.marker([etape.coordinates.lat, etape.coordinates.long], {icon: greenIcon}).addTo(carte);
}

export {initMap, addMarker};