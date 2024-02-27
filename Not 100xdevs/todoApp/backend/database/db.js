const mongoose = require('mongoose');

mongoose.connect(
	'mongodb+srv://admin:123@100xdevs-1.evtzftc.mongodb.net/newTodoApp'
);

const TodoSchema = new mongoose.Schema({
	title: String,
	description: String,
	completed: Boolean,
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = { Todo };
