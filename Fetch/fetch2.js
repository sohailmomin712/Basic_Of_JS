const url = "https://reqres.in/api/users?pge=2";

fetch(url)
  .then(function (res) {
    return res.json(); //collect the data in chunks as it takes time its also a promise
  })
  .then(function (res) {
    console.log(res);
    append(res.data)
  })
  .catch(function (err) {
    console.log(err);
  });

function append(data) {
  let container = document.getElementById("container");
  data.forEach(function (el) {
    let img = document.createElement("img");
    img.src = el.avatar;
    let p = document.createElement("p");
    p.innerText = `${el.first_name} ${el.last_name}`;

    let div = document.createElement("div");
    div.append(img, p);

    container.append(div);
  });
}
