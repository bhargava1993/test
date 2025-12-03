

// a = [1,2,3,4];
// b = [50,60,70,80]; 
// I want to print [{1:50},{2:60},{3:70},{4:80}] 


// let array = [1, 2, 3, 4];
// let array1 = [50, 60, 70, 80];

// let array2 = array1.length - 1;
// let result = array.map((ele, index) => {
//     let obj = {};
//     //     console.log(ele, index, array1[index]);
//     obj[ele] = array1[index];      // normal output
//     obj[array1[index]] = ele;      // [{50:1},{60:2},{70:3},{80:4}]
//     let reverse = array2 - index;
//     obj[ele] = array1[reverse];
//     return obj;
// })
// console.log(result);
// console.log(array2);





// let array = [2, 4, 7, 9];
// let array2 = [20, 40, 70, 90];

// [{ 2: 90 }, { 4: 70 }, { 7: 40 }, { 9: 90 }]

// array2.length;
// let array2Length = array2.length - 1;

// let result = array.map((ele, index) => {
//     let obj = {};

// console.log(ele, array2Length - index, array2[array2Length - index]);

// obj[ele] = array2[index];

// obj[array2[index]] = ele;

// let reverseIndex = array2Length - index;
// obj[ele] = array2[reverseIndex];
// console.log(obj);

// return obj;

// });
// console.log(result);
// // output: [{2:20},{4:40},{7:70}]

// // output: [{20:2},{40:4},{70:7}]

// // output: [{2:90},{4:70},{7:40},{9:90}]



// let a = [10, 20, 30, 40, 50];
// let b = [50, 40, 30, 20, 10];

// let result = a.map((ele, index) => {
//     console.log(ele, index, b[index])
//     let obj = {};

//     // obj[ele] = b[index];

//     // obj[b[index]] = ele;

//     let bLength = b.length - 1
//     let reverseIndex = bLength - index
//     obj[ele] = b[reverseIndex];
//     //(or)
//     // obj[ele] = b[[a.length - 1] - [index]]
//     return obj;


// });

// console.log(result);



// Swapping two variables

let a = 5;
let b = 10;

let copy = a;
a = b;
b = copy;

console.log(a);
console.log(b);

