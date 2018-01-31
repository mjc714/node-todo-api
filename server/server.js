const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// Create Todo model.
let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
        required: true
    },
    completedAt: {
        type: Number,
        default: null
    }
});

let newTodo = new Todo({
    text: 'Walk the cat.'
});

newTodo.save().then(() => {
    console.log('Saved Todo.');
}, (err) => {
    console.log(err);
});

let User = mongoose.model('User', {
    email: {
        type: String,
        require: true,
        trim: true,
        minlength: 1
    }
});