// Ude Import export (MANDATORY)



import navbar from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar()


//////////////

let data = JSON.parse(localStorage.getItem("news"))


let displayData = ()=> {

    let container = document.querySelector("#detailed_news")
    container.innerHTML = ""

    data.map((el) =>{

        let div = document.createElement("div")
        div.setAttribute("class","news")
        
        let image = document.createElement("img")
        image.src = el.urlToImage

        let title = document.createElement("h3")
        title.innerHTML = el.title

        let content = document.createElement("p")
        content.innerHTML = el.content



  
        div.append(image,title,content)
        container.append(div)

    })



}

displayData()