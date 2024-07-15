

document.querySelector("form").addEventListener("submit", myDSA)

let queArr = JSON.parse(localStorage.getItem("queData")) || [] ;

// 1 st method
    display(queArr)

// 2 nd method
// window.addEventListener("load", function(){
//     display(queArr)
// })

function myDSA(event){
    event.preventDefault();

    let queOBJ = {
        queTitle : document.querySelector("#title").value,
        quelink : document.querySelector("#link").value ,
        quediff : document.querySelector("#difficulty").value

    };

  queArr.push(queOBJ);
  display(queArr)
  localStorage.setItem("queData", JSON.stringify(queArr))
  window.location.reload()
}


function display(queArr){
    queArr.forEach(function(el){
        
        let tr = document.createElement("tr")
        
        let td1 = document.createElement("td")
        td1.innerText = el.queTitle

        let td2 = document.createElement("td")
        td2.innerText = el.quelink

        let td3 = document.createElement("td")
        td3.innerText = el.quediff

        let td4 = document.createElement("td")
        if(el.quediff=="Easy"){
            td4.innerText="No"
        }else{
            td4.innerText="Yes"
        }
        
        tr.append(td1,td2,td3,td4);
        document.querySelector("tbody").append(tr);


    })
}

