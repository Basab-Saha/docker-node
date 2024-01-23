const express=require('express')
const PORT=process.env.PORT || 5000;
const app=express();

app.get('/',(req,res)=>{
    res.send('Hello from nodejs container'); 
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})