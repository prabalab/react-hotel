const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  title: String,
  description: String,
});

module.exports = mongoose.model("Home", homeSchema);
