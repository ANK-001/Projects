const express= require("express")

const app= express()
const port= 3000

app.use(express.json())

app.get("/",function(req,res)
{
    const a= req.query.a
    const head= req.headers
    const body= req.body

    console.log(head.au)
    console.log(a)

    res.json({
        name: body.name,
        roll: body.roll
    })
})

app.listen(port)
