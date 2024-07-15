//api= 2975fe6d26f0aa6dae18eb9dcec16ef1
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

function searchData() {
  let city = document.getElementById("query").value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2975fe6d26f0aa6dae18eb9dcec16ef1`;

  fetch(url)
    .then(function (res) {
      return res.json(); //data in the form of chunks
    })
    .then(function (res) {
      console.log(res);
      appendData(res);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendData(data) {
  console.log("Received Data for appendData:", data); // Log the data received for appendData function

  let url = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  let container = document.getElementById("container");
  container.innerHTML = null;

  let h2 = document.createElement("h2");
  h2.innerText = data.name;

  let temp = document.createElement("p");
  temp.innerText = `Temp:- ${data.main.temp}`;

  let min_temp = document.createElement("p");
  min_temp.innerText = `Min-Temp:- ${data.main.temp_min}`;

  let max_temp = document.createElement("p");
  max_temp.innerText = `Max-Temp:- ${data.main.temp_max}`;

  container.append(h2, temp, min_temp, max_temp);

  let map_id = document.getElementById("map_id");
  map_id.src = url;
}

function getLocation() {
  navigator.geolocation.getCurrentPosition(success);

  function success(pos) {
    const crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    getWeatherOnLocation(crd.latitude, crd.longitude);
  }
}
getLocation()

function getWeatherOnLocation(lat, lon) {
  let url = `https:api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={API key}`;

  fetch(url)
    .then(function (res) {
      return res.json(); //data in the form of chunks
    })
    .then(function (res) {
      console.log(res);
      appendData(res);
    })
    .catch(function (err) {
      console.log(err);
    });
}
