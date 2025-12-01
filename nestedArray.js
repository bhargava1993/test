// let array=["a","b","c","d",["bhargava","venu",["zaiba","btec",[1000,2000,["mca","javascript"]]]],"e","f","g","h"];

// let result=[]
// function flatArray(inputArray){

//    for(let val of inputArray){
//         if(typeof val == "object"){
//             flatArray(val)
//         }else{
//             result.push(val)
//         }
//    }

// }

// flatArray(array)
// console.log(result)


// let obj = {
//     "name": "bhargava",
//     "data": {
//         "inter": {
//             "collage": "pavitra jr collage",
//             "degree": {
//                 "course": "MECS",
//                 "PG": {
//                     "course": "MCA"
//                 }
//             }
//         }
//     }
// }

// let result = [];
// function findStrings(inputObj) {

//     for (let key in inputObj) {
//         if (key === "course") {
//             console.log(inputObj[key]);
//         }

//         if (typeof inputObj[key] == "object") {
//             findStrings(inputObj[key]);
//         } else {
//             result.push(inputObj[key]);
//         }

//     }


// }

// findStrings(obj);
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

