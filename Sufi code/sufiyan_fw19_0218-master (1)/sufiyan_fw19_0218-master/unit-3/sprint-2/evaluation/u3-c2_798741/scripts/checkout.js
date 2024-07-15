

function notify(){
    event.preventDefault()

    setTimeout(function(){
        alert("Your order is confirmed")

        setTimeout(function(){
            alert("Your order is being Packed")

            setTimeout(function(){
                alert("Your order is in transit")

                     
                setTimeout(function(){
                    alert("Your order is out for delivery")

                        
                        setTimeout(function(){
                            alert("Order delivered")
                            
                        },2000)
                },2000)
            },5000)
        },3000)
    },000)
}