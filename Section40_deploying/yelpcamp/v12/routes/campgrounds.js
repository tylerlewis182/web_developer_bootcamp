var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware"); // automatically require the 'index.js' file inside of 'middleware' dir.




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
      console.log(err);
    }
    else
    {
      res.render("campgrounds/index.ejs", {campgrounds: campgrounds});
    }
  });
});

// CREATE - add a new dog to the db, then redirect back to /campgrounds route
router.post("/campgrounds", middleware.isLoggedIn, function(req, res)
{
  // get data from form and add to campgrounds array
  // res.send("You hit the post route");
  var name = req.body.name;
  var image = req.body.image;
  var price = req.body.price;
  var desc = req.body.description;
  var author = {
    id: req.user._id,
    username: req.user.username
  }
  var newCampground = {name: name, image: image, price: price, description: desc, author: author};

  // create a new campground and add to db
  Campground.create(newCampground, function(err, newlyCreated)
  {
    if(err)
    {
      console.log(err);
    }
    else
    {
      // redirect back to campgrounds page
      res.redirect("/campgrounds");
    }
  });
});


// NEW - display form to add a new campground
router.get("/campgrounds/new", middleware.isLoggedIn, function(req, res)
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

// EDIT - display a form to edit one campground
router.get("/campgrounds/:id/edit", middleware.checkCampgroundOwnership, function(req, res)
{
  Campground.findById(req.params.id, function(err, foundCampground)
  {
    res.render("campgrounds/edit.ejs", {campground: foundCampground});
  });
});


// UPDATE - handle the form to edit one campground
router.put("/campgrounds/:id", middleware.checkCampgroundOwnership, function(req, res)
{
  // find and update the correct campground (findById then Update ... OR ... findByIdAndUpdate)
  Campground.findByIdAndUpdate(req.params.id, req.body.campground, {useFindAndModify: false}, function(err, updatedCampground)
  {
    if(err)
    {
      res.redirect("/campgrounds");
    }
    else
    {
      res.redirect("/campgrounds/" + req.params.id);
    }
  });
});


// DESTROY - delete a campground
router.delete("/campgrounds/:id", middleware.checkCampgroundOwnership, function(req, res)
{
  Campground.findByIdAndRemove(req.params.id, {useFindAndModify: false}, function(err)
  {
    if(err)
    {
      res.redirect("/campgrounds");
    }
    else
    {
      res.redirect("/campgrounds");
    }
  })
});

module.exports = router;
