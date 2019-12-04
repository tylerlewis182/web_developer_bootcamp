var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var Comment = require("../models/comment");



/* ========================================================================================= */
// COMMENTS ROUTES
/* ========================================================================================= */

// NEW - show form to create a new comment
router.get("/campgrounds/:id/comments/new", isLoggedIn, function(req, res)
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

// CREATE - handle form to create new comment
router.post("/campgrounds/:id/comments", isLoggedIn, function(req, res)
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
