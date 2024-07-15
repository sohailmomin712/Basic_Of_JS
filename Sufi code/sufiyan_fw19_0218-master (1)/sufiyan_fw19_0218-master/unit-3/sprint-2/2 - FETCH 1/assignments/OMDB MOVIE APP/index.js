

// https://www.omdbapi.com/?s=Thor&apikey=c1c983b0




let arr;

const url = "https://www.omdbapi.com/?s=Thor&apikey=c1c983b0"

async function getDATA(){
    
   try{

       let res = await fetch(url); 
       let data = await res.json()
        arr = data.Search

      //  displayDATA(arr)
      
     console.log(url)

   }catch(err){
       console.log(err)
   }
 }

//  getDATA()


//  function displayDATA(arr){

//    document.querySelector("#container").innerHTML = ""

//    if(arr == ""){
   
//     let container = document.querySelector("#container");

//     let img = document.createElement("img");
//     img.src = "https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif"

//     container.append(img)
//   }


//   arr.map(function(el,index){

//    let container = document.querySelector("#container");

//    let img = document.createElement("img");
//    img.src = el.Poster

//    let name = document.createElement("h2"); 
//    name.innerText = el.Title

//    let year = document.createElement("p"); 
//    year.innerText = el.Year

//    let but = document.createElement("button")
//    but.innerText = "Add To Cart"
//    but.addEventListener("click", function(){
//        addTOcart(el,index)
//    })

//    let div = document.createElement("div");

//    div.append(img,name,year,but)
//    container.append(div)

//   })
 
//  }

 
// function searchDATA(){
 
// let Movie_name = document.querySelector("#search").value;

//  let X = arr.filter(function(el){

   
//     if(el.Title.toLowerCase() == Movie_name){        
//         return el
//     }

//     })
//     if(X){
//         displayDATA(X)
//         console.log(X)
      
//     }
//  }



 
//  function handleSort(){
//    let selected = document.querySelector("#sort").value;
//    if (selected == "dec") {
//      arr.sort(function (a, b) {
//        return +b.Year - +a.Year;
//      });
//      displayDATA(arr);
//      console.log(arr);
//    }
//    if (selected == "inc") {
//      arr.sort(function (a, b) {
//        return +a.Year - +b.Year;
//      });
//      displayDATA(arr);
//      console.log(arr);
//    }
//  }



// //  https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif
