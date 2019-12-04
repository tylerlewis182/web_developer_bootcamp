var express = require("express");
var bodyParser = require("body-parser");
var app = express();

// set the view engine to .ejs
app.set("view engine", "ejs");


// use static directory
app.use(express.static("public"));

// use body parser
app.use(bodyParser.urlencoded({extended: true})); // req.body object will contain values of any type instead of just strings




var campgrounds =
[
  {name: "Salmon Creek", image: "images/campground1.jpg"},
  {name: "Granite Hill", image: "images/campground2.jpg"},
  {name: "Mountain Goat's Rest", image: "images/campground3.jpg"},
  {name: "Salmon Creek", image: "images/campground1.jpg"},
  {name: "Granite Hill", image: "images/campground2.jpg"},
  {name: "Mountain Goat's Rest", image: "images/campground3.jpg"},
  {name: "Salmon Creek", image: "images/campground1.jpg"},
  {name: "Granite Hill", image: "images/campground2.jpg"},
  {name: "Mountain Goat's Rest", image: "images/campground3.jpg"},
]






// routes
app.get("/", function(req, res)
{
  res.render("landing");
});


app.get("/campgrounds", function(req, res)
{
  res.render("campgrounds", {campgrounds: campgrounds});
});


app.post("/campgrounds", function(req, res)
{
  // get data from form and add to campgrounds array
  // res.send("You hit the post route");
  let name = req.body.name;
  let image = req.body.image;

  campgrounds.push({name: name, image: image});

  // redirect back to campgrounds page
  res.redirect("/campgrounds"); // default redirect to the GET campgrounds route

});

app.get("/campgrounds/new", function(req, res)
{
  res.render("new.ejs");
})



// start the server
app.listen(8000, function()
{
  console.log("Server started...");
});
