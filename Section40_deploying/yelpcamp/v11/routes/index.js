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
        //console.log(err);
        //return res.render("register.ejs", {"error": err.message}); // use this method for render
        req.flash("error", err.message); // this method for using flash only works when followed by a redirect
        return res.redirect("/register")
      }
      passport.authenticate("local")(req, res, function() // ')(' syntax ?? (..i think: 'passport.authenticat("local")' is a function with three args passed to it)
      {
        req.flash("success", "Welcome to YelpCamp " + user.username);
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

});

// logout route
router.get("/logout", function(req, res)
{
  req.logout();
  req.flash("success", "Logged you out!");
  res.redirect("/campgrounds");
});

module.exports = router;
