//Import package
var express = require("express");
var app = express();

//Set an initial endpoint
app.get("/",function(req, res){
  res.send("Hello world");
})
//Set port where our server will be listening
app.listen(8080);
