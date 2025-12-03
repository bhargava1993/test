// Promise: to achive asyncronus programming
// pending
// resolve
// reject

// syntax:
// --------
// function promise_name(){

//     return new Promise((resolve, reject)=>{
//         if(true){
//             resolve();
//         }else{
//             reject();
//         }
//     });
// }

// promise_name().then().catch().finally()

// different methods in Promise
// Promise.all
// Promise.race
// Promise.allSettled
// Promise.any


// example:
// -----------
// function moviePlan(){
//     return new Promise((resolve, reject)=>{
//         if(true){
//             resolve("you went move with your friends");
//         }else{
//             reject("no movie");
//         }
//     });
// }

// console.log(moviePlan());

// moviePlan().then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log("err--",err);
// }).finally((final)=>{
//     console.log("final------");
// });


// function add(a,b, callback){
//     console.log(a, b, callback);
//    return callback(a,b);
// }

// function logicAdd(a,b){
//     // console.log(a+b);
//     return a+b;
// }

// function add(a,b){

//     return new Promise((resolve, reject)=>{

//         if(typeof a === "number" && typeof b === "number"){
//             let result = a+b;
//             resolve(result);
//         }else{
//             reject(`input arguments datatype is wrong.
//                  please send correct values`)
//         }

//     })
// }

// // console.log(add("venu",20));

// add(10,20).then((result)=>{
//     console.log("result------",result * 10);
// }).catch((error)=>{
//     console.log("error-------",error);
// }).finally(()=>{
//     console.log("finally-------");
// });

// for
// for...of
// forEach
// map

// filter

// let products = [
//     {
//         "id": 1,
//         "name": "Aurora Desk Lamp",
//         "price": 49.99,
//         "inStock": true
//     },
//     {
//         "id": 2,
//         "name": "Cloudweave Notebook",
//         "price": 12.5,
//         "inStock": false
//     },
//     {
//         "id": 3,
//         "name": "Copperleaf Pen",
//         "price": 7.99,
//         "inStock": true
//     },
//     {
//         "id": 4,
//         "name": "Nimbus Headphones",
//         "price": 89.0,
//         "inStock": true
//     },
//     {
//         "id": 5,
//         "name": "Starlace Backpack",
//         "price": 64.5,
//         "inStock": false
//     }
// ];

// const discountProduct = (inputProducts) => {

//     return new Promise((resolve, reject) => {
//         if (Array.isArray(inputProducts)) {

//             let resultArray = inputProducts.map(ele => {
//                 ele.price = Number((ele.price/2).toFixed(1));
//                 return ele;
//             });
//             resolve(resultArray);
//         } else {
//             reject("Invalid data, please send correct data");
//         }
//     });

// }

// discountProduct(products).then((result) => {
//     console.log("result----", result);
// }).catch((error) => {
//     console.log("error----------", error);
// }).finally(() => {
//     console.log("final block");
// });

