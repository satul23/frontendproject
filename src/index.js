const express = require("express");
const path = require("path");
var hbs = require("hbs");
const app = express();
const port = 2000;

const staticPath = path.join(__dirname,"../public");
const templatepath = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname ,"../templates/partials");

// to set the vieqw engine

app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partials_path);

// app.engine('html', require('hbs').__express);

// template engine route

app.use(express.static(staticPath));

app.get("/", (req,res)=>{
    res.render("index")
});

app.get("/about" ,(req,res)=>{
    res.render('about');
});

app.get("/pricing", (req,res) => {
    res.render("pricing")
});

app.get("/signin", (req,res) => {
    res.render("signin")
});

// app.get("*", (req,res)=>{
//     res.render("404", {
//         errorcomment : "page not found"
//     })

// })

// app.get("/about/*" ,(req,res) => {
//     res.render("404", {
//         errorcomment: "opps this about page not found "
//     });
// })
  


// app.use(express.static(staticPath));

// app.get('/', (req,res)=>{
//     res.send("hello from express js")
// })

app.listen(port,()=>{
    console.log(`listening to the port ${port}`)
})