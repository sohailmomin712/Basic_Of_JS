// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import navbar from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar()



// https://masai-api.herokuapp.com/news?q={query}



//// on enter go to seaerch.html and show xdata there 


let getDataSearch = async (query)=>{

    let meher = `https://masai-api.herokuapp.com/news?q=${query}`

    let res = await fetch(meher)
    
    let data = await res.json()

    console.log(data.articles)

    displayData(data.articles)
}

let query

let SearchData = ()=>{

    query = document.querySelector("#search_input").value || JSON.parse(localStorage.getItem("query"))

    getDataSearch(query)

}

SearchData()

document.querySelector("#search_input").addEventListener("change", SearchData);


let displayData = (data)=> {

    let container = document.querySelector("#results")
    container.innerHTML = ""

    data.map((el) =>{

        let div = document.createElement("div")
        div.setAttribute("class","news")
        div.addEventListener("click" , function(){
            showNews(el)
        })

        let minDiv =  document.createElement("div")
        minDiv.setAttribute("class","minDiv")

        let image = document.createElement("img")
        image.src = el.urlToImage

        let title = document.createElement("h3")
        title.innerHTML = el.title

        let des = document.createElement("p")
        des.innerHTML = el.description



        minDiv.append(title,des)
        div.append(image,minDiv)
        container.append(div)

    })



}



let newsData = []

let showNews = (el)=>{

    newsData.push(el)
  localStorage.setItem("news", JSON.stringify(newsData))    
  window.location.href = "news.html"
 
}



