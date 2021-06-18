var map = L.map('mapid').setView([33.931625,-118.144089], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([33.931625,-118.144089]).addTo(map)
    .bindPopup('Here is where to find US')
    .openPopup();