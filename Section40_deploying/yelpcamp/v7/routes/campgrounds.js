var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");





/* ========================================================================================= */
// CAMPGROUNDS ROUTES
/* ========================================================================================= */

// INDEX - display a list of all the campgrounds
router.get("/campgrounds", function(req, res)
{
  // get user information
  //console.log(req.user); // req.user is created by passport when a user logs in

  // get all campgrounds from db
  Campground.find({}, function(err, campgrounds)
  {
    if(err)
    {
      console.log("Error!!!");
      console.log(err);
    }
    else
    {
      res.render("campgrounds/index.ejs", {campgrounds: campgrounds});
    }
  });
});

// CREATE - add a new dog to the db, then redirect back to /campgrounds route
router.post("/campgrounds", function(req, res)
{
  // get data from form and add to campgrounds array
  // res.send("You hit the post route");
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var newCampground = {name: name, image: image, description: desc};

  // create a new campground and add to db
  Campground.create(newCampground, function(err, campground)
  {
    if(err)
    {
      console.log(err);
    }
    else
    {
      console.log("New campground added: ");
      console.log(campground);
    }
  });

  // redirect back to campgrounds page
  res.redirect("/campgrounds"); // default redirect to the GET campgrounds route

});


// NEW - display form to add a new campground
router.get("/campgrounds/new", function(req, res)
{
  res.render("campgrounds/new.ejs");
})


// SHOW - show information about one campground
router.get("/campgrounds/:id", function(req, res)
{
  Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground)
  {
    if(err)
    {
      console.log(err);
    }
    else
    {
      res.render("campgrounds/show.ejs", {campground: foundCampground});
    }
  });
});


module.exports = router;
