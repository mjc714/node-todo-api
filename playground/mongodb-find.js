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

        const db = client.db('TodoApp');

        db.collection('Todos').find({
            _id: new ObjectID('5a6fad9ffa9cb21ef8e44a3b')
        }).toArray().then((docs) => {
            console.log('Todos');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
            if (err) {
                console.log(err);
            }
        });

        client.close();
    }
});