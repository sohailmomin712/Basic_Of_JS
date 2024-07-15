
let arr = JSON.parse(localStorage.getItem("data")) 

arr.map(function (el, index){


    let div = document.createElement("div") ;

    let div2 = document.createElement("div"); 
    div2.setAttribute("class", "product")
  

    let Brand = document.createElement("p")
    Brand.innerText = el.Brand

    let Name = document.createElement("h3")
    Name.innerText = el.Name

    let Price = document.createElement("p")
    Price.innerText = el.Price

    let Image = document.createElement("img")
    Image.setAttribute("src", el.Image)

    let Remove = document.createElement("button")
    Remove.setAttribute("id", "remove_product")
    Remove.innerText = "Remove"

    Remove.addEventListener ("click", function(){
      deleteitem(index,el)
    })

    div2.append(Brand,Name,Price,Remove);
    div.append(Image,div2)
    document.querySelector("#products_data").append(div)

    
})


function  deleteitem(index,el){
    arr.splice(index,1)
    localStorage.setItem("data", JSON.stringify(arr))
    window.location.reload();
}

