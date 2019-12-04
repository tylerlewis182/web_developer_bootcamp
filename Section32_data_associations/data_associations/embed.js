var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo", {useNewUrlParser: true, useUnifiedTopology: true});


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
  posts: [postSchema],
});
var User = mongoose.model("User", userSchema);




// // create a new user
// var newUser = new User({
//   email: "hermione@hogwarts.edu",
//   name: "Hermione Granger",
// });

// // add posts to the new user
// newUser.posts.push({
//   title: "How to brew potion",
//   content: "Just kidding",
// });

// newUser.save(function(err, user)
// {
//   if(err) { console.log(err); }
//   else { console.log(user); }
// });


// retrieve one of the new user's posts
User.findOne({name: "Hermione Granger"}, function(err, user)
{
  if(err)
  {
    console.log(err);
  }
  else
  {
    // add a post to the found user
    user.posts.push({ title: "3 Things I hate", content: "A A A" });

    // save the changes to the database
    user.save(function(err, savedUser)
    {
      if(err) { console.log(err); }
      else { console.log(savedUser); }
    });
  }
});






// // create a new post
// var newPost = new Post(
// {
//   title: "Reflections on apples",
//   content: "They are delicious",
// });
// newPost.save(function(err, post)
// {
//   if(err)
//   {
//     console.log(err);
//   }
//   else
//   {
//     console.log(post);
//   }
// });

