//Hospital_Kidneys_Of_A_User
const express= require("express")

const app= express()
const port= 3000

app.use(express.json())

const u= [{
    uname: "A",
    kidneys: [{healthy: true},{healthy: false}]
}]

//getting data about no of kidneys
app.get("/",function(req,res)
{
    let k= u[0].kidneys  //kidneys
    console.log(k)
    let nk= k.length     //no_kidneys
    let nhk= 0

    for(let i=0;i<nk;i++)
    {
        if (k[i].healthy==true)
        {
            nhk+=1
        }
    }

    let nuhk= nk-nhk

    res.json({
        no_kidneys: nk,
        no_healthy_kidneys: nhk,
        no_unhealthy_kidneys: nuhk
    })
})

//allowing user to add a kidney if he is authorised only
app.post("/add",function(req,res)
{
    let un= req.headers.un
    let body= req.body
    console.log(u)

    if (un== u[0].uname)
    {
       u[0].kidneys.push(body)
       res.send("DONE!!!")
    }

    else
    {
        res.status(403).send("No authentiction for entered username")
    }
})

//making all the kidneys healthy
app.put("/update",function(req,res)
{ 
    let un= req.headers.un

    if (un== u[0].uname)
    {
        let k= u[0].kidneys  
        let nk= k.length
        
        for(let i=0;i<nk;i++)
    {
        if (k[i].healthy!=true)
        {
            k[i].healthy=true
        }
    }

    res.send("DONE!!!")
    }

    else
    {
        res.status(403).send("No authentiction for entered username")
    }
})

//allowing authenticated user to delelte all unhealthy kidneys (if present)
app.delete("/del",function(req,res)
{
    let un= req.headers.un
    let k= u[0].kidneys  
    let nk= k.length   
    
    if (un== u[0].uname)
    {
       if(uhkp(k))
        {
            let newk= []

            for(let i=0;i<nk;i++)
                {
                    if (k[i].healthy==true)
        
                        {
                            newk.push(k[i])
                        }
                }

            u[0].kidneys= newk

            res.send("Deleted all unhealthy kidneys!!!")
        }
    }

    else
    {
        res.status(403).send("No authentiction for entered username")
    }
})

//checking if user has any unhealthy kidneys or not (for deletion if found any)
function uhkp(k)
{ 
    let nk= k.length    

    for(let i=0;i<nk;i++)
    {
        if (k[i].healthy!=true)
        {
            return true
        }
    }

    if (i==n)
        {
            return false
        }
}

app.listen(port)