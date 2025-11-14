const fs= require("fs")

function f()
{
   fs.readFile("a.txt","utf-8",function(err,data)
     {
        console.log(data)
      
     })
}

setTimeout(f,3000)

