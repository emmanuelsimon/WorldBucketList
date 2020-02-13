let carte;

function initMap() {
    carte = L.map('macarte').setView([43.250000, 6.000000], 2);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(carte);
}

export {initMap};