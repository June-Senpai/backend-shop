const mongoose= require("mongoose")

const productSchema=new mongoose.Schema({
    id:String,
    name:String,
    description:String,
    price:Number,
    image:String,
    amount:Number,
})


module.exports = mongoose.model("Products",productSchema);