var express = require("express");
var employeeTable = require("../model/table")

var router = express.Router()
router.post("/addData",(req,res) => {console.log("API Working",req.body)
var employee = new employeeTable({
    name: req.body.name,
    gender:req.body.gender 
})
employee.save().then(
    (data)=>{
        console.log("Save data" , data)
        return res.status(200).json({saveData : data})
    }
).catch((error)=>{console.log("Error data" , error)
return res.status(400).json({saveData : error})})
})

router.get("/getData", (req, res) => {
  employeeTable
    .find()
    .then((data) => {
      return res.status(200).json({ getData: data });
    })
    .catch((error) => {
      console.log("Error data", error);
      return res.status(400).json({ getData: error });
    });
});

router.post("/delData/:id",(req,res)=> {
    console.log("paramsData",req.params.id)
    employeeTable.deleteOne({_id : req.params.id}).then((data)=> {
        return res.status(200).json({ delData: "data deleted succesfully" });
    }).catch((error) => {
        console.log("Error data", error);
        return res.status(400).json({ getData: error });
    })
})

router.post("/putData/:id",(req,res)=> {
    console.log("paramsData",req.params.id)
    employeeTable.findByIdAndUpdate({_id : req.params.id},{$set:req.body},{new: true}).then((data)=> {
        return res.status(200).json({ putData: "data Updated succesfully" });
    }).catch((error) => {
        console.log("Error data", error);
        return res.status(400).json({ putData: error });
    })
})
module.exports = router;
