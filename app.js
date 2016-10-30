//Import package
var express = require("express");
var app = express();
app.set('view engine', 'pug');

//Set an initial endpoint
app.get("/",function(req, res){
  // res.send("Hello world");
  // File index.pug must be saved at "views"
  res.render('index.pug', { title : "My first webpage with express and pug", message: "Hello world!!!"});
})

app.post("/", function(req, res){
  res.render("index", { title : "My first POST with express and pug", message: "Hello POST world!!!"})
})
//Set port where our server will be listening
app.listen(8080);
