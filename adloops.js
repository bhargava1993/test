
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