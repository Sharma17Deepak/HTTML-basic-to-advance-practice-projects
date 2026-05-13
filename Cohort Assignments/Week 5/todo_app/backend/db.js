const mongoose = require("mongoose");

// .env
//enter your mongoose connection url below
mongoose.connect("")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}