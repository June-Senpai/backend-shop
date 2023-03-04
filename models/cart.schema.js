const mongoose= require("mongoose")

const CartSchema=new mongoose.Schema({
    id:String,
    name:String,
    description:String,
    price:Number,
    image:String,
    amount:Number,
    userid:String,
})

module.exports = mongoose.model("Cart", CartSchema);