// Ude Import export (MANDATORY)

// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import navbar from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar()




// https://masai-api.herokuapp.com/news/top-headlines?country={country code} 

// https://masai-api.herokuapp.com/news?q={query}

let DefaultData =  async () => {

    let url = `https://masai-api.herokuapp.com/news/top-headlines?country=in`

    let res = await fetch(url)
    
    let data = await res.json()

    console.log(data.articles)

    displayData(data.articles)
}
DefaultData()


let getDataCountry = async (new_id)=>{

    let meher = `https://masai-api.herokuapp.com/news/top-headlines?country=${new_id}`

    let res = await fetch(meher)
    
    let data = await res.json()

    console.log(data.articles)

    displayData(data.articles)
}



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



let tag1 = document.querySelector("#in")
tag1.addEventListener("click" , function(){

    getDataCountry(this.id)
    console.log(this.id)
})


let tag2 = document.querySelector("#us")
tag2.addEventListener("click" , function(){

    getDataCountry(this.id)
    console.log(this.id)
})



let tag3 = document.querySelector("#ch")
tag3.addEventListener("click" , function(){

    getDataCountry(this.id)
    console.log(this.id)
})



let tag4 = document.querySelector("#uk")
tag4.addEventListener("click" , function(){

    getDataCountry(this.id)
    console.log(this.id)
})


let tag5 = document.querySelector("#nz")
tag5.addEventListener("click" , function(){

    getDataCountry(this.id)
    console.log(this.id)
})



//// on enter go to seaerch.html and show xdata there 

let SearchData = ()=>{

    let query = document.querySelector("#search_input").value

    localStorage.setItem("query", JSON.stringify(query))
    window.location.href = "search.html"
}



document.querySelector("#search_input").addEventListener("change", SearchData);



////////////////////


let newsData = []

let showNews = (el)=>{

    newsData.push(el)
  localStorage.setItem("news", JSON.stringify(newsData))    
  window.location.href = "news.html"
 
}








    






// let displayData = ()=> {

  

   


//  }