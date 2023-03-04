const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const cors = require('cors')
require('dotenv').config()


// ---------------------- this is express stuff --------------------------
let corsOptions = {
    origin: ['http://localhost:3000']
}

app.use(cors(corsOptions))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// ---------------------- this is mongo db stuff --------------------------
require('./lib/db')
require('./models/cart.schema')
require('./models/product.schema')


// ---------------------- this is routes stuff --------------------------
app.get('/', (req, res) => {
    console.log('passed here');
    res.status(200).send("Express Working!");
});
app.use('/product', require('./routes/product.routes'));


module.exports = app;
