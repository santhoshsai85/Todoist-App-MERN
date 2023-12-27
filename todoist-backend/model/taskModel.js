const { default: mongoose } = require("mongoose");

const todoSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Please add name"] },
  description: String
})

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;

