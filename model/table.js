const mongoose = require("mongoose");
// const schema = mongoose.Schema
const {Schema} = mongoose

var tableStructure = new Schema({
    name:{type : String},
    gender:{type : String},
    email:{type: String},
    password:{type: String}

},
{timestamps : true})

var employee = mongoose.model("EmployeeMst",tableStructure)

module.exports = employee;


