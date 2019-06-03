var express = require("express");
var app = express();
var bodyParser = require("body-parser");


// setup
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon Creek", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEZVfCC4Geu_Bb3wVwS-3LWCgZ33wXVOVujhgINWvVrePK0A4"},
    {name: "Granite Hill", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbxqs8Ib2oNS_t0OnID3WMhSuyDzbNsc9fiYYiE-Thy7Bmk0FPMg"},
    {name: "Mountain Goat's Rest", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RE6BMlrsH8M_n8BG5st9MsWuuZZvNKpLJ9Ol8H3CwQUYHP0wcA"},
    {name: "Salmon Creek", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEZVfCC4Geu_Bb3wVwS-3LWCgZ33wXVOVujhgINWvVrePK0A4"},
    {name: "Granite Hill", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbxqs8Ib2oNS_t0OnID3WMhSuyDzbNsc9fiYYiE-Thy7Bmk0FPMg"},
    {name: "Mountain Goat's Rest", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RE6BMlrsH8M_n8BG5st9MsWuuZZvNKpLJ9Ol8H3CwQUYHP0wcA"},
    {name: "Salmon Creek", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEZVfCC4Geu_Bb3wVwS-3LWCgZ33wXVOVujhgINWvVrePK0A4"},
    {name: "Granite Hill", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbxqs8Ib2oNS_t0OnID3WMhSuyDzbNsc9fiYYiE-Thy7Bmk0FPMg"},
    {name: "Mountain Goat's Rest", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RE6BMlrsH8M_n8BG5st9MsWuuZZvNKpLJ9Ol8H3CwQUYHP0wcA"},
  ]

// landing page
app.get("/", function(req, res)
{
  //res.send("this will be the landing page soon!");
  res.render("landing");
});

app.get("/campgrounds", function(req, res)
{
  res.render("campgrounds", {campgrounds: campgrounds});
});


// (added in lecture 290)
app.post("/campgrounds", function(req, res)
{
  // get data from form and add to campgrounds array
  //res.send("you hit the post route!");
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  campgrounds.push(newCampground);

  // redirect back to campgrounds page
  res.redirect("/campgrounds"); // dafault redirects as GET request
});

app.get("/campgrounds/new", function(req, res)
{
  res.render("new.ejs");
});

// run the server
app.listen(3000, function()
{
  console.log("YelpCamp server has started...");
});
