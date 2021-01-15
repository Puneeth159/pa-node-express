const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req,res) =>{
    res.send("Hello world from Puneeth Annam's app!");
})

app.listen(port,()=>{
    console.log(`App listening at http://localhost:${port}`);
})

app.get('/about',(req,res)=>{
    res.send("This is a about page.")
})

app.get('/help',(req,res)=>{
    res.send("You have reached the help page of Puneeth.")
})

app.get('/contact',(req,res)=>{
    res.send("You have reached the contact page of Puneeth.")
})

app.get('/help/:topic',(req,res)=>{
    res.send(`This is a help page but you have entered ${req.params.topic}`)
})