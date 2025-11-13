// DataTypes

// Data type in javascript is what kind of value of a variable can store.

// Data types are Two types 
// Primitive and Non Primitive
// Primitive data types are simple and basic datatypes,It stores one single value, they are
// 1. String
// 2. Number
// 3. boolean
// 4. BigInt
// 5. Unified
// 6. Null 
// 7. Symbol


// Non Primitive datatypes are complex datatypes, It stores multiple values, they are
// 1. Arrays
// 2. Objects
// 3. Functions



var firstname = "Venukumar";
console.log(firstname);
console.log(typeof firstname);

var number = 40;
console.log(typeof number);


var car = true;
console.log(typeof car);

var num = 2746374942292.837391;
console.log(typeof num);

var bus;
console.log(bus);        // unified ( variable has been declared and no value given then it throws the output is undefined)


var car = null;
console.log(car);      // Null (variable hasbeen declared but intentionally set to have no value)


var id = Symbol("id");
console.log(typeof id);

var id = id;
console.log(typeof id);