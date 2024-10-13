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
