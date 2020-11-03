const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/developper", function(req, res){
  res.sendFile(__dirname + "/developper.html");
});

app.get("/designer", function(req, res){
  res.sendFile(__dirname + "/designer.html");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("app.js started listening.");
});
