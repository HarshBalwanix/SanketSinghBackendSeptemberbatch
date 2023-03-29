const express=require('express');
const app = express();
const PORT=3000;

app.get('/',function(req,res){
    res.send("Welcome to home");
});

app.post('/home',function(req,res){
    res.send("Post req");
});

app.patch('/home', function(req,res){
    res.json({
        message:"this is a patch request",
        sucess:true
    })
});

app.listen(PORT,function process()
{
    console.log("Server started");
})