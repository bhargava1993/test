// Importing the function


// import { square } from "./iife";
// square(4);


// clouser

// var a = 10;

// function outer() {
//     let c = 30;
//     console.log("outer ----", a);
//     console.log("outer c value ------", c);
//     // console.log("outer b value------", b);        //error by using let
//     function inner() {
//         let b = 20;
//         console.log("inner ----", a);
//         console.log("inner b value----", b);
//         console.log("inner c value -----", c);

//         {
//             let d = 40;
//             console.log("block d value ------", d);
//             console.log("block c value-----", c)
//         }
//         // console.log(d);         //error by using let 
//     }
//     inner();
//     // console.log(d);               // error 
// }
// outer();




// function outer() {
//     let counter = 0;
//     console.log("outer -------", counter);
//     function inner() {
//         ++counter;
//         console.log("inner ------", counter);
//     }
//     return inner;
// }

// const count = outer();
// console.log(count);
// console.log(count);
// count();
// count();
// console.log(count);
// count();
// count();

// console.log(count());



// function outer() {
//     let count = 1;
//     console.log("outer ---------", count);
//     function inner() {
//         --count;
//         console.log("innner -------", count);
//     }
//     return inner;
//     // return count;
// }

// const counter = outer();
// console.log(counter);
// console.log(counter);
// console.log(counter);
// counter();
// counter();
// counter();


// function createBankAccount() {
//     let balance = 0;
//     console.log("intial balannce is ---", balance);
//     return {
//         deposit(amount) {
//             balance = balance + amount;
//             console.log("deposit ----", balance);
//         },
//         withDraw(amount) {
//             balance = balance - amount;
//             console.log("withDraw ------", balance);
//         }
//     }
// }
// let check = createBankAccount();
// check.deposit(100);
// check.withDraw(40);



// for (var i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }
// It prints all values are 10,because of var keyword is a global scope variabe.
// // It doesnot create each time a new varibale.
// for (let i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }

// It prints the normal format ,beacause let keyword is a functional scope variable.
// It creates each time a new variable.




// By acheiving normal format by using var keyword.
// Here we have to use Immediate Invoked Function Expression.

for (var i = 0; i < 10; i++) {
    (function (x) {
        setTimeout(() => {
            console.log(x);
        }, 1000)
    })(i);
}