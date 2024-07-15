


const url = "https://grocery-masai.herokuapp.com/items"

let arr; 

async function getDATA(){

    try{

       let res = await fetch(url) ;
       let data = await res.json();
     
       arr = data.data
       displayDATA(arr)
     //  console.log(data.data)
       
    }catch(err){

        console.log(err)
    }
}

getDATA()


function displayDATA(arr){

    console.log(arr)

    arr.map(function(el,index){

        let container = document.querySelector("#groceries")

        let div =  document.createElement("div")
        div.setAttribute("class","item")


        let name  = document.createElement("h2")
        name.innerText = el.name

        let image = document.createElement("img")
        image.src = el.image

        let price  = document.createElement("p")
        price.innerText = el.price

        let button  = document.createElement("button")
        button.setAttribute("class","add_to_cart")
        button.innerText = "Add To Cart"
        button.addEventListener("click" , function(){
            add_to_cart(el,index)
        })

        div.append(image,name,price,button)
        container.append(div)

    })

}

let wall = 700


let arrCART = JSON.parse(localStorage.getItem("cart_items")) || []


function  add_to_cart(el,index){

      
if (wall < 0 || wall == -100){
    wall = 0
    document.querySelector("#wallet").innerText = 0;
    alert("Insufficient balance")     
 }else{
    wall = wall - el.price;
 }

//  console.log(el)
 arrCART.push(el)
 localStorage.setItem("cart_items" , JSON.stringify(arrCART))
 
 document.querySelector("#wallet").innerText = wall;


}

document.querySelector("#wallet").innerText = wall;
