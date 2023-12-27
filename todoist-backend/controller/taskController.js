const express = require("express");
const router = express.Router();
const { getTodos, upsertTodo, deleteTodo } = require("../service/taskService")

router.route("/tasks").get(getTodos).post(upsertTodo);

router.delete("/tasks/:id", deleteTodo)


module.exports = router;