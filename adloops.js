
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




let products = [
    {
        "id": 1,
        "name": "Aurora Desk Lamp",
        "price": 49.99,
        "inStock": true
    },
    {
        "id": 2,
        "name": "Cloudweave Notebook",
        "price": 12.5,
        "inStock": false
    },
    {
        "id": 3,
        "name": "Copperleaf Pen",
        "price": 7.99,
        "inStock": true
    },
    {
        "id": 4,
        "name": "Nimbus Headphones",
        "price": 89.0,
        "inStock": true
    },
    {
        "id": 5,
        "name": "Starlace Backpack",
        "price": 64.5,
        "inStock": false
    }
]

// let result = products.filter((ele, index) => {
    
//     if(ele["inStock"] === false){
//         return ele;
//     }
// })

// console.log(result);

// let result = products.filter((ele, index) => ele["inStock"] === false)

// console.log(result);

let result = products.map((ele, index) => {

    ele["discount"] = 10
    return ele;
})

console.log(result);

