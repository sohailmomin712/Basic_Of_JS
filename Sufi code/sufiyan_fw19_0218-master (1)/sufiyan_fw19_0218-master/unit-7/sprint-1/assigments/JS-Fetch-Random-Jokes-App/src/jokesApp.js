


function setJokes(json) {

  let X = document.querySelector("#joke-container")

  let divT = document.createElement("div")
  let pTag = document.createElement("p")
  
  pTag.className="joke-text"
  pTag.innerText = json.value

  divT.append(pTag)
  X.append(divT)
 // console.log(data)
  // get the joke-container div
  // craete a div and add a p tag in it with class as joke-text
  // append the div to joke-container div


}


let getRandomJoke = async () => {

  try{
    let X =  await fetch(`https://api.chucknorris.io/jokes/random`)
    let data = await X.json()
    setJokes(data)
    return data
        
           
  }catch(e){
    return("something went wrong")
  }
  // fetch request to get a random joke
  // return the data ona successfull request
  // return error text on failure
};


 let getJokeByCategory = async  (event)=>{

  try{
   let X = await fetch(`https://api.chucknorris.io/jokes/random?category=${event.target.value}`)
         let data = await X.json()
         setJokes(data)
         return data
          
 }catch(e){
  return("something went wrong")
 }


  // // fetch request to get a random joke by category
  // return the data ona successfull request
  // return error text on failure
};

window.onload = function () {
  

let random = document.querySelector("#get-jokes-data")
random.addEventListener("click", getRandomJoke)

let category = document.querySelector("#get-category")
category.addEventListener("change", getJokeByCategory)


//onchange="getJokeByCategory(this.value)"

  // add click event to button
  // add change event to select tag
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getRandomJoke,
    setJokes,
    getJokeByCategory,
  };
}

