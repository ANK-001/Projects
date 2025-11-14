const fs= require("fs")

fs.readFile("a.txt","utf-8",function(err,data)
{
    if(!err){
        fs.writeFile("b.txt",data,function(err,data){
            console.log("done!!!!")
        })
    }
    else{ console.log(data)}
    
})