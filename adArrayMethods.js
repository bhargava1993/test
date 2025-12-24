// let array = ["Apple", "Banana", "Grapes", "Pineaplle"];

// array.forEach((ele) => {
//     console.log(ele);
// })

// array.forEach((ele, index) => {
//     console.log(ele, "-----", index);
// })


// array.forEach((ele, index, arr) => {
//     console.log(ele, "---", index, arr);
// })



// array.forEach((ele, index, arr) => {
//     console.log(ele, "---", index, arr);
// });







// array = [10, 20, 30, 40];

// array.map((ele, index) => {
//     console.log(ele, "---", index);
// })

// let fruits = array.map((ele) => {
//     return ele + 10;
// })
// console.log(fruits);

// let fruits = array.map((ele) => {
//     console.log(ele + 10);             // incase we won't give return it will not execute output is an array.
// })
// console.log(fruits);


// Both forEach and map functions are used in looping only, but the main difference is like forEach,
// it will not give output in an array
// and map, it will give output in an array

// Filter,is also used in looping purpose, when we want find  the values,we need to use filter
// filter is used when the value is exist or not in an array 
// It will give output in only matched conditions



// array = [10, 20, 30, 40];

// array.filter((ele, index, arr) => {
//     console.log(ele, "----", index, arr);
// })


// let num = array.filter((ele) => {
//     return ele === 40;
// });
// console.log(num);


// let num = array.filter((ele) => {
//     return ele >= 20;
// });
// console.log(num);










// reduce

// const todos = [
//     { id: 1, text: "Learn JS", done: true },
//     { id: 2, text: "Learn React", done: false },
//     { id: 3, text: "Learn Redux", done: true },
//     { id: 4, text: "Learn Node.js", done: false }
// ];

// todos.reduce((accumulator, currentValue, index, array) => {
//     // console.log("accu ----------", accumulator);
//     // console.log("curr --------------", currentValue);
//     // console.log("index -------", index);
//     console.log("array -----", array);

// }, 2);
// let completed = {};
// let pending = {};

// todos.reduce((accumulator, currentValue, index, array) => {
//     if (currentValue.done === true) {
//         obj['completed'].push(currentValue);

//     } else {
//         obj["pending"].push(currentValue);
//     }

// }, 2);



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


// let result = todos.reduce((acc, currValue) => {
//     // const key = currValue.done ? "completed" : "pending";
//     if (currValue.done === true) {
//         acc["completed"].push(currValue);
//     } else {
//         acc["pending"].push(currValue);
//     }
//     return acc;
// }, { "completed": [], "pending": [] })

// console.log(result);



// let array = [10, 39, 47, 29, 34, 13, 44, 2];


// let result = array.reduce((acc, currValue) => {
//     return acc;
// }, 0)
// console.log(result);

// let result = array.reduce((acc, curr) => {
//     return (acc > curr) ? acc : curr
// }, 0)
// console.log(result);


// let result = array.reduce((acc, curr) => {
//     if (curr > acc) {
//         return curr;
//     }
//     return acc;
// }, 0)
// console.log(result);


// let result = array.reduce((acc, curr) => {
//     if (curr < acc) {
//         return curr;
//     }
//     return acc;
// });
// console.log(result);



// let array = [10, 39, 47, 29, 34, 13, 44, 2];


// let fruits = [
//     { id: 1, "apple": "Red" },
//     { id: 2, "banana": "Yellow" }
// ]

// let result = fruits.find((ele) => {
//     return ele.id < 2;
// });
// console.log(result);

// let result = array.find((ele) => {
//     return ele > 2;
// });
// console.log(result);


// let result = array.findIndex((ele) => {
//     return ele === 2;
// });
// console.log(result);


// let result = array.some((ele) => {
//     return ele > 4;
// })
// console.log(result);

// let result = array.every((ele) => {
//     return ele > 1;
// });
// console.log(result);


// let result = array.every((ele) => {
//     return ele > 10;
// });
// console.log(result);


let array=["Apple","Banana","Carrot","Grapes","Sapota","jackFruit"];

// array.forEach((ele)=>{
//     console.log(ele);
// });


// array.map((ele)=>{
//     console.log(ele);
// })

// array.filter((ele)=>{
//     console.log(ele)
// })


// let num=[10,20,30,40];
// array.forEach((ele,index,arr)=>{
//     console.log(ele+10)


// })

// var a=[];
// num.forEach(num=>{
//     // console.log(num+10)
//     // let a=[]
//     a.push(num*10)
// })
// console.log(a);




// num.forEach(nums=>{
//     console.log(nums*2);
// })


// array.forEach((ele,index,arr)=>{
//     console.log(arr)

// })




// let num=[10,20,30,40];
// let a=[];

// num.forEach(ele=>{
//     a.push(ele*4);
// })
// console.log(a);

// let b=[];

// num.forEach(ele=>{
//     b.push(ele/2);
// })
// console.log(b);




// let fruits=["Apple","Orange","Pine apple"];
//  let result= fruits.map((ele)=>{
//     return ele.toLowerCase(ele)
//  });
//  console.log(result);

//  let result= fruits.map((ele)=>{
//     return ele.toUpperCase(ele)
//  });
//  console.log(result);


// fruits.map((ele)=>{
//     console.log(ele);
// })

// fruits.map(ele=>{
//     console.log(ele);
// });


// let a=[110,20,12,23,35,23,72];
// let b=[];

// a.forEach( ele=>{
//     if (ele%2===0){
//         b.push(ele)   
//     }
// })
// console.log(b);


// let result=a.map(ele=>{
//     console.log(ele);
// })
// console.log(result);
// console.log(a);

// let result=a.map((ele)=>{
//     return ele
// })
// console.log(result);


// let a=[110,20,12,23,35,23,72];


// let result=a.filter(ele=>{
//     return ele%2!=0;
// })
// console.log(result);

// let result=a.filter(ele=>{
//     return ele<=30;
// })
// console.log(result);

// let result= a.map((ele)=>{
//     return ele/2;
// })
// console.log(result);

// let result=a.filter((ele,index)=>{
//     return ele===35;
// })
// console.log(result);


// let a=[110,20,12,23,35,23,72];

// let result= a.reduce((acc,currValue,index,arr)=>{
//     return acc=acc+currValue;
// },40);
// console.log(result);

// let a=[10]

// let a=[110,20,12,23,35,23,72];
// let result=a.reduce((acc,currValue)=>{
//     return acc=(acc+currValue)*2;
// },2)
// console.log(result);


let a=[110,20,12,23,35,23,72];

// let result=a.find((ele)=>{
//     return ele===72;
// })
// console.log(result);

// let result=a.findIndex((ele)=>{
//     return ele===53;
// })
// console.log(result);


// let result=a.some((ele)=>{
//     return ele>53;
// })
// console.log(result);

// let result=a.some((ele)=>{
//     return ele>27;
// })
// console.log(result);


// let result=a.every((ele)=>{
//     return ele>10;
// })
// console.log(result);