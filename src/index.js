const message = 'Hello World!';

console.log(message);
// import { v4 as uuidv4 } from 'uuid';



// const { v4: uuidv4 } = require('uuid');

// function seyHello() {
//     const id = uuidv4();
//     console.log('id:', id);
//     console.log('Hello from Node');
// };

// seyHello();


const uuid = require('./greeter');
uuid.sayHello();
uuid.sayBye();