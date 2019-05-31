
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

// posts
app.get("/posts", function(req, res)
{
  var posts =
  [
    {title: "Post 1", author: "Susy"},
    {title: "Post 2", author: "Charlie"},
    {title: "Post 3", author: "Colt"},
  ];
  // res.send("You fell in love with " + thing);
  res.render("posts.ejs", {posts: posts});
});



// run server
app.listen(3000, function()
{
  console.log("Server started...");
});
