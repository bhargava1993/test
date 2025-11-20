
let city = ["Hyderabad", "Banglore", "Chennai", "Hyderabad", "Punjab", "Gujarat", "Banglore", "Punjab", "Mumbai"];
uniqueArray = [];



for (let i = 0; i < city.length; i += 1) {
    // console.log(city[i]);

    let exists = uniqueArray.includes(city[i]);

    if (!exists) {
        uniqueArray.push(city[i]);
    }
}

console.log(uniqueArray);




let fruits = ["Apple", "Mango", "Orange", "PineApple", "Mango", "Orange", "Banana", "Banana", "Guava"];

let unique = [];


for (let i = 0; i < fruits.length; i += 1) {
    // console.log(fruits[i]);

    let exists = unique.includes(fruits[i]);

    if (!exists) {
        unique.push(fruits[i]);
    }
}
console.log(unique);






// for (let i = 0; i < fruits.length; i += 1) {
//     // console.log(fruits[i]);

//     if (!unique.includes(fruits[i])) {
//         unique.push(fruits[i]);
//     }
// }
// console.log(unique);



