const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({

  
    name : { type: String, required: true },
    description : { type: String  },
    image : { type: String  },
    price : { type: Number,required: true, min: 1  },
    quantity : { type: Number,required: true, min: 0 , max:1000 }

},{
    versionKey: false,
    timestamps: true,
})


const Product = mongoose.model("product", productSchema);
module.exports = Product

// email should be unique
/*  

/// SCHEMA ////
Product{
       name : >> String , required
       description : >> String
       image : >> String
       price : >> Number , required, min: 1
       quantity : Number ,required,  min: 0
   }  */
