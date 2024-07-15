
import navbar from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar()


//////

   
import {getDATA, displayDATA} from "./fetch.js";

//////////////

const url = `https://www.themealdb.com/api/json/v1/1/random.php`

let container = document.querySelector("#container")

// console.log(getDATA(url))
// async function returning promise

getDATA(url).then((res)=>{
    
    console.log(res)
    displayDATA(res, container);

})




///////


