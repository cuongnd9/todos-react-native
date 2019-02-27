const express = require('express')
const controller = require('../controllers/todo.controller')

const router = express.Router()

router.route('/')
  .get(controller.index)
  .post(controller.post)

router.route('/:todoId')
  .get(controller.getTodo)
  .put(controller.updateTodo)
  .delete(controller.deleteTodo)

module.exports = router