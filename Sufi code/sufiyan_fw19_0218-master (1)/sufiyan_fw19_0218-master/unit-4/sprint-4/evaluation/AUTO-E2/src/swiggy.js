
 
 function UserInfo(name,location) {
     this.name = name
     this.location = location
    
 }
 
 let user1 = new UserInfo("Jane", "Koramangala");

console.log(user1)


 
 function serveFood(food){
 
     console.log(this)
 }






function serveIn() {

}
function billNote() {}
function generateInVoice() {}

export { UserInfo, serveIn, serveFood, billNote, generateInVoice };
