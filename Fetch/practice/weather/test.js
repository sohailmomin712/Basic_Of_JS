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
}
