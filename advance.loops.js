// for...of 
// It is one of the loooping method and it loop an array

// let array = [1, 2, 3, 4, 6, 7, 8, 9];

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }


// Using for...of

// for (let ele of array) {
//     console.log(ele);
// }



// for...in 
// It is one of the loopin method and it loop an object
let obj = {
    Name: "Venu",
    Course: "Fullstack",
    age: 21

}
// console.log(obj);

// let keys = Object.keys(obj);
// console.log(keys);

// for (let i = 0; i < keys.length; i++) {
//     console.log(keys[i] + "=" + obj[keys[i]]);
//     // console.log(obj[keys[i]]);
// }

// for (let key in obj) {
//     console.log(key, "--", obj[key]);
// }

let keys = Object.keys(obj);

for (let keys in obj) {
    console.log(keys + "---" + obj[keys]);
}
