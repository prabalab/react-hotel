const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

module.exports = mongoose.model("Room", roomSchema);
