const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

// let message = 'supersecretPassword';
// let hash = SHA256(message).toString();
// console.log(`Message: ${message} | Hash: ${hash}`);

// let data = {
//     id: 4,
// };

// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data)).toString()
// };

// let resultHash = SHA256(Json.stringify(token.data))
//     .toString();

let data = {
    id: 10
};

let token = jwt.sign(data, 'helloworld!');
console.log(token);

let decoded = jwt.verify(token, 'helloworld!');

console.log(decoded);