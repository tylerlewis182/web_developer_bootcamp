var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");


// setup
mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// schema setup
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
});

var Campground = mongoose.model("Campground", campgroundSchema);
// Campground.create(
//   {
//     name: "Granite Hill",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbxqs8Ib2oNS_t0OnID3WMhSuyDzbNsc9fiYYiE-Thy7Bmk0FPMg",
//     description: "This is a huge granite hill. No bathrooms. No water. Beautiful granite!",
//   },
//   function(err, campground)
//   {
//     if(err)
//     {
//       console.log(err);
//     }
//     else
//     {
//       console.log("Newly created campground: ");
//       console.log(campground);
//     }
//   }
// );

// var campgrounds = [
//     {name: "Salmon Creek", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEZVfCC4Geu_Bb3wVwS-3LWCgZ33wXVOVujhgINWvVrePK0A4"},
//     {name: "Granite Hill", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbxqs8Ib2oNS_t0OnID3WMhSuyDzbNsc9fiYYiE-Thy7Bmk0FPMg"},
//     {name: "Mountain Goat's Rest", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RE6BMlrsH8M_n8BG5st9MsWuuZZvNKpLJ9Ol8H3CwQUYHP0wcA"},
//     {name: "Salmon Creek", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEZVfCC4Geu_Bb3wVwS-3LWCgZ33wXVOVujhgINWvVrePK0A4"},
//     {name: "Granite Hill", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbxqs8Ib2oNS_t0OnID3WMhSuyDzbNsc9fiYYiE-Thy7Bmk0FPMg"},
//     {name: "Mountain Goat's Rest", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RE6BMlrsH8M_n8BG5st9MsWuuZZvNKpLJ9Ol8H3CwQUYHP0wcA"},
//     {name: "Salmon Creek", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEZVfCC4Geu_Bb3wVwS-3LWCgZ33wXVOVujhgINWvVrePK0A4"},
//     {name: "Granite Hill", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbxqs8Ib2oNS_t0OnID3WMhSuyDzbNsc9fiYYiE-Thy7Bmk0FPMg"},
//     {name: "Mountain Goat's Rest", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RE6BMlrsH8M_n8BG5st9MsWuuZZvNKpLJ9Ol8H3CwQUYHP0wcA"},
//   ]

// landing page
app.get("/", function(req, res)
{
  //res.send("this will be the landing page soon!");
  res.render("landing");
});

// INDEX ROUTE - show all campgrounds
app.get("/campgrounds", function(req, res)
{
  // get all campgrounds from db
  Campground.find({}, function(err, allCampgrounds)
  {
    if(err)
    {
      console.log(err);
    }
    else
    {
      res.render("index", {campgrounds: allCampgrounds});
    }
  });
});


// CREATE ROUTE - add new campground to database
app.post("/campgrounds", function(req, res)
{
  // get data from form and add to campgrounds array
  //res.send("you hit the post route!");
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var newCampground = {name: name, image: image, description: desc};

  // create a new campground and save to database
  Campground.create(newCampground, function(err, newlyCreated)
  {
    if(err)
    {
      console.log(err);
    }
    else
    {
      // redirect back to campgrounds page
      res.redirect("/campgrounds"); // dafault redirects as GET request
    }
  });
});

// NEW ROUTE - show form to create new campground
app.get("/campgrounds/new", function(req, res)
{
  res.render("new.ejs");
});

// SHOW ROUTE -
app.get("/campgrounds/:id", function(req, res)
{
  // find the campground with the provided ID
  Campground.findById(req.params.id, function(err, foundCampground)
  {
    if(err)
    {
      console.log(err);
    }
    else
    {
      //res.send("This will be the show page one day...");
      res.render("show", {campground: foundCampground});
    }
  });
});

// run the server
app.listen(3000, function()
{
  console.log("YelpCamp server has started...");
});
