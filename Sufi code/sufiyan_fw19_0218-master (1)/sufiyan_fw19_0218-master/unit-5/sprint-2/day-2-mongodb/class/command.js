  // 1. show dbs; // show the databases
  // 2. use DB_name // create/select a database;
  // 3. db.createCollection("users") // tyo create a users collection.
  // 4. show collections;

// CRUD
// insertOne
// insertMany

// find({ name: "ritesh"}) 
// findOne({name: "ritesh" })

// find({$or: [{name:sufi} , {age:25}] })
// will work like || will return all data both condition match 


// find({$or: [{name:sufi} , {age:25}] }).limit(5)
// will give 5 data or limited data

// updateOne({find condistion}, {$set: {changes}}) 
// updateMany({find condition}, {$set: {changes}})

// deleteOne({find condition}) 
// deleteMany({find condition})


// db.users.drop() // drop users collection
// db.dropDatabase() // drop current database

/////////////////////////////////////

// use collection 
// db.createCollection("usersCollection")
// 
// db.usersCollection.insertMany([{
//        
//  "first_name": "Saurabh",
//  "last_name": "shaikh",
//  "age": 20,
//  "gender": "men"
//   },
//   {
//   
//     "first_name": "Meher",
//     "last_name": "shaikh",
//     "age": 20,
//     "gender": "men"
//   },
//{
//
//  "first_name": "Sufi",
//  "last_name": "shaikh",
//  "age": 20,
//  "gender": "men"
//   },
//{
//  "first_name": "Naaz",
//  "last_name": "shaikh",
//  "age": 20,
//  "gender": "men"
//  
//   },
//{
//        
//  "first_name": "Saurabh",
//  "last_name": "shaikh",
//  "age": 20,
//  "gender": "men"
//   },
//{
//
//  "first_name": "Meher",
//  "last_name": "shaikh",
//  "age": 20,
//  "gender": "men"
//   },
//{
//
//  "first_name": "Sufi",
//  "last_name": "shaikh",
//  "age": 20,
//  "gender": "men"
//   },
//{
//  "first_name": "Naaz",
//  "last_name": "shaikh",
//  "age": 20,
//  "gender": "men"
//  
//   }
// ])
// 
// db.usersCollection.find()
// 
// db.usersCollection.updateOne({"name":Naaz}, {$set: {"name":Naazmin}}) 
// db.usersCollection.updateOne({"name":sufi}, {$set: {"name":sufiyan}}) 
// 
// db.usersCollection.deleteOne({"age":25})

// find({$or: [{name:sufi} , {age:25}] }).limit(5)
// will give 5 data or limited data


