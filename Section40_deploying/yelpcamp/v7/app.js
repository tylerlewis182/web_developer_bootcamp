var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var Campground = require("./models/campground.js");
var Comment = require("./models/comment.js");
var User = require("./models/user.js");
var seedDB = require("./seeds.js");

var commentRoutes = require("./routes/comments.js");
var campgroundRoutes = require("./routes/campgrounds.js");
var indexRoutes = require("./routes/index.js");

/* ========================================================================================= */
// PASSPORT AUTHENTICATION CONFIGURATION
/* ========================================================================================= */

app.use(require("express-session")(
{
  secret: "Once again Rusty wins cutest dog!",
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



/* ========================================================================================= */
// APP SETUP
/* ========================================================================================= */

// set the view engine to .ejs
app.set("view engine", "ejs");

// use static directory
app.use(express.static(__dirname + "/public"));

// use body parser
app.use(bodyParser.urlencoded({extended: true})); // req.body object will contain values of any type instead of just strings

// call this function as middleware on every route
app.use(function(req, res, next)
{
  res.locals.currentUser = req.user; // pass req.locals is available in every template
  next(); // pass control to the next middleware
});

app.use(indexRoutes);
app.use(campgroundRoutes);
app.use(commentRoutes);

/* ========================================================================================= */
// DATABASE SETUP
/* ========================================================================================= */

// seed the DB (delete previous entries and add 3 starter entries)
seedDB();

// connect to mongoose datbase 'yelp_camp'
mongoose.connect("mongodb://localhost/yelp_camp_v7", {useNewUrlParser: true, useUnifiedTopology: true});



/* ========================================================================================= */
// START SERVER
/* ========================================================================================= */

app.listen(8000, function()
{
  console.log("Server started...");
});

