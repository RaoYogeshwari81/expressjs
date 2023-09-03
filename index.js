var express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
var router = require("./routes/fetcherLink");
var app = express()

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//router use
app.use("/api",router)

//DATA_BASE COLLECTION
mongoose.connect("mongodb://127.0.0.1/Yogeshwari"
);
mongoose.connection.on("connected", () => {
  console.log("CONNECTED TO DATA BASE ");
});
mongoose.connection.on("error", (err) => {
  console.log("oops! error occured", err);
});
//PORT CONNECTION
var port =  5000;
app.listen(port , () => {
  console.log(`Listining to port ${port}`);
});

module.exports = app;