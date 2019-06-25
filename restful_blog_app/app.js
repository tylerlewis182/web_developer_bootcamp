var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require("method-override");
var expressSanitizer = require("express-sanitizer");

// setup
mongoose.connect("mongodb://localhost/restful_blog_app", {useNewUrlParser: true}); // configure mongoose to use 'restful_blog_app' database
//app.set("view engine", "ejs"); // so we don't need to add '.ejs' file extensions
app.use(express.static("public")); // so we can serve our custom style sheet from 'public' directory
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
mongoose.set('useFindAndModify', false); // fixes depriciation warning
app.use(expressSanitizer());

// blog schema
var blogSchema = new mongoose.Schema(
{
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now},
});
var Blog = mongoose.model("blog", blogSchema); // compile schema into model. (collection is 'blogs')

// // create a test blog entry
// Blog.create(
//   {
//     title: "Test Blog",
//     image: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/10/12192712/Great-Pyrenees-Puppy.jpg",
//     body: "This is a test blog post!",
//   });



// routes

// INDEX ROUTE
app.get("/", function(req, res)
{
  res.redirect("/blogs"); // redirect 'localhost:3000/' to 'localhost:3000/blogs'
});

app.get("/blogs", function(req, res)
{
  // retrieve all blog posts from database
  Blog.find({}, function(err, blogs)
  {
    if(err)
    {
      console.log(err);
    }
    else
    {
      res.render("index.ejs", {blogs: blogs});
    }
  });
});

// NEW ROUTE
app.get("/blogs/new", function(req, res)
{
  res.render("new.ejs");
});

// CREATE ROUTE
app.post("/blogs", function(req, res)
{
  // create blog
  req.body.blog.body = req.sanitize(req.body.blog.body); // ensures users can't inject javascript
  Blog.create(req.body.blog, function(err, newBlog)
  {
    if(err)
    {
      res.render("new.ejs");
    }
    else
    {
      res.redirect("/blogs");
    }
  });
});

// SHOW ROUTE
app.get("/blogs/:id", function(req, res)
{
  Blog.findById(req.params.id, function(err, foundBlog)
  {
    if(err)
    {
      res.redirect("/blogs");
    }
    else
    {
      res.render("show.ejs", {blog: foundBlog})
    }
  });
});

// EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res)
{
  Blog.findById(req.params.id, function(err, foundBlog)
    {
      if(err)
      {
        res.redirect("/blogs");
      }
      else
      {
        res.render("edit.ejs", {blog: foundBlog});
      }
    });
});

// UPDATE ROUTE
app.put("/blogs/:id/", function(req, res)
{
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog)
  {
    if(err)
    {
      res.redirect("/blogs");
    }
    else
    {
      res.redirect("/blogs/" + req.params.id);
    }
  });
});


// DELETE ROUTE
app.delete("/blogs/:id", function(req, res)
{
  Blog.findByIdAndRemove(req.params.id, function(err)
  {
    if(err)
    {
      res.redirect("/blogs");
    }
    else
    {
      res.redirect("/blogs");
    }
  });
});


// start the server on port 3000 (make sure mongod is running in background before running node app.js)
app.listen(3000, function()
{
  console.log("restful blog app server started...");
});
