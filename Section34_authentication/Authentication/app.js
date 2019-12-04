var express = require("express");
var app = express();
var mongoose = require("mongoose");
var passport = require("passport");
var bodyParser = require("body-parser");
app.use(require("express-session")(
{
  secret: "Bailey is the best and cutest dog in the world",
  resave: false,
  saveUninitialized: false,
}));
var User = require("./models/user.js");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");


// APP SETUP
//app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true})); // so we can use: req.body.username



// AUTHENTICATION SETUP
app.use(passport.initialize()); // add this line everytime we use passport
app.use(passport.session()); // add this line everytime we use passport


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



// DATABASE SETUP
mongoose.connect("mongodb://localhost/auth_demo_app", { useNewUrlParser: true, useUnifiedTopology: true}); // connect to db





// ROUTES
app.get("/", function(req, res)
{
  res.render("home.ejs");
});

app.get("/secret", isLoggedIn, function(req, res) // when a GET request to "/secrets" comes in, isLoggedIn function (middleware) runs first. Running the "next()" function causes the anonymous function defined for this route, res.render("secrets.ejs"); , to be executed.
{
  res.render("secret.ejs");
});




// REGISTER ROUTES
app.get("/register", function(req, res) // show sign up form
{
  res.render("register.ejs");
});

app.post("/register", function(req, res) // handle user sign up form
{
  User.register(new User({username: req.body.username}), req.body.password, function(err, user)
  {
    if(err)
    {
      console.log(err);
      return res.render("register.ejs");
    }
    passport.authenticate("local")(req, res, function()
    {
      res.redirect("/secret");
    });
  });
});


// LOGIN ROUTES
app.get("/login", function(req, res)
{
  res.render("login.ejs");
});

app.post("/login", passport.authenticate("local",
{
  successRedirect: "/secret",
  failureRedirect: "/login"
}) ,function(req, res)
{

});


 // LOGOUT ROUTES
 app.get("/logout", function(req, res)
{
  req.logout();
  res.redirect("/");
});



// MIDDLEWARE
function isLoggedIn(req, res, next)
{
  if(req.isAuthenticated())
  {
    return next();
  }
  res.redirect("/login");
}


// START SERVER
app.listen(8000, function()
{
  console.log("Server started...");
});

