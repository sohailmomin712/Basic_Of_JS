 
 
 let  getDATA = async (url) => {
    let res = await fetch(url)
    let data = await res.json()

    // data = data.sort((a,b)=>{
    //     return b.price - a.price
        
    // })

    return data
    
}

// to make it dynamic passing para (data, container)

let displayDATA = (data, container) =>{

    data.map( ({image, title, price}) => {

        let img = document.createElement("img");
        img.src = image ;

        let TITLE = document.createElement("h3");
        TITLE.innerText = title;

        let PRICE = document.createElement("p");
        PRICE.innerText = price;

        let div = document.createElement("div")

        div.append(img,TITLE,PRICE)
        container.append(div)

        console.log(img,TITLE,PRICE)
  
    })
}

export {getDATA,displayDATA}
