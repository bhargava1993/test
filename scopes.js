// SCOPES ----> Scopes are used to where variables can be accessed

// Three types of SCOPES 

/*
1. Global Scope 
2. Function Scope 
3. BLock Scope 
*/

// 1. GLobal Scope

// A variable declared outside any function or block is globally scope

// Example 

/*
let globalScope = "I am a global";

function showGlobal(){
    console.log("Output of function Inside---> ",globalScope);
}

showGlobal();
console.log("Output outide function --->",globalScope);


Output of function Inside--->  I am a global
Output outide function ---> I am a global
*/

// 2. Function Scope

// Variables declared inside function and access within the function only

/*

function funSc(){
    let a = "Sudheerkumar";
    console.log("Output of 38 line---->", a);
}
funSc();
Output of 38 line----> Sudheerkumar

// console.log("Output of outside function--->", a); Error: a is not defined

*/

// 3. Block Scope 

// Block scope means variable declares in inside curly braces{} and can only be accessed in Inside Block only 

// Example

/*

if (true){
    let a = 10;
    console.log("Output is inside block only-->",a);
}

// console.log("Outside block output", a); Error: a is not defined


#OUTPUTS
Output is inside block only--> 10
*/

