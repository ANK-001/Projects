const express= require("express")
let jwt= require("jsonwebtoken")
let jwtpass= "1234"

const app= express()
const port= 3000

let users=
[{uname:"a", pass:1}   //token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmFtZSI6ImEiLCJpYXQiOjE3NTY2OTczMTd9.h8isLc-_rEWC8AqSQyRi_5OiBMIjygVx-iCbNCKcbmE
,{uname:"b",pass:2},   //token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmFtZSI6ImIiLCJpYXQiOjE3NTY2OTkxMjN9.80PUgcQpdz92V5dYiQkbo8YJ88CMzb6WsVJGRw8GmmI
{uname:"c",pass:3}]    //token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmFtZSI6ImMiLCJpYXQiOjE3NTY2OTczNjd9.mTwCQ4qhAx6nIOYTjuahA0IJ3L2G9rLqt5QqYY9PoL0


app.use(express.json())

function u (uname, pass)
{
    let user_exists= false

    for (let i= 0; i< users.length; i++)
    {
        if (users[i].uname== uname && users[i].pass== pass)
            {
                user_exists= true
                break
            }
    }
    return user_exists
}
 
// Signin to get jwt token
app.post("/signin", function(req, res){
    let uname= req.body.uname 
    let pass= req.body.pass
    let result= u(uname, pass)
    
    if (result){
        let token= jwt.sign({uname:uname}, jwtpass)
        res.json({token:token})
    }

    else{
        res.send("user doesnt exist")
    } 
})

//Send token to view all other users 
app.get("/data",function (req, res){
    let token= req.headers.authorization

    try{
    let decode= jwt.verify(token, jwtpass)

    if (decode)
    {
        let decoded_name= decode.uname
        res.json({users:users.filter((users)=>{
            if (users.uname== decoded_name)
            {
                return false
            }
            else{
                return true
                }
        })})
    }
    }
    
    catch{
        res.json("in catch")
    }
    

})

app.listen(port)
