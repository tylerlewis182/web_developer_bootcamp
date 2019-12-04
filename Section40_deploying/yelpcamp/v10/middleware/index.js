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
          res.redirect("back");
        }
      }
    });
  }
  else
  {
    res.redirect("back"); // redirect back to the previous page
  }
}


// check comment ownership
middlewareObj.checkCommentOwnership = function(req, res, next)
{
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
        if(foundComment.author.id.equals(req.user._id))
        {
          next();
        }
      }
    });
  }
  else
  {
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
  res.redirect("/login");
}

module.exports = middlewareObj; // contains all of the methods
