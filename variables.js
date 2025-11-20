// Variables --> It is a container used to store the values

/*
It has three ways to declare variables
1. var 
2. let 
3. const 

*/

// var --> function scoped
// let --> block scoped
// const --> block scoped

//    var keyword

// it has function scope or global scope
// it can redeclared and reassigned

// Examples

/*
var a = 10;
var b = "Sudheer";

var a = 20;
var b = "Kumar";

console.log("Line number---->28 Output--->",a);
console.log("Line number--->29 Output---->",b); 

Line number---->28 Output---> 20
Line number--->29 Output----> Kumar
*/


// let KEYWORD

// It is blockscoped
// It can re assigned but not redeclared

//  EXAMPLES

/*
let a = 10;
let b = "Sathyabama";

// let a = 20; error will get here
// Identifier 'a' has already been declared
let d = 10;
let e = "Sathyabama";

console.log("Output of 'a'---->",a);
console.log("Output of 'b'---->",b);
console.log("Output of 'd'---->",d);
console.log("Output of 'e'---->",e);

Output of 'a'----> 10
Output of 'b'----> Sathyabama
Output of 'd'----> 10
Output of 'e'----> Sathyabama
*/


// const KEYWORD

// It is block scoped 
// It cannot be redeclared and re assigned

// Examples


/*

const PI = 3.14;
console.log("Output of line number 73---->",PI);

// const PI = 3.22;  Identifier 'PI' has already been declared
// PI = 3.14; Assignment to constant variable.
// console.log(PI);

Output of line number 73----> 3.14
*/

