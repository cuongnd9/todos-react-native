const Todo = require('../../models/todo.model')

module.exports.index = async (req, res) => {
	const todos = await Todo.find()
	res.json(todos)
}

module.exports.post = async (req, res) => {
	const { name, isCompleted } = req.body

	const todo = new Todo({
		name,
		isCompleted
	})

	await todo.save()

	res.json({ message: 'todo created!' })
}

module.exports.getTodo = async (req, res) => {
	const { todoId } = req.params

	const todo = await Todo.findById(todoId)

	res.json(todo)
}

module.exports.updateTodo = async (req, res) => {
	const { todoId } = req.params
	const { name, isCompleted } = req.body

	const todo = await Todo.findById(todoId)
	todo.name = name
	todo.isCompleted = isCompleted

	await todo.save()

	res.json({ message: 'todo updated!' })
}

module.exports.deleteTodo = async (req, res) => {
	const { todoId } = req.params

	await Todo.deleteOne({ _id: todoId })

	res.json({ message: 'todo deleted!'})
}