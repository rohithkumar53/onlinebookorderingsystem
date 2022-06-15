const express = require("express");
const app= express();
require("dotenv").config();
const cors= require('cors');
const path = require("path");
const connection= require("./dbconnection");

app.use(express.json());
app.use(cors());
const port= process.env.PORT || 5000;

//connection to mongodb database
connection();

app.use('/api/books', require('./routes/bookRoute'));
app.use('/api/users', require("./routes/userRoute"));
app.use('/api/orders', require("./routes/ordersRoute"));

if(process.env.NODE_ENV === "production"){
    app.use(express.static('frontend/build'));
}

//port listening
app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});