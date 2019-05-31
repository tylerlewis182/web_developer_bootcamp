// include express
var express = require("express");
var app = express();

//   "/" => "Hi, there!"
app.get("/", function(req, res) // req = request, res = response
{
  res.send("Hi, there!!!");
});

//   "/bye" => "Bye!"
app.get("/bye", function(req, res)
{
  res.send("Bye!");
});

//   "/dog" => "Woof!"
app.get("/dog", function(req, res)
{
  res.send("Woof!");
});

// send all undefined routes to an 'undefined' page
// "/*" => "That page is undefined..."
app.get("*", function(req, res)
{
  res.send("That page is undefined...");
});


// Tell express to listen for requests (start server port 3000)
app.listen(3000, function()
{
  console.log("Server has started...");
});


/*

1. Run this script in terminal using: node app.js (should see: Server has started...)
2. In chrome browser, go to: localhost:3000 (should see: "Hi, there!!!")
3. In chrome browser, go to: localhost:3000/dog (should see: "Woof!")

*/
