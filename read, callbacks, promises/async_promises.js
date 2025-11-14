const fs= require("fs")

function f()
{
    return new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",function(err,data)
     {
        resolve(data)
     })
    })
}

console.log(f()) //pending

//---------------.then (executed 2nd as 3000)
f().then(function(data)
{
    setTimeout(function(){ 
    console.log(data)
},3000)
})

//-----------------------async await (executed 1st as 1000)
async function as()
{
    let res= await f()
   setTimeout(function()
   {
      console.log(res)
    },1000)
}

as()