

let Rejected = JSON.parse(localStorage.getItem("admission-rejected")) || []


displayTable(Rejected)


function displayTable(Rejected){

    document.querySelector("tbody").innerHTML=""

    Rejected.forEach(function(elem,index){

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
        td6.innerText="Delete"
        td6.addEventListener("click", function(){
            Delete(elem)
        });


        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr)
    })

}


function Delete(index){
    
    Rejected.splice(index,1)
    localStorage.setItem("admission-rejected", JSON.stringify(Rejected))
    window.location.reload()
  }
 