const url = "https://fakestoreapi.com/products";

async function getData() {
  try {
    let res = await fetch(url);
    let data = await res.json(); //collect the data in chunks as it takes time its also a promise
    append(data);
    // console.log(data);
   
  } catch (err) {
    console.log(err);
  }
}

getData();

function append(data) {
  let container = document.getElementById("container");
  data.forEach(function (el) {
    let img = document.createElement("img");
    img.src = el.image;

    let p = document.createElement("p");
    p.innerText = el.title;

    let price = document.createElement("p");
    price.innerText = el.price;

    let Div = document.createElement("div");
    Div.append(img, p, price);
    container.append(Div);
  });
}
