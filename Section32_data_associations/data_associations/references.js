var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2", {useNewUrlParser: true, useUnifiedTopology: true});


// POST - title, content
var postSchema = new mongoose.Schema(
{
  title: String,
  content: String,
});
var Post = mongoose.model("Post", postSchema);


// USER - email, name
var userSchema = new mongoose.Schema(
{
  email: String,
  name: String,
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  }],
});
var User = mongoose.model("User", userSchema);


// // create a new user
// User.create({
//   email: "bob@gmail.com",
//   name: "Bob Belcher",
// });


// // add a post to the new user
// Post.create({
//   title: "How to cook the best burger 3",
//   content: "jsdfjsdfjsd",
// }, function(err, post)
// {
//   User.findOne({email: "bob@gmail.com"}, function(err, foundUser)
//   {
//     if(err){console.log(err)}
//     else
//     {
//       foundUser.posts.push(post);
//       foundUser.save(function(err, data)
//         {
//           if(err){console.log(err)}
//           else{console.log(data)}
//         });
//     }
//   });
// });


// find a user and all that user's posts
User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user) // find, replace id's with actual posts, execute the code
{
  if(err){console.log(err)}
  else{console.log(user)}
});
