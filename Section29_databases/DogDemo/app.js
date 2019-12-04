var express = require("express");
var app = express();



// setup routes
app.get("/", function(req, res) // 'get' request to 'root' route
{
  res.send("Hello World!");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res)
{
  res.send("Welcome to a subreddit!");
  // get the request params for route: http://localhost:3000/r/dogs/comments/123/puppies_are_awesome!
  console.log(req.params);
  /* {  subredditName: 'dogs',
        id: '123',
        title: 'puppies_are_awesome!' }
  */

});

app.get("*", function(req, res)
{
  res.send("Could not find that route...");
});



// start the server
app.listen(3000, function()
{
  console.log("Server has started...");
});
