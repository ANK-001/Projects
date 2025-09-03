const {User}= require("../db/index.js")

async function user_mid(req, res, next){
    const uname= req.body.uname
    const pass= req.body.pass

    let result= await User.findOne({uname, pass})
    if (result==null)
    {
        res.send("Invalid usernmae/password")
    }
    else{
        next()
    }
    
}

module.exports= user_mid

