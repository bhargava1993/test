// IIFE (Immediately Invoked Function Expression):
// ------------------------------------------------

// normal function:
// -------------------
// function sample(){
//     console.log("sample function");
// }

// sample();

// (function sample(){
//     console.log("sample function");
// })();

// function add(a, b){
//     console.log(a+b);
// }

// add(10,20);

// (function add(a,b){
//     console.log(a+b);
// })(10,20);

// var a=10;

// (function read(){ 
//     console.log(a);
// })()



// var app = (
//     function (){
//         let count = 0;
//         return{
//             inc() {return ++count}
//         }
//     }
// )();


// console.log(app.inc());

// export function add(a,b){
//     return a+b;
// }

// add()


// function carring
// -----------------


// function sample(a){
//    return function (b){
//         return function (c){
//             return a+b+c;
//          }
//     }
// }

// console.log(sample(10)(20)(30));














