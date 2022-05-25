const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  Name: String,
  ID: Number,
  Phone: Number,
  Email: String,
  IP: String,
});

module.exports = mongoose.model("Client", clientSchema);
