function sum(a,b)
{
    let r= a+b
    console.log("result: ",r)
}

function diff(a,b)
{
    let r= Math.abs(a-b)
    console.log("result: ",r)
}

function call(a,b,f)
{
   f(a,b)
}

call(1,7,diff)


