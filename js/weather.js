const API_key = "6a45c3d32a79e870e8ab36c2434d3e12";

function geoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const temp = weather.nextElementSibling;
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = data.name;
      temp.innerText = `${data.main.temp}도`;
      city.innerText = data.weather[0].main;
    });
}

function geoError() {
  alert("We don't find your location");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
