
// 
{
    "name": "Dr. Strange",
    "powers": ["magic", "god"],
    "health": 86,
    "villains": [
      { "name": "Hela", "health": 87 },
      { "name": "Dormamu", "health": 100 }
    ],
    "metadata": { "favouriteColor": "orange", "age": 44 }
}
  
// work with embeded documents
// it will givve only exact match of the data  
// {favouriteColor :"red", age:13 }
// {favouriteColor :"red"}   
db.heros.find( { metadata : {favouriteColor :"red", age:13 } 
 } )

// jump into document into document 
// particualar Key 
// document inside document "metadata.favouriteColor"
// object of object
db.heros.find( { "metadata.favouriteColor" :"red" } )
// "metadata": { "favouriteColor": "orange", "age": 44 }
//
 db.heros.find( { "metadata.age" : {$lte:50  } } )

 // wrok with arrays , but exact match needed
 db.heros.find( { powers: ["god", "magic" ] } )

 // find in array 
 // "powers": ["magic", "god"], 
 db.heros.find( { powers: "god"  } )

// multile finds in array 
db.heros.find( { powers: { $all : ["god","magic"] } } )
// it will return only with both array in elements

// multile finds in array 
db.heros.find( { powers: { $in : ["god","magic"] } } )
// it will return any one of them matched in array

//"villains": [
//  { "name": "Hela", "health": 87 },
//  { "name": "Dormamu", "health": 100 }
//],
db.heros.find( { "villains.name": "Hela" } ) 
// return iclude hela 
db.heros.find( { "villains.name": { $all : ["Hela" , "Surtur" ] } } )
// it will return only with both array in elements


// projections  // only selective data
db.heros.find( {} , { name:1, health:-1  } )
// it will return name and health 

db.heros.find( {} , { villains:0  } )
// it will not return villains else all 