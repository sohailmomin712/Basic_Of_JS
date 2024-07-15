
// get  signUPdata from local Storage to compare with logINdata
let arrDATA =  JSON.parse(localStorage.getItem("userdata")) ; 
let logINarr =  JSON.parse(localStorage.getItem("loginDATA")) || [] ;

document.querySelector("form").addEventListener("submit",loginDATA)
let formTag = document.querySelector("form")

function loginDATA(event){

  event.preventDefault();

 let email = formTag.email.value
 let pass = formTag.password.value 
 

 arrDATA.map(function(el){
 
    

      if(email ==="" || pass === ""){
      
      alert("Please Fill All Detais")
      
      }else if(email == el.email && pass == el.pass){

          let name = el.name; // take name from localStorage signup

       let obj = new OBJcreate(email,pass,name)
       
       logINarr.push(obj);
       localStorage.setItem("loginDATA",JSON.stringify(logINarr))
     
       alert("Your Successfully Log in")
       window.location.href="index.html"
        
      }else{
       alert("Email and Password is wrong");
       
      }

 })


}
  
function OBJcreate(email,pass,name){

 this.email = email ;
 this.pass = pass ;
 this.name = name;

}