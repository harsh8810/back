const dotenv = require('dotenv');
const express = require('express');
const app = express();

const bodyparser = require("body-parser");
app.use(bodyparser.json());
const cookie_parser = require('cookie-parser');

dotenv.config({ path : './config.env'});
const cors = require('cors');
const path = require("path");



app.use(cors());
app.use(cookie_parser());
app.use(require('./router/auth'));

const port = process.env.PORT || 3000;

app.get("/api", (req, res) => {
  res.send("Hello, World!");
});



 const mongoose = require("mongoose");


const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

//Routes go here
app.all('*', (req,res) => {
    res.json({"every thing":"is awesome"})
})

//Connect to the database before listening
connectDB().then(() => {
    app.listen(port, () => {
        console.log("listening for requests");
    })
})