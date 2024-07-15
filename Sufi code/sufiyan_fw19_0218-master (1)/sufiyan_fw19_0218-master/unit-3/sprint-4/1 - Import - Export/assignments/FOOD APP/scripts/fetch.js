 
 


 
 let  getDATA = async (url) => {
    let res = await fetch(url)
    let data = await res.json()

  
    return data.meals

}

//////


let displayDATA = (data,container) =>{

 
   container.innerHTML = ""

        data.map( ( {strMealThumb, strMeal, strArea , strInstructions, strYoutube} ) => {
        
            let img = document.createElement("img");
            img.src = strMealThumb ;
        
            let name = document.createElement("h3");
            name.innerText = strMeal;
        
            let region = document.createElement("p");
            region.innerText = strArea;

            let instruction = document.createElement("p");
            instruction.innerText = strInstructions;


            let div = document.createElement("div")
        
            div.append(img,name,region,instruction)
            container.append(div)
    
        
        })

}


export {getDATA,displayDATA}