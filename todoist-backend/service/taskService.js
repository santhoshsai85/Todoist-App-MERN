const Todo = require("../model/taskModel");


const getTodos = async (req, res) => {
  const todos = await Todo.find();

  res.status(200).json(todos);
}


const upsertTodo = async (req, res) => {
  if (req.body?._id === undefined) await Todo.create(req.body);
  else await Todo.findByIdAndUpdate(req.body._id, req.body);
  res.status(201).json({message : "Upserted Task!"});
}

const deleteTodo = async (req, res) => {
  await Todo.deleteOne({_id: req.params.id});

  res.status(200).json({message: `Deleted task ${req.params.id}`});
}

module.exports = {
  getTodos,
  upsertTodo,
  deleteTodo,
}