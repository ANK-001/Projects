const express= require("express")
const {User, Course} = require("../db/index.js")
const uRouter= express.Router()
const user_mid= require("../middleware/index.js")
const jwt= require("jsonwebtoken")
const jwtPass= "123456"

uRouter.post("/signup", async(req,res) =>{
    const uname= req.body.uname
    const pass= req.body.pass

    let result= await User.findOne({uname: uname, pass: pass})

    if (result){
         res.send("User already exists!!!")
        }

    else{
       User.create({uname, pass})
       res.send("User created Successfully!!!")
    }

   
})

uRouter.post("/signin", user_mid, (req,res) =>{   //a: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmFtZSI6ImEiLCJpYXQiOjE3NTY3MjMxNzJ9.9iIeZfaUUGVYOoTbcoKZSWDwUOdAraD1Xda1tV5I4aI
    const uname= req.body.uname                   //b: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmFtZSI6ImIiLCJpYXQiOjE3NTY3MjMyMDh9.aIphurCFdeqv_k2t2kg76RJTGtHoGamp0MhQ7spHdvo
                                                  //c: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmFtZSI6ImMiLCJpYXQiOjE3NTY3MjMyNDJ9.IE-cdvRgMsem2RLQ9TBie1AFFHQy2ptFdfbMn-IP3Tc
    let token= jwt.sign({uname},jwtPass)          //d: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmFtZSI6ImQiLCJpYXQiOjE3NTY3MjMyNzZ9.1iLhOOIPFSA3bzb4tBOlXA_myT01JTki6tA1dxY2QAE

    res.json({
        token
    })

})

uRouter.get("/courses", async (req,res) =>{
    const token= req.headers.authorization
    try{
        const decoded= jwt.verify(token, jwtPass)
        if (decoded)
        {
            const result= await Course.find({})
            res.json(result)
        }
    }
    catch{
        res.send("Invalid Token")
    }
})

module.exports= uRouter
