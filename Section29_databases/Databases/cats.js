var mongoose = require("mongoose");

// connect to a database (make sure 'mongod' is running in a seperate terminal)
mongoose.connect("mongodb://localhost/cat_app"); // the 'cat_app' database will be created if it does not already exist

// define pattern for data
var catSchema = new mongoose.Schema(
{
  name: String,
  age: Number,
  temperament: String,
});

var Cat = mongoose.model("Cat", catSchema);

// // add a new cat to the database
// var george = new Cat(
// {
//   name: "Mrs. Norris",
//   age: 7,
//   temperament: "Evil",
// });
// george.save(function(err, cat)
//   {
//     if(err)
//     {
//       console.log("SOMETHING WENT WRONG!");
//     }
//     else
//     {
//       console.log("just saved a cat to the database!");
//       console.log(cat);
//     }
//   });

// retrieve all cats from the db and console.log each cat
Cat.find({}, function(err, cats)
{
  if(err)
  {
    console.log("SOMETHING WENT WRONG!");
  }
  else
  {
    console.log("all the cats...");
    console.log(cats);
  }

});
