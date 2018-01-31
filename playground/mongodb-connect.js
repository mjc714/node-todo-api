//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

let objID = new ObjectID();

// Object Destructure
// let user = { name: 'Potato', age: 1 };
// let { name } = user;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        console.log('Could not connect to MongoDB server.');
    } else {
        console.log('Connected to MongoDb Server');

        let db = client.db('TodoApp');
        // Create Todo collection and insert a Todo.
        // db.collection('Todos').insertOne({
        //     text: 'Testing',
        //     completed: false
        // }, (err, result) => {
        //     if (err) {
        //         console.log('Could not insert Todo.');
        //     } else {
        //         console.log(JSON.stringify(result.ops, undefined, 2));
        //     }
        // });

        // Create Users collection and insert a User.
        // db.collection('Users').insertOne({
        //     name: 'Potato',
        //     age: 14,
        //     location: 'Seattle'
        // }, (err, result) => {
        //     if (err) {
        //         console.log('Could not insert User.');
        //     } else {
        //         console.log(JSON.stringify(result.ops, undefined, 2));
        //     }
        // });

        client.close();
    }
});