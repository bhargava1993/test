// function
// function is a block of code it performs a specific task when its called .
// functions are used for reusability purpose
// when we want to execute the code ,we don't need to write the whole code ,just we called its execute.


// function first_name() {
//     console.log("Venukumar");
// }
// console.log(first_name());



//  Function without parameter

// function last_name() {
//     console.log("Jagan");
//     return true;
// }
// console.log(last_name());


// Function with parameters

// function values(a, b, c) {
//     console.log(a, b, c);
//     return true;
// }
// console.log(10, 30, 20);


//  Function with parameters and arguments

// function values(a, b) {
//     return a + b;
// }
// console.log(values(10, 20));


// function values(a, b) {
//     return b - a;
// }
// console.log(values(10, 20));


// function values(a, b) {
//     // console.log(a + b);
//     return a + b;
// }
// console.log(values(10, 20));
// console.log(values(30, 50));
// console.log(values(40, 60));



// function table(num) {
//     for (let i = 1; i <= 10; i++) {
//         let result = num + "*" + i + "=" + num * i;
//         console.log(result);
//     }
//     return 0;
// }
// console.log(table(4));
// console.log(table(20));



// let array = [10, 20, 30, 40, 50, 60];
// array.forEach(function (element) {
//     console.log(element);
// })

// //             (or)
// array.map(function (ele) {
//     console.log(ele);
// })

//                  (or)

// array.filter(function (ele) {
//     console.log(ele);
// }



// Default Parameters
// Default parameters allows us to set default values for the function parameters.
// If the user doesn't give the input value it will take automatically default values.
// It helps to avoid errors and make function is more flexible.


// function defaultFn(student1, student2 = "absent", student3 = "absent") {
//     console.log(student1, student2, student3);
//     return true;
// }
// let student1 = "present";
// let student2 = "present";
// let student3 = "present";

// console.log(defaultFn(student1, student2));
// console.log(defaultFn(student1, student2, student3));
// console.log(defaultFn(student1, null, student3));
// console.log(defaultFn(student1, student3));
// console.log(defaultFn(student2, null, null));
// console.log(defaultFn(null, student1));
// console.log(defaultFn(student3, student1, ));


// Function Expression

// An ananymous function assign it a variable then it is called Function Expression.

// const firstName = function () {
//     console.log('Hello');
//     return 10;
// }
// console.log(firstName());


// Arrow Functions
// It introduced in ES6
// These features make code easier and shorter to manage the code.
// whenever we are going to run single line of code then we will use this arrow functions.

// const sample = () => {
//     console.log("Hello");
//     return true;
// }
// console.log(sample());


// const sample = (a, b) => {
//     return a + b;
// }
// console.log(sample(10, 40));



// let array = [13, 14, 25, 35, 25, 63, 74, 52, 32];
// array.sort();
// console.log(array);

// console.log(array.filter((ele) => ele === 35));

// let result = array.filter(function (ele) {
//     return ele === 74;
// });
// console.log(result);


// let result_1 = array.filter((ele) => ele === 74);
// console.log(result_1);


//  TO find maximum value of an array

// for (let i = 0; i < array.length; i++) {
//     if (max < array[i]) {
//         max = array[i];
//     }
// }
// console.log(max);


//  Uing functions

// function Value(array) {
//     let max = array[0];

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i];
//         }
//     }
//     return max;
// }

// let numbers = [13, 40, 25, 46, 86];

// let array_1 = [12, 24, 35, 46, 56, 11, 10];
// console.log(Value(numbers));
// console.log(Value(array_1));


// function factorial(num) {
//     fact = 1;
//     for (let i = 1; i < num; i++) {
//         fact = fact * i;
//     }
//     // console.log(fact);

//     return fact;

// }
// console.log(factorial(6));


// function sample() {
//     // console.log("Hello");
//     return "Hello";
// }
// console.log(sample())


// let array = ["Venu", "Sudheer", "Venu", "Karthik", "Sudheer", "Jagan", "Karthik"];


// // let cities = ["Hyd", "Bng", "Chennai", "Hyd", "Chennai", "Punjab", "Kolkatta"];

// let unique = [];

// for (let i = 0; i < array.length; i++) {
//     let exists = unique.includes(array[i]);
//     if (!exists) {
//         unique.push(array[i]);
//     }
// }
// console.log(unique);

// let obj = {};

// keys = Objects.keys()

// for (let i = 0; i < array.length; i++) {
//     if (obj[array[i]]) {
//         obj[array[i]] = obj[array[i]] + 1;
//     } else {
//         obj[array[i]] = 1
//     }
// }
// console.log(obj);

// console.log(Object.keys(obj));


//  To find unique values in an array using functions

let names = ["Venu", "Sudheer", "Venu", "Karthik", "Sudheer", "Jagan", "Karthik"];
let cities = ["Hyd", "Bng", "Chennai", "Hyd", "Chennai", "Punjab", "Kolkatta"];


// function unique_values(array) {
//     let unique = [];
//     for (i = 0; i < array.length; i++) {
//         let exists = unique.includes(array[i]);
//         if (!exists) {
//             unique.push(array[i]);
//         }
//     }
//     return unique;
// }
// console.log(unique_values(names));
// console.log(unique_values(cities));



// TO find the count of each value in an array using functions

let fruits = ["Apple", "Banana", "Grapes", "Apple"]


const count = function count_of_values(array) {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        if (obj[array[i]]) {
            obj[array[i]] = obj[array[i]] + 1;
        } else {
            obj[array[i]] = 1;
        }
    }
    console.log(obj);
    return Object.keys(obj);
}
// console.log(count_of_values(names));
// console.log(count_of_values(cities));


// console.log(count_of_values(fruits));

// const count = count_of_values(fruits);

console.log(count(fruits));
console.log(count(names));