var Campground = require("../models/campground");
var Comment = require("../models/comment");


// all the middleware goes here
var middlewareObj = {};

// check campground ownership
middlewareObj.checkCampgroundOwnership = function(req, res, next)
{
  // check if a user is logged in
  if(req.isAuthenticated())
  {
    Campground.findById(req.params.id, function(err, foundCampground)
    {
      if(err)
      {
        req.flash("error", "Campground not found");
        res.redirect("back"); // redirect back to the previous page
      }
      else
      {
        // check if this user owns the campground
        if(foundCampground.author.id.equals(req.user._id))
        {
          next();
        }
        else
        {
          req.flash("error", "You don't have permission to do that");
          res.redirect("back");
        }
      }
    });
  }
  else
  {
    req.flash("error", "You need to be logged in to do that");
    res.redirect("back"); // redirect back to the previous page
  }
}


// check comment ownership
middlewareObj.checkCommentOwnership = function(req, res, next)
{
  // check if user is logged in
  if(req.isAuthenticated())
  {
    Comment.findById(req.params.comment_id, function(err, foundComment)
    {
      if(err)
      {
        res.redirect("back");
      }
      else
      {
        // check if the user owns the comment
        if(foundComment.author.id.equals(req.user._id))
        {
          next();
        }
        else
        {
          req.flash("error", "You don't have permission to do that");
          res.redirect("back");
        }
      }
    });
  }
  else
  {
    req.flash("error", "You need to be logged in to do that");
    res.redirect("back");
  }
}


// check if the user is logged in
middlewareObj.isLoggedIn = function(req, res, next)
{
  if(req.isAuthenticated())
  {
    return next();
  }
  req.flash("error", "You need to be logged in to do that");// flash message shows up on the next page. 'error' is key, "Please Login First!" is message.  Access inside "/login" route definition using:  req.flash("error")
  res.redirect("/login");
}

module.exports = middlewareObj; // contains all of the methods
