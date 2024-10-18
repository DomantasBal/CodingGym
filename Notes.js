// ################## Data Types ##################

// Primitive types - Stored in "stack"
// String | Number | Boolean | bigInt | Symbol | Null | Undefined

// Reference types - Stored in "heap" accessed by reference
// Arrays | Functions | Objects

// Check:
// • STACK VS HEAP
// • LIFO
// • Stack overflow
// • Dynamic Memory Alocation
// • Variables in the stack contain a reference (pointer)
// • Garbage Collection (Heap)
// -----------------------------------------------------------

// ################## Type Conversion - Type Casting ##################

// String -> Number
// • ParseInt();
// • Number();

// Number -> String
// • .toString();
// • String();

// Decimal num <-> Number
//  • parseInt();
//  • parseFloat();

// Number -> Boolean
// • Boolean();

// NaN - is a property of a global window object. Non writtable and typeof is number.

// ################## Strings ##################
//  Remind:
// • Splice, Slice
// • substring();
// • trim();
// • replace();
// • includes();
// • split();
// • charAt();

// ################## Numbers ##################
// Remind:
// • toFixed();
// • Math.ceil();
// • Math.floor();
// • Math.min();
// • Math.max();
// • Math.random():

// ################## Dates & Time ##################
// • Intl.DateTimeFormat('en-US').format(date);
// • Intl.DateTimeFormat('default', {month: 'long'}).format(date);
// • date.toLocaleString('default', {weekday: 'long', year:'numeric', month:'long'});

// ################## Array Methods ##################
// Remind:
// • Splice(start, number of elements); - Mutates original array
// • Slice(start From, to End index);
// • Array.from();
// • Array.of();

// ################## Objects ##################
// • Object.assign(target, source1,source2);
// • Object.keys();
// • Object.values();
// • Object.entries();

// ################## Objects Destructuring ##################
// var:name - renames destructured variable
// obj:{property, property} - destructures nested objects

// Object Destructuring
// const person = {
//   name: 'Domantas',
//   last: 'Bal',
//   age: 99,
//   favFood: {
//     pizza: true,
//     fish: false,
//   },
// };

// const {
//   name: vardas,
//   last: pavarde,
//   age: amzius,
//   favFood: { pizza, fish },
// } = person;

// console.log(fish);

// Array Destructuring
// let [num1, num2, num3] = [33, 44, 56];
// console.log(num1);

// ################## Scope ##################
// global var abc - is added to global window object
// var - limited to function scope
// let, const - limited to block scope
// Note: JS is lexical scope not dynamic scope language

// ################## Functions ##################
// • IIFE - Imidiately invoked function expressions;
// (function (){
//     const user = 'John';
//     console.log(user);
// })();
//
// Use Case:
// Helps to avoid global scope pollution.
// Encapsulates and creates private variables.
// Module pattern in ES5 allows public and private access

// var module = (function(){
//     var privateVar = 'private';
//     var publicVar = 'public';

//     function privateFunc(){
//         console.log('I am private func run from IIFE');
//     }

//   privateFunc();

//     function publicFunc(){
//         console.log('I am public func');
//     }

//     return{
//         publicVar: publicVar,
//         publicFunc: publicFunc,
//     };
// })();

// console.log(module.publicFunc());
// console.log(module.publicVar);

// ################## Execution Context ##################

// Memory Creation Phase:

// 1. Creates the global object: In a browser, this is window, and in Node.js, it's global.

// 2. Creates the this object: In the global context, this refers to the global object (window in the browser and global in Node.js).

// 3. Sets up memory space (also known as the "Variable Environment"):
// It sets aside memory for variables and functions. Variables declared with var are initialized as undefined,
// while functions are stored with their entire definition (hoisted).
// Variables declared with let and const are not initialized until the code is executed.

// 4. Hoisting occurs: In this phase, the engine allocates memory for variables and functions.
// Function declarations are hoisted, meaning the entire function is available before the code executes,
// while variables declared with var are hoisted but initialized to undefined.

// NOTE: If you use var instead of let or const then var is binded to the global object

// Execution Phase:

// 1. Executes code line by line: After memory allocation,
// the JavaScript engine begins executing the code,
// line by line, assigning values to variables, calling functions.

// 2. Creates a new execution context for each function call:
// Whenever a function is invoked, a new execution context is created.
// This new context will have its own memory for variables and its own this value.

// ################## Call Stack ##################
// • Stack of functions to be executed
// • Manages execution contexts
// • Stacks ar LIFO - Last in First out

// ################## Switch ##################
// Reminder using switch
// function calculator(num1, num2, operator) {
//   let result = 0;

//   switch (operator) {
//     case '+':
//       result = num1 + num2;
//       break;

//     case '-':
//       result = num1 - num2;
//       break;

//     case '*':
//       result = num1 * num2;
//       break;

//     case '/':
//       result = num1 / num2;
//       break;

//     default:
//       result = 'please input correct operator';
//   }

//   return result;
// }

// console.log(calculator(64, 99, '*'));

// ################## Coalescing operator ##################
//  ||= - assigns right side only if the value is falsy
// let a = false;
// a ||= 10;
// console.log(a);

// ??|| - assigns right side only if the value is null or undefined
// let b = 1;
// b ??= 20;
// console.log(b);

// const arr = ['lemon', 'apple', 'orange'];

// const obj = {
//   name: 'domantas',
//   age: 99,
// };

// ################## Loops ##################
// Array
// for OF - returns values
// for IN - returns index
// for (let item of arr) {
//   console.log(item);
// }

// Objects
// for OF - returns values
// for IN - returns index
// *Object.values() - returns array of values
// for (let item of Object.values(obj)) {
//   console.log(item);
// }

// Object to return key value pair
// for (let item in obj) {
//   console.log(item, obj[item]);
// }

// ################## Array Methods ##################
let companies = [
  {
    name: 'Dell',
    employees: 33,
  },
  {
    name: 'Apple',
    employees: 22,
  },
  {
    name: 'IBM',
    employees: 848,
  },
  {
    name: 'Danske',
    employees: 13,
  },
];

let companyNames = companies.map((company) => company.name);
console.log(companyNames);
