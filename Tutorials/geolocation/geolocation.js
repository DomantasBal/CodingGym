function currentSuccess(position) {
  const { latitude, longitude } = position.coords;
  console.log(`${latitude} - ${longitude}`);
}

function currentError(error) {
  console.log(`${error.code} - ${error.message}`);
}

const options = {};

navigator.geolocation.getCurrentPosition(currentSuccess, currentError, options);
