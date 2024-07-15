

let arr = JSON.parse(localStorage.getItem("cart_items")) 

let total = 0;

function displayDATA(arr){

    console.log(arr)

    document.querySelector("#cart").innerHTML = ""

    arr.forEach(function(el,index){

        let container = document.querySelector("#cart")

        let div =  document.createElement("div")
        div.setAttribute("class","item")

        let name  = document.createElement("h2")
        name.innerText = el.name

        let image = document.createElement("img")
        image.src = el.image

        let price  = document.createElement("p")
        price.innerText = el.price

        total = total + el.price ;
        document.querySelector("#cart_total").innerText = total;

        let remove = document.createElement("button")
        remove.setAttribute("class","remove")
        remove.innerText = "Remove"
        remove.addEventListener("click" , function(){
            removeOK(el,index)
      
        })

        div.append(image,name,price,remove)
        container.append(div)

       
    })

}

document.querySelector("#cart_total").innerText = total;

displayDATA(arr)


function removeOK(el,index){
    
    arr.splice(index,1)
    localStorage.setItem("cart_items" , JSON.stringify(arr))
    window.location.reload();

}

function check(){

    window.location.href = "checkout.html"
}