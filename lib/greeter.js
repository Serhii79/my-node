"use strict";

// const greeter = message => console.log(message);
// module.exports = greeter;
var _require = require('uuid'),
    uuidv4 = _require.v4;

function sayHello() {
  var id = uuidv4();
  console.log('id:', id);
  console.log('Hello from Node');
}

;

function sayBye() {
  var id = uuidv4();
  console.log('id:', id);
  console.log('Bye from Node');
}

;
module.exports = {
  sayHello: sayHello,
  sayBye: sayBye
};