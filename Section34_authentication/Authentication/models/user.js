var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

// define user schema
var UserSchema = mongoose.Schema({
  username: String,
  password: String,
});

// add passport methods to the UserSchema
UserSchema.plugin(passportLocalMongoose);

// export the User model
module.exports = mongoose.model("User", UserSchema);
