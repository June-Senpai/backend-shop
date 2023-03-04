const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors')
require('dotenv').config()

// ---------------------- this is express stuff --------------------------
let corsOptions = {
    origin: ['http://localhost:3000'] // origin: ['http://localhost:3000' , 'http://june.com']
}

app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// ---------------------- this is mongo db stuff --------------------------
require('./lib/db') // connect to mongo db 
require('./models/product.schema') // models collections `mongoose.model("Products",productSchema);`


// ---------------------- this is routes stuff --------------------------
app.get('/', (req, res) => {
    console.log('passed here');
    res.status(200).send("Express Working!");
});

app.use('/products', require('./routes/product.routes'));


module.exports = app;
