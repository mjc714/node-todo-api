const { mongoose } = require('./../server/db/mongoose');
const { ObjectID } = require('mongodb');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

const id = '';

// Remove all Todos in DB.
// Todo.remove({}).then((res) => {
//     console.log(res);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

// Todo.findOneAndRemove({ _id: id }).then((todo) => { });

Todo.findByIdAndRemove(id).then((todo) => {
    console.log(todo);
});