// Variables
// Variable is a container to store a value and later we can modify.
// Three ways to declare variable
//
// 1.var
// 2.Let
// 3.const


// 1.var

// var firstname = "Venukumar";
// console.log("line --->2", firstname);

// var firstname = "Sudheer";
// console.log("line --->5", firstname);         // We can redeclare a varaiable

// firstname = "Jagan";
// console.log("line --->8", firstname);        // We can reintilize a value of a variable also


// 2. let

// let firstname = "Venukumar";
// console.log("line --->25", firstname);

// // let firstname = "Sudheer";                  // we cannot redeclare variable
// // console.log(firstname);

// firstname = "Sudheer";
// console.log("line --->31", firstname);              // We can reintialize a value of a variable


// 3. const

// const lastname = "Jagan";
// console.log("line --->37", lastname);

// const lastname = "Venukumar";
// console.log(lastname);                       // we cannot redeclare a variable

// lastname = "Sudheer";
// console.log(lastname);                        // we cannot reintialize a value of a variable


// Scopes
// scopes are three types
// 1. Global Scope
// 2. Function Scope
// 3. Block Level Scope


// 1.Global Scope

// let fruit = "Apple";
// console.log(fruit);           // Global scope , we can use anywhere of this variable

// function Fruitname() {
//     console.log(fruit)
//     return;
// }
// Fruitname()


// function fruit(name, colour) {
//     console.log("line---->66", name, colour)
//     return;
// }
// fruit("Grapes", "Green")






// Function Scope

// let animal = "Elephant";
// console.log(animal);

// function Animalname() {
//     let animal = "Tiger"             // Function scope , we can use variable only in that function otherwise it will not work
//     console.log(animal)
//     return;
// }
// console.log(animal)                     // It doesnot work
// Animalname()



// function carname() {
//     let car = "AUDI"
//     console.log(car)
//     if (true) {
//         console.log(car)         // It will also work

//     }
//     return;
// }
// carname()

// console.log(car);               // It will not work



// 3. Block Level Scope

// In Block level scope, we can use variable only in that block otherwise it will not work

// function cityname() {
//     let city = "Hyderabad"
//     console.log(city)                      // It will work
//     if (true) {
//         let fruit = "Orange"
//         console.log(fruit)                 // It will work
//         console.log(city)                  // It will work
//     }
//     console.log(fruit)                     // It will not work
//     return;
// }
// cityname()

// console.log(city);                     // It will not work






