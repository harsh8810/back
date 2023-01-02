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


let setup =()=>{
   const DB = process.env.MONGODB_URI;
   mongoose.set("strictQuery", true);

   mongoose
     .connect(`${DB}`, {
       useNewUrlparser: true,

       useUnifiedTopology: true,
     })
     .then(() => {
       console.log(`connected database`);
     })
     .catch((e) => {
       console.log(e);
     });
  //  console.log(`database`)
}
 
let porting = ()=>{
   app.listen(port, () => {
     console.log(`server is running at port no.3000`);
    //  console.log(`port`)
   });
}


const fixed = async()=>{
  await setup();
  await porting();
}

fixed();

