// home page
// /about
// /Contact
// /temp

const express = require("express");
const app = express();
const port = 4000;

app.get("/",(req,res)=>{
    res.send("welcome to my home page")
});

app.get("/about",(req,res)=>{
    res.send("welcome to my about page")
})

app.get("/contact",(req,res)=>{
   res.send("welcome to my contact page")
});

app.get("/temp",(req,res) => {
    res.json({

        id: 34,

        name: "atul",

    });
})

// methods are identical when an object or array is passed
// but res.json() will also convert non-objects like null 
// and undefined , which are not valid JSON 

app.listen(port,()=>{
    console.log(`listening to the port no ${port}`)
});