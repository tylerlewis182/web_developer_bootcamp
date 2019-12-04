var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
var Campground = require("./models/campground.js");
var Comment = require("./models/comment.js");
var seedDB = require("./seeds.js");


/* ========================================================================================= */
// APP SETUP
/* ========================================================================================= */

// set the view engine to .ejs
app.set("view engine", "ejs");

// use static directory
app.use(express.static("public"));

// use body parser
app.use(bodyParser.urlencoded({extended: true})); // req.body object will contain values of any type instead of just strings




/* ========================================================================================= */
// DATABASE SETUP
/* ========================================================================================= */

// seed the DB (delete previous entries and add 3 starter entries)
seedDB();

// connect to mongoose datbase 'yelp_camp'
mongoose.connect("mongodb://localhost/yelp_camp", {useNewUrlParser: true, useUnifiedTopology: true});



/* ========================================================================================= */
// CAMPGROUNDS ROUTES
/* ========================================================================================= */

app.get("/", function(req, res)
{
  res.render("landing.ejs");
});

// INDEX - display a list of all the campgrounds
app.get("/campgrounds", function(req, res)
{
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
app.post("/campgrounds", function(req, res)
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
app.get("/campgrounds/new", function(req, res)
{
  res.render("campgrounds/new.ejs");
})


// SHOW - show information about one campground
app.get("/campgrounds/:id", function(req, res)
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



/* ========================================================================================= */
// COMMENTS ROUTES
/* ========================================================================================= */

// NEW
app.get("/campgrounds/:id/comments/new", function(req, res)
{
  Campground.findById(req.params.id, function(err, campground)
  {
    if(err)
    {
      console.log(err);
    }
    else
    {
      res.render("comments/new.ejs", {campground: campground});
    }
  });
});

// CREATE
app.post("/campgrounds/:id/comments", function(req, res)
{
  // lookup campground using ID
  Campground.findById(req.params.id, function(err, campground)
  {
    if(err)
    {
      console.log(err);
      res.redirect("/campgrounds");
    }
    else
    {
      // create new comment
      Comment.create(req.body.comment, function(err, comment)
      {
        if(err)
        {
          console.log(err);
        }
        else
        {
          // connect new comment to campground
          campground.comments.push(comment);
          campground.save();
          // redirect to campground show page
          res.redirect("/campgrounds/" + campground._id);
        }
      });
    }
  })
});



/* ========================================================================================= */
// START SERVER
/* ========================================================================================= */

app.listen(8000, function()
{
  console.log("Server started...");
});
