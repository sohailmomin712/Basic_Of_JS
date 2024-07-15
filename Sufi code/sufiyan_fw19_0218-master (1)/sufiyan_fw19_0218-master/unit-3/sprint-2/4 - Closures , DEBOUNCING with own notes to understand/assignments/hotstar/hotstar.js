async function main() {
  let query = document.querySelector("#query").value;

  let data = await getDATA(query);
  // console.log(data)
  // got promise bcz function is async
  // then again async await here
  displayDATA(data);
}

async function getDATA(query) {
  const url = `http://www.omdbapi.com/?apikey=c1c983b0&s=${query}`;

  let res = await fetch(url);
  let data = await res.json();

  // console.log(data.Search)
  return data.Search;
}

function displayDATA(data) {
  // to fix error
  if (data == undefined) {
    let container = document.querySelector("#movies");
    container.innerHTML = "";
  } else if (!data) {
    return;
  }

  let container = document.querySelector("#movies");
  container.innerHTML = "";

  data.forEach(function (el, index) {
    let div = document.createElement("div");
    div.setAttribute("class", "movie");
    div.addEventListener("click", function () {
      showMovieDATA(el, index);
    });

    let image = document.createElement("img");
    image.src = el.Poster;

    let div2 = document.createElement("div");
    div2.setAttribute("class", "div2");

    let p = document.createElement("p");
    p.innerText = el.Title;

    let Year = document.createElement("p");
    Year.innerText = el.Year;

    div2.append(p, Year);
    div.append(image, div2);

    container.append(div);
  });
}

// local storage set item to show data when we click on and movie

function showMovieDATA(el, index) {
  let img = document.querySelector("#movieDATA");
  img.src = el.Poster;

  let name = document.querySelector("#MOVIEname");
  name.innerText = el.Title;

  let Year = document.querySelector("#MOVIEyear");
  Year.innerText = el.Year;

  // localStorage.setItem("MOvieData", JSON.stringify(arrMOVIE));
}

let id;

function deBOUNCE(func, delay) {
  if (id) {
    clearTimeout(id); // it will remove func from browser
  }

  id = setTimeout(function () {
    func();
  }, delay);
}

let arrOFimage = [
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9947/1279947-h-d5d3ff34dad1",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4652/674652-h",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9308/1269308-h-26da4df3decc",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4576/674576-h",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9829/1249829-h-14e8d51a3470",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2346/1282346-h-8c87211478c3",
];

let IDD; // taked global id
let i = 0; // taked this and increamented every set interval

function slideSHOW() {
  let container = document.getElementById("slideshow");

  //   id value updated
  IDD = setInterval(function () {
    if (i == arrOFimage.length) {
      i = 0;
    }

    // console.log(i) // to check its starting from 0 or not after coplete cycle

    let img = document.querySelector("#img");
    img.src = arrOFimage[i];
    // data from local storage   arrOFimage[i]

    i++;
  }, 2000); // repeat in every 1 sexond
}

slideSHOW();

const main_popup = document.querySelector(".sub-menu");

window.addEventListener("click", (el) => {
  setTimeout(() => {
    popup.style.visibility = "hidden";
  }, 500); // this 500 is a timeout for display none
});
