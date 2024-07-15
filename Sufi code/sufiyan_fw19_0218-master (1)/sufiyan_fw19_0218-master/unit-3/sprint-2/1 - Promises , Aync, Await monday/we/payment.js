

/// payment system 
// Buffering Image ----- > Success imagae 
// pay - 

// returning PIN true false
function bankServer(){

    return true 
}

let payment_promise = new Promise(function(resolve,reject){

    setTimeout(function(){    

        let pin = bankServer()   

        if (pin == true){
            resolve("Payment Successfull")
        }else{
            reject("Try Again Lager")
        }
       
    },3000)
})


// Handling the Promise
//.then .catch



let img = document.querySelector("#pay")

// // for RESOLVE ,then
// payment_promise.then(function(resolve){
//     console.log(resolve)
//     img.src = "https://c.tenor.com/xVfFIHxAzW4AAAAC/success.gif"

// })

// // for rejected ,catch
// payment_promise.catch(function(reject){
//     console.log(reject)
//     img.src = "https://c.tenor.com/mh3r7l98hiMAAAAC/bhaag-chal.gif"
// })


// Async Await
// let img = document.querySelector("#pay")

async function content(){

    try{

     let resolve = await payment_promise
     console.log(resolve)
     img.src = "https://c.tenor.com/xVfFIHxAzW4AAAAC/success.gif"


    }catch(err){
        console.log(err)
        img.src = "https://c.tenor.com/mh3r7l98hiMAAAAC/bhaag-chal.gif"
    }
}

content()






// setTimeout (function(){

//    let img = document.querySelector("#pay")
//    img.setAttribute("src", "https://c.tenor.com/xVfFIHxAzW4AAAAC/success.gif")

// },5000)