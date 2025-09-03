const {Course}= require("../db/index.js")
const express= require("express")
const aRouter= express.Router()

aRouter.post("/create", async (req,res) => {
    let title= req.body.titile
    let description= req.body.description

    let result= await Course.findOne({title, description})
    
        if (result){
             res.send("Course already exists!!!")
            }
    
        else{
           Course.create({
           title, description
        })
        res.send("Course created Successfully!!!")
            }
})

module.exports= aRouter
