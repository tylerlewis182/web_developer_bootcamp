/*
NOTES:
  http://www.omdbapi.com/
  http://www.omdbapi.com/?apikey=[yourkey]&s=[yourSearchTerm]
  http://www.omdbapi.com/?apikey=thewdb&s=star+wars
*/

var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");



// root
app.get("/", function(req, res)
{
  res.redirect("search");
});



// search
app.get("/search", function(req, res)
{
  res.render("search");
});




// results
app.get("/results", function(req, res)
{
  var query = req.query.search;
  var url = `http://www.omdbapi.com/?apikey=thewdb&s=${query}`;
  request(url, function(error, response, body)
  {
    if(!error && response.statusCode == 200)
    {
      var data = JSON.parse(body);
      //console.log(data);
      res.render("results", {data: data});
    }
  });
});




















app.listen(8000, function()
{
  console.log("Server started...");
});
