// const greeter = message => console.log(message);

// module.exports = greeter;
const { v4: uuidv4 } = require('uuid');

function sayHello() {
    const id = uuidv4();
    console.log('id:', id);
    console.log('Hello from Node');
};

function sayBye() {
    const id = uuidv4();
    console.log('id:', id);
    console.log('Bye from Node');
};

module.exports = {
    sayHello,
    sayBye,
};