
  let arrDATA =  JSON.parse(localStorage.getItem("userdata")) || [] ;


  document.querySelector("form").addEventListener("submit",saveDATA)
  

  let formTag = document.querySelector("form")
  
  function saveDATA(event){
     event.preventDefault();
   
    let name = formTag.name.value
    let email = formTag.email.value
    let number = formTag.number.value
    let pass = formTag.password.value 
  
   if(name==="" || email ==="" || pass === ""|| number === ""){
  
      alert("Please Fill All Detais")
  
   }else{
  
    let obj = new OBJcreate(name,email,number,pass)
  
    arrDATA.push(obj);
    localStorage.setItem("userdata",JSON.stringify(arrDATA))
  
    alert("Your Successfully Sign Up")
  
    window.location.href="login.html"
   }
  
  }


     
  function OBJcreate(name,email,number,pass){
  
    this.name = name ;
    this.email = email ;
    this.number = number ;
    this.pass = pass ;
  
  }