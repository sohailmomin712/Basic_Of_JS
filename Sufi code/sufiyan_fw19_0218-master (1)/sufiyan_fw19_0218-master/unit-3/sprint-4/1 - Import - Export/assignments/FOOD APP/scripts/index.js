
import navbar from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar()

   // / search link 

   // / www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
 
// let body =  document.querySelector("body")

// body.addEventListener("onload", "direct")

// console.log(body)



let main = async ()=> {

    let query = document.querySelector("#query").value

    let data = await getDATA(query)

    console.log(data)
    displayDATA(data)
  
}


let getDATA = async (query) => {

     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
     
     let res = await fetch(url)
     let data = await res.json()
   
    //  console.log(data.meals)
     return data.meals

   }



   
let direct = async ()=>{

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`
     
     let res = await fetch(url)
     let data = await res.json()
   
    //  console.log(data.meals)
    displayDATA(data.meals)
    
}   
direct()


let displayDATA = (data) =>{

 let container = document.querySelector("#container")
 
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
        
            div.append(img,name,region)
            container.append(div)
    
        
        })

}




   




//////////


let id ; 

let deBOUNCE = (func, delay) =>{

  if(id){
    clearTimeout(id)
  }

  id = setTimeout( ()=>{

      func()

  },delay)


} 


let inp = document.querySelector("#query")
inp.addEventListener("input", function(){
   deBOUNCE(main,2000)
});


   




//////////


