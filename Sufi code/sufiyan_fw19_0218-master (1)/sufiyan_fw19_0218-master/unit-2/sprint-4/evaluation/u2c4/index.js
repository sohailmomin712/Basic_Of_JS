// All the JS Code for the Add Students Page Goes Here
document.querySelector("#form").addEventListener("submit", LOCAL_ls)

let arr = JSON.parse(localStorage.getItem("admission")) || []

let form= document.querySelector("#form") ; 

function LOCAL_ls(){
  event.preventDefault();
  
  let obj = {
     
    name : form.name.value,
    email : form.email.value,  
    phone : form.phone.value,
    course : form.course.value,
    gender : form.gender.value,
     
  }

  arr.push(obj)
  localStorage.setItem("admission", JSON.stringify(arr))


}