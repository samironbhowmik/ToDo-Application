const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  // item: { type: String, required: true },
  item:String
});

const todoModel = mongoose.model("todoModel", todoSchema);

module.exports = todoModel