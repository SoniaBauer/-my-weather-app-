let now = new Date();
let p = document.querySelector("#date");
let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  " Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
console.log(`${day}, ${hours}:${minutes}`);
p.innerHTML = `${day}, ${hours}:${minutes}`;
//challenge
function changeCity(event) {
  event.preventDefault();
  let input = document.querySelector("#search-input");
  let h1 = document.querySelector("#city-name");
  h1.innerHTML = `${input.value}`;
}
let search = document.querySelector("#search-input");
search.addEventListener("submit", changeCity);

let apiKey = "3f6be1c407b0d9d1933561808db358ba";
let city = "Cape town";
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

function getWeather(response) {
  let weather = Math.round(response.data.main.temp);
  let weatherElerment = document.querySelector("h2");
  weatherElerment.innerHTML = response.data.weather[0].description;
  let temperature = document.querySelector("#today's-temperature");
  temperature.innerHTML = `${weather}`;
}
axios.get(`${apiUrl} & appid=${apiKey}`).then(getWeather);

function getHumidity(response) {
  let humidityElerment = document.querySelector("the-humdity");
  humidityElerment.innerHTML = response.data.main.humidity;
}

let humdity = document.querySelector("the-humdity");
axios.get(`${apiUrl}& appid=${apiKey}`).then(getHumidity);

function getWind(response) {
  let windElerment = document.querySelector("the-wind");
  windElerment.innerHTML = response.data.wind;
}

let wind = document.querySelector("the-wind");
axios.get(`${apiUrl}& appid=${apiKey}`).then(getWind);

//challenge
function showlocation(position) {}
let h1 = document.querySelector("h1");
h1.innerHTML = ` Your latitude is ${position.coords.latitude}.Your longitude is ${position.coords.longitude}`;

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showlocation);
}
let button = document.querySelector("Green-button");
button.addEventListener("click", getCurrentPosition);