

let arr = JSON.parse(localStorage.getItem("admission"))

let Accepted = JSON.parse(localStorage.getItem("admission-accepted")) || []

let Rejected = JSON.parse(localStorage.getItem("admission-rejected")) || []

displayTable(arr)



//// filter sort 
function filter(){

    let Selected = document.querySelector("#filter").value;
    
    let FilteredList = arr.filter(function(el){
      return el.course == Selected
    })
   
    displayTable(FilteredList)
  
  }




function displayTable(arr){

    document.querySelector("tbody").innerHTML=""

    arr.forEach(function(elem){

        let tr=document.createElement("tr");

        let td1=document.createElement("td");
        td1.innerText=elem.name

        let td2=document.createElement("td");
        td2.innerText=elem.email

        let td3=document.createElement("td");
        td3.innerText=elem.course

        let td4=document.createElement("td");
        td4.innerText=elem.gender

        let td5=document.createElement("td");
        td5.innerText=elem.phone

        let td6=document.createElement("td");
        td6.innerText="Accept"
        td6.addEventListener("click", function(){
             Accept(elem)
        });

        let td7=document.createElement("td");
        td7.innerText="Reject"
        td7.addEventListener("click", function(){
             Reject(elem)
        });

        tr.append(td1,td2,td3,td4,td5,td6,td7);
        document.querySelector("tbody").append(tr)
    })

}


function Accept(elem){
    Accepted.push(elem)
    localStorage.setItem("admission-accepted", JSON.stringify(Accepted))
}

function Reject(elem){
    Rejected.push(elem)
    localStorage.setItem("admission-rejected", JSON.stringify(Rejected))
}

