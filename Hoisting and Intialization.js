// Intializing

// intailizing means assigns a value in the same variable name


// Hoisting

// Hoisting is an internal mechanism, when we declare a variable using "var" keyword then it internally move top of the scope or code.
// It will work only using "var" keyword.
// It will will not work in "let" and "const" keyword.
// It will works only on variables and fuctions.

// 'use strict';
// a = 100;
// console.log(a);
// a = 200;                
// console.log(a)
// It shows an error because we will use keyword "use strict",we cannot redeclare.



// a = 50;
// console.log(a);
// // output ---> 50


// console.log(f);
// var f = 90;
// output ----> undefined


// var f = 50;
// console.log(f);
// output ----> 50

// a = 60;
// console.log(a);
// // output ----> 60

// var a = 20;
// console.log(a);
// // output ----> 20

// g = 100;
// var g;                  // By using "var" keyword ,we can able to access variable brfore and after declaring it.
// console.log(g);
// output ---> 100

// var a;
// a = 20;
// console.log(a);
// // output ----> 20


// let b;
// b = 40;
// console.log(b);      // By using "let" keyword , we cannot able to access variable before declaring it.
// output -----> 40


// c = 40;
// let c;
// console.log(c);
// It throws error  because of we cannot access variable "c" before declaring it.


// By using "const" keyword , we cannot able to access variable before and after declaring it.
// By using "const" keyword, we must have give value when we declaring the variable.


// const numbers;
// numbers = 70;
// console.log(e);
// It throws error because a "const" variable cannot be declared without giving a value at the same time.

// d = 30;
// const d;
// console.log(d);
// It throws error because of we cannot access variable "d" before declaring it.

// const vk = 50;
// console.log(vk);       // This is the only correct way to declare the variable using "const" keyword.




// var subject = "English";
// console.log(subject);


// console.log(subject);           // Hoisted variable only not the value
// var subject = "Maths";
// output ---> Undefined


subject = "Social";
console.log(subject);        // Hoisted variable
var subject;

// output ----> Social




// fruitname("Apple");            // The hoisting will works on functions also.

// function fruitname(name) {
//     console.log("line --->78", name);
//     return;
// }
// fruitname("Orange");

//  output ---> Apple
//              Orange