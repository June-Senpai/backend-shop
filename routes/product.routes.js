const express = require('express');
const router = express.Router();
const mongoose= require("mongoose")
const Products = mongoose.model('Products');
const Cart = mongoose.model('Cart');

//for productdata api 
router.get("/getproducts", async (req, res) => {
    try {
      console.log('passed here proooduvcusadnvuijds');

      let producstdata = await Cart.find();

        // console.log(producstdata + "data mila hain");
        res.json({success: true, data: producstdata}).status(200);
    } catch (error) {
        res.json({success: false, data: null}).status(500);
        console.log("error" + error.message);
    }
});

module.exports = router;
