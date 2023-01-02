const dotenv = require('dotenv');
const express = require('express');
const app = express();
require("./DB/conn");
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

app.get("/", (req, res) => {
  res.send("Hello, World!");
});



  // Set static folder
  // app.use(express.static("client/build"));

  // app.get("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  // });



app.listen(port, () => {
  console.log(`server is running at port no.3000`);
});