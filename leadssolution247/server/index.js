const express =require('express')
const app =express()
const PORT = 3001

app.get("/",(req,res)=>{
    res.send("hello jkj  ")
});

app.listen(PORT,()=>{
    console.log("running")
});