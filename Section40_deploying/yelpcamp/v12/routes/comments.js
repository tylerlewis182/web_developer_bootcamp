var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var middleware = require("../middleware");


/* ========================================================================================= */
// COMMENTS ROUTES
/* ========================================================================================= */

// NEW - show form to create a new comment
router.get("/campgrounds/:id/comments/new", middleware.isLoggedIn, function(req, res)
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
router.post("/campgrounds/:id/comments", middleware.isLoggedIn, function(req, res)
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
          req.flash("error", "Something went wrong");
          console.log(err);
        }
        else
        {
          // add username and id to comment
          comment.author.id = req.user._id;
          comment.author.username = req.user.username;

          // save comment
          comment.save();

          // connect new comment to campground
          campground.comments.push(comment);
          campground.save();

          // redirect to campground show page
          req.flash("success", "Successfully added comment");
          res.redirect("/campgrounds/" + campground._id);
        }
      });
    }
  })
});


// EDIT - show form to edit one comment
router.get("/campgrounds/:id/comments/:comment_id/edit", middleware.checkCommentOwnership, function(req, res)
{
  Comment.findById(req.params.comment_id, function(err, foundComment)
  {
    if(err)
    {
      res.redirect("back");
    }
    else
    {
      res.render("comments/edit.ejs", {campground_id: req.params.id, comment: foundComment});
    }
  });
});


// UPDATE - handle form to edit one comment
router.put("/campgrounds/:id/comments/:comment_id", middleware.checkCommentOwnership, function(req, res)
{
  Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, {useFindAndModify: false}, function(err, updatedComment)
  {
    if(err)
    {
      res.redirect("back");
    }
    else
    {
      res.redirect("/campgrounds/" + req.params.id);
    }
  });
});


// DESTROY -
router.delete("/campgrounds/:id/comments/:comment_id", middleware.checkCommentOwnership, function(req, res)
{
  // findByIdAndRemove
  Comment.findByIdAndRemove(req.params.comment_id, {useFindAndModify: false}, function(err)
  {
    if(err)
    {
      res.redirect("back");
    }
    else
    {
      req.flash("success", "Comment deleted");
      res.redirect("/campgrounds/" + req.params.id); // redirect to the show pages
    }
  });
});

module.exports = router;
