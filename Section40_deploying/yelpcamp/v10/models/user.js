var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

// define user schema
var UserSchema = new mongoose.Schema(
{
  username: String,
  password: String
});

// add local authentication methods to the user schema
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
