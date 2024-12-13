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

// ################## Event Listeners ##################

// • .addEventListener()
// • .removeEventListener()

// const btn = document.querySelector('#btn');
// const click = () => console.log('click');

// setTimeout(() => btn.removeEventListener('click', click), 5000);
// setTimeout(() => btn.click(), 3000);

// function clearList() {
//   const ul = document.querySelector('ul');
//   ul.innerHTML = '';
// }
// btn.addEventListener('click', clearList);

// btn.addEventListener('click', () => console.log('click')); // Click
// btn.addEventListener('dblclick', () => console.log('Double click')); // Mouse Double click
// btn.addEventListener('contextmenu', () => console.log('Right click')); // Mouse Right click
// btn.addEventListener('mousedown', () => console.log('Mouse down')); // Mouse Down click
// btn.addEventListener('mouseup', () => console.log('Mouse up')); // Mouse Up click
// btn.addEventListener('wheel', () => console.log('Wheel')); // Mouse wheel
// btn.addEventListener('mouseover', () => console.log('mouse over')); // Mouse over
// btn.addEventListener('mouseout', () => console.log('mouse out ')); // Mouse out

// ################## Event Obejct ##################
// e.target - element that triggered the event
// e.currentTarget - the element the event listener is attached to
// e.type - type of event trigered

// function onClick(e) {
//   console.log(e.target);
//   console.log(e.currentTarget);
//   console.log(e.type);
//   console.log(e.timeStamp);
// }
// btn.addEventListener('click', onClick);

// Event listener bubles up to body elemet
// document.body.addEventListener('click', (e) => {
//   console.log(e.target);
//   console.log(e.currentTarget);
// });

// ################## Keyboard Events ##################
// Reminder:
// • keypress - activated on pressing one time
// • keydown - activated on pressing one time and also holding
// • keyup - activated when releasing the button

// Getting pressed key value:
// • Key - e.key - gives pressed key value
// • keyCode - e.keyCode - gives key code
// • code - e.code - gives string pressed key

// const inputItem = document.querySelector('.input-item');
// inputItem.addEventListener('keypress', () => console.log('keypress')); // one time press
// inputItem.addEventListener('keydown', () => console.log('keydown')); // press and hold continues
// inputItem.addEventListener('keyup', () => console.log('keyup')); // when key released

// function onKeyDown(e) {
// key
//   console.log(e.key);
// keycode
//   console.log(e.keyCode);
// code
//   console.log(e.code);
// Shift
//   console.log(e.shiftKey);
// CTRL
//   console.log(e.ctrlKey);
// Alt
//   console.log(e.altKey);

// Combo
//   if ((e.key = 'K' && e.shiftKey)) {
//     console.log('shift K');
//   }
// }

// inputItem.addEventListener('keydown', onKeyDown);

// function showKeyCodes(e) {
//   const insert = document.querySelector('.container2');
//   insert.innerHTML = '';

//   const keyCodes = {
//     'e.key': e.key,
//     'e.keyCode': e.keyCode,
//     'e.Code': e.code,
//   };

//   for (let value in keyCodes) {
//     const div = document.createElement('div');
//     div.appendChild(document.createTextNode(`${value} : ${keyCodes[value]}`));
//     insert.appendChild(div);
//   }
// }

// window.addEventListener('keydown', showKeyCodes);

// const selectedValue = (e) => console.log(e.target.options[e.target.value].text); // returns actual selection content
// const select = document.querySelector('#option-list');
// select.addEventListener('input', selectedValue);

// ################## FormData Object ##################
// const form = document.getElementById('item-form');

// function onSubmit(e) {
//   e.preventDefault();
//   const item = document.getElementById('item-input').value;
//   const priority = document.getElementById('priority-input').value;

//   if (item === '' || priority === '0') {
//     alert('Please fill in all fields');
//     return;
//   }
// }

// function onSubmitFormData(e) {
//   e.preventDefault();

//   const formData = new FormData(form);
//   const item = formData.get('item'); // item is name='item' on input field
//   const priority = formData.get('priority'); // priority is name='priority' on input field

//   const entries = formData.entries(); // gets 'iterator' allows to loop throught it

//   for (let entry of entries) {
//     console.log(`${entry[0]}: ${entry[1]}`);
//   }
// }
// form.addEventListener('submit', onSubmitFormData);

// ################## Event Bubbling ##################
// • e.stopPropagation - stops event bubling to parent elements and upwards to the DOM

// const button = document.querySelector('form button');
// button.addEventListener('click', (e) => {
//   alert('button was clicked');
//   e.stopPropagation();
// });

// const div = document.querySelector('form div:nth-child(2)');
// div.addEventListener('click', () => alert('div was clicked'));

// const form = document.querySelector('form');
// form.addEventListener('click', () => alert('form was clikced'));

// document.body.addEventListener('click', () => alert('BUBBLING'));

// ################## Event Delegation ##################

// You can add the event listener on the parent to target the child elements
// Instead of adding to each li element separately
// let list = document.querySelector('ul');
// list.addEventListener('click', (e) => {
//   console.log(e.target);
// });

// ################## Page Loading & Window Events ##################

// // Executes after all content loaded (images, text, ect..)
// window.addEventListener('load', () => {
//   console.log('hey');
// });

// // Executes after DOM content laoded
// window.addEventListener('DOMContentLoaded', () => {
//   console.log('hey after DOM loaded');
// });

// ################## LocalStorage ##################

// localStorage.setItem('key', 'value');
// localStorage.getItem('key');
// localStorage.removeItem('key');
// localStorage.clear();

// ############################################ Asynchronous JS ############################################
// • TASK QUEUE - FIRST IN FIRST OUT (FIFO)
// • MICRO TASK QUEUE - Executes first than TASK QUEUE (Promises)
// • EVENT LOOP - Checks when to clear TASK QUEUES to send to CALL STACK
// • MEMORY HEAP
// • CALL STACK - Single threaded execution of JS
// • WEB API
// • GLOBAL EXECUTION CONTEXT

// This is still put on Micro task queue and run last even if 0ms
// setTimeout(function () {
//   console.log('Hello 123');
// }, 0);
// console.log('im first');

// function changeText() {
//   document.querySelector('h1').textContent = 'Call back is here';
// }
// const timerId = setTimeout(changeText, 3000);

// const button = document.getElementById('cancel');
// button.addEventListener('click', () => {
//   clearTimeout(timerId);
//   console.log(timerId);
// });

// ################## AJAX & XHR Object (oldschool) ##################
// const xhr = new XMLHttpRequest();
// xhr.open('GET', './movies.json');

// Ready state has 5 possible values:
// 0: - request not initialized
// 1: - server connection established
// 2: - request received
// 3: - processing request
// 4: - request finished and response is ready

// xhr.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     const data = JSON.parse(this.responseText);
//     data.forEach((movie) => {
//       const li = document.createElement('li');
//       li.innerHTML = `<strong>${movie.title}</strong> - ${movie.year}`;
//       document.querySelector('#results').appendChild(li);
//     });
//   }
// };

// xhr.send();

// function showJoke() {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

//   xhr.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       const data = JSON.parse(this.responseText);
//       const result = document.querySelector('#results');
//       result.textContent = data.value;
//     }
//   };
//   xhr.send();
// }

// const button = document.getElementById('getJoke');
// button.addEventListener('click', showJoke);

// ################## Promises ##################
// • Promise Chaining
// • Promise.all([promise, promise2, promise3])

// const promise = new Promise((resolve, reject) => {
//   // Simulates ASYNC task
//   setTimeout(() => {
//     console.log('async task complete');
//     resolve();
//   }, 1000);
// });

// promise.then(() => {
//   console.log('promise consumed');
// });

// const getUser = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;

//     if (!error) {
//       console.log('1. async task 2 complete');
//       resolve({
//         name: 'dom',
//         age: 30,
//       });
//     } else {
//       reject('2. Some err not resolved promise test');
//     }
//   }, 1000);
// });

// getUser
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((err) => console.log(err))
//   .finally(() => console.log('Promise has been resolved or rejected'));

// ################## Fetch ##################

// // Fetch
// fetch('./movies.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// // Fetching text method
// fetch('./test.txt')
//   .then((response) => response.text())
//   .then((data) => console.log(data));

// USEFUL LINK:  https://jsonplaceholder.typicode.com/

// POST
// function createPost({ title, body }) {
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title,
//       body,
//     }),
//     headers: {
//       'Content-Type': 'application/json',
//       token: 'abc123',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }

// createPost({ title: 'my post', body: 'body123' });

// ################## Error Handling ##################

// fetch('https://httpstat.us/404')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('request failed');
//     } else {
//       return response;
//     }
//   })
//   .then(() => console.log('success'))
//   .catch((err) => {
//     console.log(err);
//   });

// Catch runs on network error
// fetch('asdsafasd4.com')
//   .then((response) => {
//     return response;
//   })
//   .then(() => console.log('success'))
//   .catch((err) => {
//     console.log(err);
//   });

// ################## Async - Await ##################

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ name: 'DOM', age: 31 });
//   }, 1000);
// });
// // promise.then((data) => console.log(data));

// async function getPromise() {
//   const response = await promise;
//   console.log(response);
// }
// // getPromise();

// async function getUsers() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await response.json();
//   console.log(data);
// }
// getUsers();

// const getPosts = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await response.json();
//   console.log(data);
// };
// getPosts();

// ################## Try & Catch ##################
// try {
//   console.log(x);
// } catch (err) {
//   console.log('ERROR: ' + err);
// }

// function double(number) {
//   if (isNaN(number)) {
//     throw new Error(number + ' -- Is not a number');
//   }
//   return number * 2;
// }

// try {
//   const y = double('a');
// } catch (err) {
//   console.log(err);
// }

// const getUsers = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');

//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getUsers();

// async function getAllData() {
//   const movies = await fetch('/movies.json');
//   const moviesRes = await movies.json();

//   const actors = await fetch('/actors.json');
//   const actorsRes = await actors.json();

//   const directors = await fetch('/directors.json');
//   const directorsRes = await directors.json();
// }

// async function getAllDataPromises() {
//   const [moviesRes, actorsRes, directorsRes] = await Promise.all([
//     fetch('/movies.json'),
//     fetch('/actors.json'),
//     fetch('/directors.json'),
//   ]);

//   const movies = await moviesRes.json();
//   const actors = await actorsRes.json();
//   const directors = await directorsRes.json();

//   console.log(movies, actors, directors);
// }

// getAllData();
// getAllDataPromises();

// ########################################### OOP ###########################################

// Constructor Function
// function Shape(name, width, height) {
//   this.name = name;
//   this.width = width;
//   this.height = height;
//   this.area = () => this.width * this.height;
// }

// const shape1 = new Shape('square 1', 100, 100);
// const shape2 = new Shape('rectangle', 120, 100);

// console.log(shape2.area());
// console.log(shape1.constructor);
// console.log(shape2 instanceof Shape); // true

// ################## Boxing & Unboxing ##################
// const strLit = 'HELLO';
// const strObj = new String('HELLO');

// console.log(strLit, typeof strLit);
// console.log(strObj, typeof strObj);

// // Boxing - adds the wrapper object onto a literal
// console.log(strLit.toUpperCase());
// console.log(strLit[0]);

// // Unboxing - Object is turned back into literal
// console.log(strObj.valueOf(), typeof strObj);
// console.log(strLit.constructor);
// console.log(strObj.constructor);

// console.log(strLit instanceof String);
// console.log(strObj instanceof String);

// // Other types
// const numLit = 20;
// const numObj = new Number(20);

// console.log(numLit, typeof numLit);
// console.log(numObj, typeof numObj);

// const boolLit = true;
// const boolObj = new Boolean(boolObj);

// console.log(boolLit, typeof boolLit);
// console.log(boolObj, typeof boolObj);

// const arrLit = [1, 2, 3, 4, 5];
// const arrObj = new Array(1, 2, 3, 4, 5);

// console.log(arrLit, typeof arrLit);
// console.log(arrObj, typeof arrObj);

// const funcLit = function (x) {
//   return x * x;
// };
// console.log(funcLit, typeof funcLit);
// console.log(funcLit(5));

// const funcObj = new Function('x', 'return x*x'); //weird
// console.log(funcObj(3));

// const obj1 = {};
// const obj2 = new Object();
// console.log(obj1, typeof obj1);
// console.log(obj2, typeof obj2);

// ################## Object Properties ##################
// function Rectangle(name, width, height) {
//   this.name = name;
//   this.width = width;
//   this.height = height;
//   this.area = () => this.width * this.height;
// }
// const rec1 = new Rectangle('rectangle1', 400, 200);

// • hasOwnProperty()
// console.log(rec1.hasOwnProperty('name'));

// • Object.keys()
// console.log(Object.keys(rec1));

// • Object.values();
// console.log(Object.values(rec1));

// • Object.entries();
// console.log(Object.entries(rec1));

// logs key value pairs
// for (let [key, value] of Object.entries(rec1)) {
//   if (typeof value !== 'function') {
//     console.log(`${key} = ${value}`);
//   }
// }

// ################## Prototypes ##################
// function Rectangle(name, width, height) {
//   this.name = name;
//   this.width = width;
//   this.height = height;
// }

// // adds function to the prototype
// Rectangle.prototype.area = function () {
//   return this.width * this.height;
// };

// Rectangle.prototype.perimeter = function () {
//   return 2 * (this.width + this.height);
// };

// Rectangle.prototype.isSquare = function () {
//   return this.width === this.height;
// };

// const rec1 = new Rectangle('rectangle1', 10, 10);
// console.log(rec1.area());

// const rec2 = new Rectangle('rectangle2', 20, 20);
// console.log(rec2.area());

// other way of creating prototypes
// const rectanglePrototypes = {
//   area: function () {
//     return this.width * this.height;
//   },
//   perimeter: function () {
//     return 2 * (this.width + this.height);
//   },
//   isSquare: function () {
//     return this.height === this.width;
//   },
// };

// function createRectangle(height, width) {
//   return Object.create(rectanglePrototypes, {
//     height: {
//       value: height,
//     },
//     width: {
//       value: width,
//     },
//   });
// }

// const rect = createRectangle(10, 20);

// console.log(rect.area());

// ################## Prototypical Inheritance ##################
// function Shape(name) {
//   this.name = name;
// }

// Shape.prototype.logName = function () {
//   console.log(`shape name: ${this.name}`);
// };

// function Rectangle(name, height, width) {
//   Shape.call(this, name);
//   this.width = width;
//   this.height = height;
// }

// // Inherit from Shape
// Rectangle.prototype = Object.create(Shape.prototype);
// Rectangle.prototype.constructor = Rectangle;

// function Circle(name, radius) {
//   Shape.call(this, name);
//   this.radius = radius;
// }

// // Inherit from Shape
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

// const rect = new Rectangle('rect 1', 20, 20);
// console.log(rect);

// const circle = new Circle('circle 1', 30);
// console.log(circle);

// circle.logName();

// ################## Classes ##################

// class Rectangle {
//   constructor(name, width, height) {
//     this.name = name;
//     this.width = width;
//     this.height = height;
//   }

//   area() {
//     return this.height * this.width;
//   }

//   perimeter() {
//     return 2 * (this.width + this.height);
//   }

//   isSquare() {
//     return this.width === this.height;
//   }

//   logArea() {
//     console.log(`Rectangle Area: ${this.area()}`);
//   }
// }

// const square = new Rectangle('Square', 20, 20);

// square.logArea();

// ################## Class Inheritance ##################

// // Parent class
// class Shape {
//   constructor(name) {
//     this.name = name;
//   }

//   logName() {
//     console.log('Shape Name: ' + this.name);
//   }
// }

// // Sub class
// class Rectangle extends Shape {
//   constructor(name, width, height) {
//     super(name); // calls constructor of parent class
//     this.height = height;
//     this.width = width;
//   }
// }

// class Circle extends Shape {
//   constructor(name, radius) {
//     super(name);
//     this.radius = radius;
//   }

//   logName() {
//     console.log('Circle Name: ' + this.name); //Polymorphism
//   }
// }

// const rect = new Rectangle('rect1', 20, 20);
// console.log(rect);
// rect.logName();
// const cir = new Circle('circle 1', 33);
// cir.logName();

// console.log(rect instanceof Rectangle);
// console.log(rect instanceof Shape);

// ################## Static Methods ##################

// class Rectangle {
//   constructor(name, width, height) {
//     this.name = name;
//     this.width = width;
//     this.height = height;
//   }

//   area() {
//     return this.height * this.width;
//   }

//   static getClass() {
//     return 'Rectangle';
//   }
// }

// const rect = new Rectangle('rect1', 20, 30);
// console.log(rect.area());
// console.log(Rectangle.getClass());

// class App {
//   constructor() {
//     this.servername = 'localhost';
//     document
//       .querySelector('button')
//       .addEventListener('click', this.getServerName.bind(this));
//   }
//   getServerName() {
//     console.log(this.servername);
//   }
// }

// const app = new App();
// app.getServerName();

// ################## Getters & Setters ##################
// class Person {
//   constructor(firstName, lastName) {
//     this._firstName = firstName;
//     this._lastName = lastName;
//   }

//   get firstName() {
//     return this._firstName.charAt(0).toUpperCase() + this._firstName.slice(1);
//   }

//   set firstName(value) {
//     this._firstName = value.charAt(0).toUpperCase() + value.slice(1);
//   }
// }

// const person1 = new Person('john', 'cena');
// console.log(person1.firstName);

// person1.firstName = 'dom';
// console.log(person1.firstName);

// in Constructor Functions
// function Person(firstName, lastName) {
//   this._firstName = firstName;
//   this._lastName = lastName;

//   Object.defineProperty(this, 'firstName', {
//     get: function () {
//       return this.capitalizeFirst(this._firstName);
//     },
//     set: function () {
//       this._firstName;
//     },
//   });

//   Object.defineProperty(this, 'lastName', {
//     get: function () {
//       return this.capitalizeFirst(this._lastName);
//     },
//     set: function () {
//       this._lastName;
//     },
//   });
// }

// Person.prototype.capitalizeFirst = function (value) {
//   return value.charAt(0).toUpperCase() + value.slice(1);
// };

// const person1 = new Person('Dom', 'bal');

// console.log(person1.firstName);
// console.log(person1.lastName);

// ################## Private Property ##################

// • _property or _method - underscore is an old private method or private property convention

// • # is ES2022 for private property and methods

// class Wallet {
//   #balance = 0;
//   #transactions = [];

//   deposit(amount) {
//     this.#processDeposit(amount);
//     this.#balance += amount;
//   }

//   widthdraw(amount) {
//     if (amount > this.#balance) {
//       console.log('No money');
//       return;
//     }
//     this.#processWidthdraw(amount);
//     this.#balance -= amount;
//   }

//   #processDeposit(amount) {
//     console.log(`Depositing ${amount}`);
//     this.#transactions.push({
//       type: 'Deposit',
//       amount,
//     });
//   }
//   #processWidthdraw(amount) {
//     console.log(`Widthdrawing ${amount}`);
//     this.#transactions.push({
//       type: 'Widthdraw',
//       amount,
//     });
//   }

//   get balance() {
//     return this.#balance;
//   }

//   get transactions() {
//     return this.#transactions;
//   }
// }

// const wallet = new Wallet();
// wallet.deposit(200);
// console.log(wallet.balance);

// ################## Property Flags & Descriptors ##################
//  • Value
//  • Writable
//  • Enumerable
//  • Configurable

// console.log(Math.PI);
// Math.PI = 4;

// let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(descriptor);

// const rectObj = {
//   name: 'Rectangle',
//   width: 10,
//   height: 10,
// };

// Object.defineProperty(rectObj, 'name', {
//   writable: false,
//   configurable: false,
//   enumerable: false,
// });

// descriptor = Object.getOwnPropertyDescriptor(rectObj, 'name');
// // console.log(descriptor);

// rectObj.name = 'NEW NAME';
// delete rectObj.name;
// delete rectObj.width;
// console.log(rectObj);

// ################## Sealing & Freezing Objects ##################
// • Object.seal() - can edit existing properties
// • Object.freeze()
// • Object.isSealed()
// • Object.Frozen()

// const rectObject = {
//   name: 'Rectangle',
//   width: 10,
//   height: 10,
// };

// Object.seal(rectObject);

// // let descriptors = Object.getOwnPropertyDescriptors(rectObject);

// rectObject.color = 'red';
// delete rectObject.name;

// rectObject.width = 20;

// const circleObject = {
//   name: 'circle 1',
//   radius: 20,
// };

// Object.freeze(circleObject);

// let discriptor = Object.getOwnPropertyDescriptors(circleObject);

// circleObject.color = 'blue';
// delete circleObject.name;

// circleObject.name = 'New name';
// console.log(discriptor);

// console.log('rectObject is sealed', Object.isSealed(rectObject));
// console.log('rectObject is sealed', Object.isFrozen(circleObject));

// ################## Symbol ##################

// const sym = Symbol();
// const sym1 = Symbol('foo');
// const sym2 = Symbol('bar');

// console.log(sym, sym1, sym2);
// console.log(typeof sym);
// console.log(sym.description);
// console.log(sym1.description);

// console.log(Symbol('sym') === Symbol('sym'));

// const user = {
//   [Symbol('id')]: 1,
//   name: 'Joe',
//   email: 'joe@email.com',
// };

// user.id = 123; // Just adds another property cant change symbol id
// // Symbols are NOT enumerable

// // getOwnPropertySymbols
// console.log(Object.getOwnPropertySymbols(user));

// // Symbol.for()
// const sym3 = Symbol.for('foo');
// const sym4 = Symbol.for('foo');

// console.log(sym3 === sym4);
// Symbol.keyFor(sym3);
// Symbol.keyFor(sym1);

// ################## Iterators ##################
// const app = {
//   nextIndex: 0,

//   teams: ['Red Sox', 'Yankees', 'Astros'],

//   next() {
//     if (this.nextIndex >= this.teams.length) {
//       return { done: true };
//     } else {
//       const returnValue = { value: this.teams[this.nextIndex], done: false };
//       this.nextIndex++;
//       return returnValue;
//     }
//   },
// };

// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());

const app = {
  teams: ['Red Sox', 'Yankees', 'Astros'],
  [Symbol.iterator]: function () {
    let nextIndex = 0;
    return {
      next: () => {
        return nextIndex < this.teams.length
          ? { value: this.teams[nextIndex++], done: false }
          : { done: true };
      },
    };
  },
};
const iterator = app[Symbol.iterator]();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());

for (const team of app) {
  console.log(team);
}
