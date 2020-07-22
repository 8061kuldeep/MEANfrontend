const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://Kridzzy:Kridzzy8061@cluster0.ho8gy.mongodb.net/MEANapp?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
const conn = mongoose.Collection;
var userSchema = mongoose.Schema({
  email: String,
  username: String,
  address: String,
  mobno: String,
});
var userModel = new mongoose.model("userDetails", userSchema);
module.exports = userModel;
