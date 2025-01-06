const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send('champion mera anuj');
})

app.get('/profile',(req,res)=>{
res.send('champions iska coach');
})
app.listen(300,()=>{
    console.log(`server is running on : 300`)
})<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">