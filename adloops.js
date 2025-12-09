
// let array=["a","b","c","d","e","f"];

// let names=["bhargava","venu","sudheer"];
// for(let i=0; i < array.length;i++){
//     console.log(array[i]);
// }

// for...of

// let combineArr=[];

// for(let val of array){
//     // console.log(val);
//     combineArr.push(val);
// }

// for(let val of names){
//     // console.log(val);
//     combineArr.push(val)
// }

// console.log(combineArr);

// let obj = {
//     name: "bhargava",
//     marks: 400,
//     ocupation: "se",
//     collage: "jntu",
//     "town": "bnalore"
// }

// let keys = Object.keys(obj);

// for(let i=0; i < keys.length;i++){
//     console.log(keys[i], "--",obj[keys[i]]);
// }

// for ... in

// for( let key in obj){
//     console.log(key, "----", obj[key] );
// }


// forEach:

// let array=["a","b","c","d","e","f"];

// let array=[1,2,3,4,5]
// let result=[];

// array.forEach((ele, index, arr)=>{
//     result.push(ele * 10);
// });

// console.log(array.forEach((ele, index, arr)=>{
//     return ele * 10;
// }));

//map:

// let array=["a","b","c","d","e","f"];

// let array=[1,2,3,4,5];

// let result = array.map((value, index, arr)=>{
//                 return value * 10;
//             });

// console.log("result---",result);
// console.log(array.map((value, index, arr)=>{
//                 return value * 10;
//             }));

// filter:

// let array=["venu","bhrgava","sudheer","zaiba"];

// let result = array.filter((ele,index)=>ele === "sudheer")

// console.log(result);




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
// ]

// let result = products.filter((ele, index) => {

//     if(ele["inStock"] === false){
//         return ele;
//     }
// })

// console.log(result);

// let result = products.filter((ele, index) => ele["inStock"] === false)

// console.log(result);

// let result = products.map((ele, index) => {

//     ele["discount"] = 10
//     return ele;
// })

// console.log(result);


// let array = [2, 4, 7, 9];
// let array2 = [20, 40, 70, 90];

// [{2:90},{4:70},{7:40},{9:90}]

// array2.length;
// let array2Length = array2.length - 1;

// let result = array.map((ele, index) => {
//     let obj = {};

//     // console.log(ele, array2Length - index, array2[array2Length - index]);

//     // obj[ele]=array2[index];

//     // obj[array2[index]]=ele;

//     let reverseIndex = array2Length - index;
//     obj[ele] = array2[reverseIndex];
//     // console.log(obj);

//     return obj;

// });
// console.log(result);
// // output: [{2:20},{4:40},{7:70}]

// // output: [{20:2},{40:4},{70:7}]

// // output: [{2:90},{4:70},{7:40},{9:90}]


// const numbers = [1, 2, 3, 4];

// const sum = numbers.reduce((acc, cur, index, array) => {
//     console.log("acc----------",acc);
//     console.log("cur----------",cur);
//       console.log("index----------",index);
//     console.log("array----------",array);
//     return acc+cur;
// }, 1);
// console.log("sum---",sum); // 10

// const todos = [
//   { id: 1, text: "Learn JS", done: true },
//   { id: 2, text: "Learn React", done: false },
//   { id: 3, text: "Learn Redux", done: true }
// ];


// const grouped = todos.reduce((acc, todo) => {
//     console.log("acc-----",acc);
//   const key = todo.done ? "completed" : "pending";
//   acc[key].push(todo);
//   return acc;
// }, { completed: [], pending: [] });

// console.log("grouped-----",grouped);

// let array = [
//   { id: 1, name: "Apple" },
//   { id: 2, name: "Banana" }
// ];

// let byId = array.reduce((acc, current, index)=>{
//     acc[index] = current
//     return acc;
// },{});

// console.log(byId)

// const words = ["apple", "banana", "apple", "orange", "banana"];

// let count = words.reduce((acc, cur) => {
//     acc[cur] = (acc[cur] || 0) + 1;
//     return acc;
// }, {})

// console.log(count)

// find()
// Returns the first item that matches a condition.

const users = [
    { id: 1, name: "venu" },
    { id: 2, name: "bhargava" },
    { id: 3, name: "sudheer" },
    { id: 4, name: "zaiba" },
    { id: 2, name: "ramu" },];

// let result = users.find((ele) => {
//     return ele.id == 3
// });
// console.log(result);

// let result1 = users.find((ele) =>ele.id == 4);
// console.log(result1);

// const users = [{id: 1}, {id: 2}];
// const user = users.find(u => u.id === 2);
// console.log(user); // {id: 2}


// const user = users.filter(u => u.id === 2);
// console.log(user); // [{id: 2}, {id: 2, name:"bhargava"}]


// findIndex()
// Same as find, but returns the index instead of the value.

// const nums = [10, 20, 30,40];
// console.log(nums.findIndex(n => n === 20)); // 1

// some()
// Checks if any item meets a condition. Returns true / false.

// const nums = [90, 70, 40, 60, 80, 91];

// let result = nums.some(n => n > 90);

// console.log("result----", result);

// if (result) {
//     // logic
//     console.log("get bike");
// } else {
//     // logic
//     console.log("no bike");
// }


// every()
// Checks if all items meet a condition.

// const nums = [2, 4, 6,8,100,200,201];
// console.log(nums.every(n => n % 2 === 0)); // true

// const nums = [50001,60000,500000,1000000];
// console.log(nums.every(n => n > 50000)); // true

// reduce:
// ---------
// syntax:
//  array.reduce((accmulator, currtValue, index, array) => {
//     // logic
//     // return
// }, initialValue)


// let array = [1, 2, 3, 4];


// let sum=10;
// array.map((ele, index)=>{
//       sum = sum+ele; 
// })
// console.log(sum);

//  let result = array.reduce((accmulator, currtValue) => {
//     // console.log("accmulator----",accmulator);
//     // console.log("currtValue----",currtValue);
//     // console.log("index----",index);
//     //   console.log("array----",array);
//     return accmulator*currtValue;
// }, 2);

// console.log(result);

let array = [1, 2, 25, 3, 4, 10, 14, 2, 3];

// 0>1
// 2>1
// 25>2

// 25>3
// 25>4

// let result = array.reduce((acc, cur)=>{
//     return (acc > cur) ? acc :cur;
// },0);

// console.log(result);


// const todos = [
//     { id: 1, text: "Learn JS", done: true },
//     { id: 2, text: "Learn React", done: false },
//     { id: 3, text: "Learn Redux", done: true },
//     { id: 4, text: "Learn Node.js", done: false }
// ];

// let result = todos.reduce((acc, currtValue) => {
//     const key = currtValue.done ? "completed" : "pending";
//     acc[key].push(currtValue);
//     return acc;

// }, { "completed": [], "pending": [] })

// console.log("result---------", result);


// ternary operator/ teny if:

let success = false;
let failure = false;

// if(success){
//     console.log("success");
// }else{
//     console.log("failure");
// }

// let result = success ? "success" : "failure";

// console.log(result);

// let value = 18;

// let result = (value == 10) ? "matched" : "not matched";
// console.log(result);

// if(value == 10){
//     console.log("matched");
// }else{
//     console.log("not matched");
// }



// let result=[]

// let completed=[];
// let pending=[];


// todos.forEach((ele, index)=>{
//     // console.log(ele);
//     if(ele.done){
//         completed.push(ele)
//     }else{
//          pending.push(ele)
//     }

//     if(index === 1){
//         let obj={};
//         obj["completed"] = completed;
//         let obj1={};
//         obj1["pending"] = pending;

//         result.push(obj)
//         result.push(obj1)
//     }
// })

// console.log(completed);
// console.log(pending);

// console.log(obj);
// console.log(result);

// output:
//     {
//         "completed": [
//             { id: 1, text: "Learn JS", done: true },
//             { id: 3, text: "Learn Redux", done: true }
//         ],
//         "pending": [
//             { id: 2, text: "Learn React", done: false },
//         ]
//     }


// output: [
//     {
//         "completed": [
//             { id: 1, text: "Learn JS", done: true },
//             { id: 3, text: "Learn Redux", done: true }
//         ]
//     },
//     {
//         "pending": [
//             { id: 2, text: "Learn React", done: false },
//         ]
//     }
// ]




