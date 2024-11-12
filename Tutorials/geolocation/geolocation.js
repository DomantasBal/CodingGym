// MAP Library
// https://leafletjs.com/

// // get currrent position
// function currentSuccess(position) {
//   const { latitude, longitude, accuracy } = position.coords;
//   console.log(`${latitude} - ${longitude} Accuracy: ${accuracy}m.`);
// }

// function currentError(error) {
//   console.log(`${error.code} - ${error.message} `);
// }

// const currentOptions = {
//   enableHighAccuracy: true, //use GPS
//   timeout: 5000, // time to wait to stop trying for location
//   maximumAge: 0, // do not use cached position
// };

// navigator.geolocation.getCurrentPosition(
//   currentSuccess,
//   currentError,
//   currentOptions
// );

// const target = {
//   latitude: 40.2043123,
//   longitude: -17.12489,
// };

// // Watch position
// function watchSuccess(position) {
//   const coords = position.coords;
//   if (
//     target.latitude === coords.latitude &&
//     target.longitude === coords.longitude
//   ) {
//     console.log('you have reached your destination');
//     navigator.geolocation.clearWatch(id);
//   }
// }

// function watchError(error) {
//   console.log(`${error.code} - ${error.message} `);
// }

// const watchOptions = {
//   enableHighAccuracy: true, //use GPS
//   timeout: 5000, // time to wait to stop trying for location
//   maximumAge: 0, // do not use cached position
// };

// const id = navigator.geolocation.watchPosition(
//   watchSuccess,
//   watchError,
//   watchOptions
// );

const map = L.map('map').setView([0, 0], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const marker = L.marker([0, 0]).addTo(map);

navigator.geolocation.getCurrentPosition((position) => {
  const { latitude, longitude } = position.coords;
  marker.setLatLng([latitude, longitude]).update();
  map.setView([latitude, longitude], 18);
  marker.bindPopup('<h1> YOU ARE HERE</h1>');
});
