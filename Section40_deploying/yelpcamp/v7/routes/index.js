var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");


// index route
router.get("/", function(req, res)
{
  res.render("landing.ejs");
});




/* ========================================================================================= */
// AUTH ROUTES
/* ========================================================================================= */

// show register form
router.get("/register", function(req, res)
{
  res.render("register.ejs");
});

// handle register form
router.post("/register", function(req, res)
{
  var newUser = new User({username: req.body.username});
  User.register(newUser, req.body.password, function(err, user)
    {
      if(err)
      {
        console.log(err);
        return res.render("register.ejs");
      }
      passport.authenticate("local")(req, res, function() // ')(' syntax ?? (..i think: 'passport.authenticat("local")' is a function with three args passed to it)
      {
        res.redirect("/campgrounds");
      });
    });
});

// show login form
router.get("/login", function(req, res)
{
  res.render("login.ejs");
});

// handle login form (using middleware)
router.post("/login", passport.authenticate("local",
{
  successRedirect: "/campgrounds",
  failureRedirect: "/login"
}), function(req, res)
{
// do nothing
});

// logout route
router.get("/logout", function(req, res)
{
  req.logout();
  res.redirect("/campgrounds");
});


/* ========================================================================================= */
// MIDDLEWARE
/* ========================================================================================= */

// check if the user is logged in
function isLoggedIn(req, res, next)
{
  if(req.isAuthenticated())
  {
    return next();
  }
  res.redirect("/login");
}


module.exports = router;
