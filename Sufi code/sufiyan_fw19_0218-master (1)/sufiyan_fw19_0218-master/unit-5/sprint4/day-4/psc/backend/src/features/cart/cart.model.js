const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({

    product : { 
        type : mongoose.Schema.Types.ObjectId,// _id
        ref: "product",
        require: true
     },
    user : { 
        type : mongoose.Schema.Types.ObjectId,// _id
        ref: "user",
        require: true
    },
    quantity : { type: Number,required: true, min: 0  }

},{
    versionKey: false,
    timestamps: true,
}
)


const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart

/// one on one RELATION SHIP

// email should be unique
/*  

/// SCHEMA ////
 Cart : {
      user : >> User, required
      product: >> Product, required
      quantity: >> Number 
   } */
