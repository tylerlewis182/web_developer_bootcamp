
var express = require("express");
var app = express();



app.get("/", function(req, res)
{
  // res.send("Welcome to the home page!");
  res.render("home.ejs"); // 'home.ejs' must be inside 'views' directory
});

// fallinlovewith/:thing
app.get("/fallinlovewith/:thing", function(req, res)
{
  var thing = req.params.thing;
  // res.send("You fell in love with " + thing);
  res.render("love.ejs", {thingVar: thing});
});



// run server
app.listen(3000, function()
{
  console.log("Server started...");
});
