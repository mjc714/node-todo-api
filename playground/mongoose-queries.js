const { mongoose } = require('./../server/db/mongoose');
const { ObjectID } = require('mongodb');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

const id = '5a723d42758e291198c7cd72';


if (!ObjectID.isValid(id)) {
    console.log(`${id} is not valid.`);
}

// Mongoose automatically converts string id to object id.
Todo.find({
    _id: id
}).then((todos) => {
    console.log(`Todos: ${todos}`);
});

// Returns 1 document at most.
Todo.findOne({
    _id: id
}).then((todo) => {
    console.log(`Todo: ${todo}`);
});

Todo.findById(id).then((todo) => {
    if (!todo) {
        return;
    }
    console.log(`Todo by ID: ${todo}`);
}).catch((err) => console.log(err));