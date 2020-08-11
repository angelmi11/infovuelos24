   const d = document;
  
  export function ShowMap() {
    let btn = d.getElementById('btn');
    let x = d.getElementById('info-map');
    btn.addEventListener('click', function () {
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    })
  }


  export function initmap() {
let lt = d.getElementById('lt').innerHTML;
let lng = d.getElementById('lng').innerHTML;

let lt_llegada = d.getElementById('lt_llegada').innerHTML;
let lng_llegada = d.getElementById('lng_llegada').innerHTML

let lt_salida = d.getElementById('lt_salida').innerHTML;
let lng_salida = d.getElementById('lng_salida').innerHTML;
    let prueba = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    // let prueba2 = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    let map = L.map('leafletmap').setView([lt, lng], 7);

    L.tileLayer(prueba, {
      maxZoom: 5,
    }).addTo(map);

    let real = [lt, lng];
    let salida_aeropuer = [lt_salida, lng_salida];
    let llegada_aeropuer = [lt_llegada, lng_llegada];


    let array = [
      [lt_salida, lng_salida],
      [lt, lng],
      [lt_llegada, lng_llegada]
    ];

    let icoMarker = L.icon({
      iconUrl: 'img/fonts/avionicono.png',
      iconSize: [60, 70],
      iconAnchor: [40, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41],


    })

    let icoMarker2 = L.icon({
      iconUrl: 'img/fonts/salida2.png',
      iconSize: [60, 70],
      iconAnchor: [40, 41],
    })

    let icoMarker3 = L.icon({
      iconUrl: 'img/fonts/salida2.svg',
      iconSize: [60, 70],
      iconAnchor: [40, 41],
    })

    let marker = L.marker(real, {
      center: real,
      icon: icoMarker
    }).addTo(map);


    let aeropuerto1 = L.marker(salida_aeropuer, {
      icon: icoMarker2

    }).addTo(map);

    //aeropuerto1.bindPopup(`<b>Aeropuerto-Salida</b><br>${nombreAeropuer_Salida}.`).openPopup();
    let aeropuerto2 = L.marker(llegada_aeropuer, {
      icon: icoMarker2
    }).addTo(map);
    //aeropuerto2.bindPopup(`<b>Aeropuerto-Llegada</b><br> <a href="#">${nombreAeropuer_Llegada}</a>.`).openPopup();

    let polyline = L.polyline(array, {
      color: 'red'
    }).addTo(map);


  }