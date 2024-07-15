
 
 function UserInfo(name,location) {
     this.name = name
     this.location = location
    
    
 }
 
 let user1 = new UserInfo("Jane", "Koramangala");

// console.log(user1)

let foodie = serveFood("Samosa")
 console.log(foodie)


function serveFood(user1){
    
    console.log(`Serving  to ${this.name} in ${this.location}`)
}

serveFood.call(user1)


function serveIn() {}
function billNote() {}
function generateInVoice() {}

export { UserInfo, serveIn, serveFood, billNote, generateInVoice };
