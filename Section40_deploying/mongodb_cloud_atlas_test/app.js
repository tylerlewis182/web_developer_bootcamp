const express = require("express");
const app = express();
const mongoose = require("mongoose");

// connect to mongo atlas db
mongoose.connect("mongodb+srv://tyler:narykou7@cluster0-5hdki.mongodb.net/test?retryWrites=true&w=majority",
{
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}).then(function()
{
  console.log("Connected to DB!");
}).catch(function(err)
{
  console.log("Error: ", err.message);
})

app.get("/", function(req, res)
{
  res.send("Is this thing on?");
});


// run server
app.listen(process.env.PORT || 8000, function()
{
  console.log('Server running...');
});
