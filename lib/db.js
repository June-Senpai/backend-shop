const mongoose=require("mongoose");

const DB=process.env.DATABASE;
mongoose.set('strictQuery', false);
mongoose.connect(DB).then(()=>console.log("connection is successfully done")).catch((error)=>console.log("error hai" + error.message))