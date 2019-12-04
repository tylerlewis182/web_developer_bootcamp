var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");


// connect to mongoose datbase 'yelp_camp'
mongoose.connect("mongodb://localhost/yelp_camp", {useNewUrlParser: true, useUnifiedTopology: true});

// set the view engine to .ejs
app.set("view engine", "ejs");


// use static directory
app.use(express.static("public"));

// use body parser
app.use(bodyParser.urlencoded({extended: true})); // req.body object will contain values of any type instead of just strings



// setup collection schema
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
});


// compile schema into model
var Campground = mongoose.model("Campground", campgroundSchema); // collection is: 'campgrounds'


///////////////////////////////////////////////////////////////



// // add an item to the 'campgrounds' collection
// Campground.create({
//   name: "Salmon Creek",
//   image: "/images/campground1.jpg",
//   description: "This is a creek with salmon in it!",
// }, function(err, campground)
// {
//   if(err)
//   {
//     console.log("Error!!!");
//     console.log(err);
//   }
//   else
//   {
//     console.log("New campground created: ");
//     console.log(campground);
//   }
// });

/////////////////////////////////////////////////////////////






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
      res.render("index.ejs", {campgrounds: campgrounds});
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
  res.render("new.ejs");
})


// SHOW - show information about one campground
app.get("/campgrounds/:id", function(req, res)
{
  Campground.findById(req.params.id, function(err, foundCampground)
  {
    if(err)
    {
      console.log(err);
    }
    else
    {
      res.render("show.ejs", {campground: foundCampground});
    }
  });
});




// start the server
app.listen(8000, function()
{
  console.log("Server started...");
});
