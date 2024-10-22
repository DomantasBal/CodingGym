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

// MAP
// let companies = [
//   {
//     name: 'Dell',
//     employees: 33,
//   },
//   {
//     name: 'Apple',
//     employees: 22,
//   },
//   {
//     name: 'IBM',
//     employees: 848,
//   },
//   {
//     name: 'Danske',
//     employees: 13,
//   },
// ];

// let companyNames = companies.map((company) => company.name);
// console.log(companyNames);

// REDUCE
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = nums.reduce((acc, number) => acc + number, 0);
// console.log(sum);
// let cart = [
//   {
//     name: 'Wireless Headphones',
//     price: 79.99,
//   },
//   {
//     name: 'Bluetooth Speaker',
//     price: 45.5,
//   },
//   {
//     name: 'Smartphone Stand',
//     price: 12.75,
//   },
// ];

// let total = cart.reduce((acc, product) => acc + product.price, 0);
// console.log(total);

// let people = [
//   {
//     name: 'Tom',
//     age: 33,
//     email: 'tom@gmail.com',
//     city: 'NY',
//   },
//   {
//     name: 'Sarah',
//     age: 27,
//     email: 'sarah@yahoo.com',
//     city: 'Chicago',
//   },
//   {
//     name: 'Mike',
//     age: 41,
//     email: 'mike123@hotmail.com',
//     city: 'Los Angeles',
//   },
//   {
//     name: 'Emma',
//     age: 29,
//     email: 'emma.w@gmail.com',
//     city: 'San Francisco',
//   },
//   {
//     name: 'John',
//     age: 35,
//     email: 'john.doe@outlook.com',
//     city: 'Houston',
//   },
//   {
//     name: 'Lisa',
//     age: 24,
//     email: 'lisa99@gmail.com',
//     city: 'Miami',
//   },
// ];

// let youngPeople = people
//   .filter((person) => person.age < 30)
//   .map((person) => {
//     return {
//       name: person.name,
//       age: person.age,
//     };
//   });
// console.log(youngPeople);

// let names = ['coder', 'dev', 'hacker'];
// let result = names.map(
//   (word) => word[0].toUpperCase() + word.slice(1, word.length)
// );
// console.log(result);

// ############################################ DOM ############################################
// Reminder:
// let output = document.URL;
// let output = document.links;
// let output = (document.links[0].href = 'https://facebook.com');
// let output = (document.links[0].id = 'google-link');
// let output = (document.links[0].className = 'google-link-class');
// console.log(output);

// HTML collection can not use array methods. Node list can yous array methods.
// *can use Array.from() method to convert HTML collection to array though.

// let parent = document.querySelector('.parent');
// let child = document.querySelector('.first_child');
// let sibling = document.querySelector('.second_child');

// parent.firstElementChild.style.color = 'red';
// parent.lastElementChild.style.color = 'blue';

// child.parentElement.style.border = '1px solid #CCC';
// child.parentElement.style.padding = '10px';

// sibling.nextElementSibling.style.color = 'purple';
// sibling.nextElementSibling.style.fontWeight = '900';

// const container = document.querySelector('.container');
// const div = document.createElement('div');

// div.id = 'testID';
// div.setAttribute('class', 'testClass');
// const text = document.createTextNode('HELLO THERE');
// div.appendChild(text);

// container.appendChild(div);
// appendChild - always expects node it can not be html string as for example `<div></div>`

// // Quick n Dirty method - why? - it reparses and recreates all the DOM nodes inside ul element = less efficient
// const ul = document.querySelector('ul');
// function addToList(item) {
//   const li = document.createElement('li');
//   li.innerHTML = `<li>${item}</li>`;
//   ul.appendChild(li);
// }
// addToList('List item 1');

// // Clean and performant
// function createNewItem(item) {
//   const li = document.createElement('li');
//   li.appendChild(document.createTextNode(item));

//   const btn = document.createElement('button');
//   btn.className = 'btn btn-primary';
//   btn.textContent = 'CLICK CLICK';
//   li.appendChild(btn);

//   ul.appendChild(li);
// }
// createNewItem('TESSSSST ITEM');

// function replaceItem() {
//   const firstItem = document.querySelector('li:first-child');
//   const li = document.createElement('li');
//   li.textContent = 'Replaced Item';

//   firstItem.replaceWith(li);
// }

// replaceItem();

// Removing list item
// function removeItem(itemNumber) {
//   const ul = document.querySelector('ul');
//   const li = document.querySelector(`li:nth-child(${itemNumber})`);
//   ul.removeChild(li);
//   //   li.remove();
// }

// removeItem(1);

// Reminder:
// • .replaceWith()
// • .createElement()
// • .appendChild()
// • .remove()
// • .removeChild()

// ################## JS working with Styles ##################

// const text = document.querySelector('p');
// const itemList = document.querySelector('.item-list');
// const items = document.querySelectorAll('li');

// function run() {
//   className
//     itemList.className = 'dark';

//     classList
//     console.log(itemList.classList);
//     text.classList.add('dark');
//     text.classList.remove('card');
//     text.classList.toggle('dark');
//   text.classList.toggle('hidden');
// }

// document.querySelector('.btn').onclick = run;

// Reminder:
// • .className
// • .classList
// • .classList.add
// • .classList.remove
// • .classList.toggle
// • .classList.replace('current', 'replace')
