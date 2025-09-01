const express= require("express")
const jwt= require("jsonwebtoken")
const uRouter= require("./routes/user.js")
const aRouter= require("./routes/admin.js")

const app= express()
const port= 3000

app.use(express.json())
app.use("/user", uRouter)
app.use("/admin", aRouter)

app.listen(port)