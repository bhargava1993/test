// synchronus
// synchronus programming of code runs line by line
// It will execute series wise (line by line)
// By default javascript code runs line by line


// console.log("venu");
// console.log("Bhargav");
// console.log("Sudheer");
// setTimeout(() => {
//     console.log("Jagan");
// });
// console.log("Hari");


// setTimeout()

// setTimeout is the timer function in javascript ,
//  where we need to use asynchronus function and later we need to add some timer.

// Asynchronus Programming
//  It will execute based on priority , we need to tell the which line of code will execute first
// and which line of code will execute second.

// Eg   Uber ;
// person 1 ---> He ordered first,  1km
// person 2 ---> He ordered third , 2km
// person 3 ---> He ordered fourth , 3km
// person 4 ---> He orderd second , 4km

//  In a cab driver firstly he will go to pick the peson
// whom near to that cab , which is taking less time ,he will go and pick them,
// after  the next person whom near to that person and driver will go pick him
//

//  Firstly he will go to pick pick person 1 beacuase he is just 1 km left to the cab.
// second he will go to pick person 2 beacause ,he is near to the cab.
// after he will pick person 3 and person 4 based on thier distances.


//  here the ordered doesn't matter ,whom ever near to that cab is matter(distance).



// console.log("1,2,34,");
// setTimeout(() => {
//     console.log("Venu");
// }, 1000);
// console.log("!@##");
// console.log("Bhargava");


// In this setTimeout() function will execute the last


// To achieve synchronus to asynchronus programming, we have different methods,
//  here one of the simple way is setTimeout()  method



// Callback
// callback function is a function if you give the parameter of a  function to the another function is called callbaack function


// function morining(callback) {
//     console.log("line --- 66", callback);
//     // callback();
//     console.log("Good morning");
//     callback(evening);
// }

// function evening(callback) {
//     // console.log("line ---- 73", callback);
//     console.log("Good evening");
//     // callback();

// }
// function afternoon(callback) {
//     // console.log("line ---77", callback);
//     console.log("Good afternoon");
//     // callback();
// }

// function night() {
//     // console.log("line---85", callback);
//     console.log("Good night");
//     // evening(callback);
// }


// morining(afternoon);
// afternoon(night);
// evening();
// night();





// function morining(callback) {
//     console.log("line --- 66", callback);
//     console.log("Good morning");
//     callback(evening);
// }

// function evening(callback) {
//     console.log("line ---107", callback);
//     console.log("Good evening");
//     callback();
// }
// function afternoon(callback) {
//     console.log("line --- ", callback);
//     console.log("Good afternoon");
//     callback(night);
// }

// function night() {
//     console.log("Good night");
// }


// morining(afternoon);
// evening();



// Callback


// function morining(callback) {
//     console.log(callback);
//     // callback();
//     console.log("Good morining");
//     setTimeout(() => {
//         callback(evening);
//     }, 1000)
//     // callback(evening);
// }

// function afternoon(callback) {
//     console.log(callback);
//     // callback();
//     console.log("Good afternoon");
//     setTimeout(() => {
//         callback(night);
//     }, 1000)
//     // callback(night);
// }

// function evening(callback) {
//     console.log(callback);
//     console.log("Good evening");
//     setTimeout(() => {
//         callback();
//     }, 1000)
//     // callback();
// }
// function night() {
//     console.log("Good night");
// }


// morining(afternoon);
// // afternoon();
// // evening();
// // night();



// function cricket(shettlecb) {
//     console.log(shettlecb);
//     console.log("He plays cricket");
//     setTimeout(() => {
//         shettlecb();
//     }, 1000)
//     // shettlecb();
// }

// function shettle() {
//     console.log("He plays shettle");
// }

// function volleyball(cricketcb) {
//     console.log(cricketcb);
//     console.log("He plays volleyball");
//     setTimeout(() => {
//         cricketcb(shettle);
//     }, 1000)
//     // cricketcb(shettle);
// }


// function tennis(volleycb) {
//     console.log(volleycb);
//     console.log("He Plays Tennis");
//     setTimeout(() => {
//         volleycb(cricket);
//     }, 1000)
//     // volleycb(cricket);
// }

// function volleyball() {
//     console.log("He plays volleyball");
// }


// cricket();
// shettle();
// tennis(volleyball);
// volleyball();




// Error-First Callback

// function add(a, b, callback) {
//     console.log(a, b, callback);
//     return callback(a, b);
// }

// function logicAdd(a, b) {
//     console.log(a + b);
//     return a + b;
// }
// logicAdd(10, 90, logicAdd);



// function add(a, b, callback) {
//     console.log(a, b, callback);
//     return callback(a, b);
// }

// function logicAdd(a, b) {
//     console.log(a + b);
//     return a + b;
// }

// logicAdd(10, 40, logicAdd);





// function add(a, b, c, callback) {
//     console.log(a, b, c, callback);
//     return (callback(a, b, c));

// }

// function logicAdd(a, b, c) {
//     // console.log(a + b + c);
//     return a + b + c;
// }

// console.log(add(20, 20, 20, logicAdd));


// subtracting

// function sub(a, b, callback) {
//     console.log(a, b, callback);
//     return callback(a, b);
// }
// function logicsub(a, b) {
//     // console.log(a - b);
//     return a - b;
// }

// console.log(sub(20, 40, logicsub));


// Multiplication

// function mul(a, b, c, callback) {
//     console.log(a, b, c, callback);
//     return callback(a, b, c);
// }


// function logicmul(a, b, c) {
//     console.log(a * b * c);
//     // return a * b * c;
// }

// console.log(mul(10, 2, 1, logicmul));



// Division



// function divide(a, b, callback) {
//     console.log(a, b, callback);
//     if (a === 0 || b === 0) {
//         console.log("input element is 0", null);
//         return;
//     } else {
//         let division = a / b;
//         callback(null, division);
//     }




//     if (a == 10) {
//         // let div = a / b;
//         console.log(("b is 0", "a is 10"));
//     } else {
//         console.log("else----");
//     }



//     // return callback(a, b);
// }


// divide(10, 2, (err, response) => {
//     if (err) {
//         console.log("error----", err);
//     } else {
//         console.log("response -----", response);
//     }
// })



// function divide(a, b, callback) {
//     console.log(a, b, callback);

//     if (a == 0 || b == 0) {

//         callback("input arguments reviceving 0, Please check and send correct inputs", null);
//         return;
//     } else {
//         let division = a / b;

//         callback(null, division);
//     }

// }

// divide(20, 10, (err, response) => {
//     if (err) {
//         console.log("error---", err);
//     } else {
//         console.log("response-----", response)
//     }
// })



//  Division using error-first callbacks

// function divide(a, b, callback) {
//     console.log(a, b, callback);
//     if (a === 0 || b === 0) {
//         console.log("input argument recieves 0 , please check and send correct input value", null);
//     } else {
//         let division = a / b;
//         callback(null, division);
//     }

// }


// divide(100, 2, (err, response) => {
//     if (err) {
//         console.log("error-----", err);
//     } else {
//         console.log("response -----", response);
//     }
// })




// function div(a, b, callback) {
//     console.log(a, b, callback);
//     if (a === 0 || b === 0) {
//         console.log("the input value is 0,Please enter the correct value", null);
//     } else {
//         let division = a % b;
//         callback(null, division);
//     }
// }

// div(10, 6, (err, response) => {
//     if (err) {
//         console.log("error ----", err);
//     } else {
//         console.log("reponse----", response);
//     }

// })


// let array = [1, 2, 3, 4, 5];
// let rev_array = [];

// for (let i = array.length - 1; i >= 0; i--) {
//     rev_array.push(array[i]);
//     // rev_array = rev_array + array[i];
//     // console.log(array[i]);
// }
// console.log(rev_array);



// function divide(a, b, callback) {
//     console.log(a, b, callback);
//     return callback(a, b);
// }


// function div(a, b) {
//     return a / b;
// }
// console.log(divide(10, 2, div));




// data types check
//1. prmimite
//     String,number,undefined, null, Boolean
// 2. non prmitive
// array , Object,functions


// 10
// ["venu", "bhargava"]
// {
//     "name":"venu"
// }

//success or failure
// true/ response or false/ error

// callback(err,null); -- failure
// callback(null, success); -- success



// function findDatatype(data, callback) {
//     console.log(typeof data);

//     if (typeof data === "string") {
//         callback(null, "data is string");
//     } else if (typeof data === "number") {
//         callback(null, "data is number");
//     } else if (Array.isArray(data)) {
//         callback(null, "data is Array");
//     } else if (typeof data == "object") {
//         callback(null, "data is object");
//     } else if (typeof data == "boolean") {
//         callback(null, "data is boolean");
//     }
//     else {
//         callback("data is not string", null);
//     }

// }

// findDatatype(true, (err, response) => {

//     if (err) {
//         console.log("err---------", err);
//     } else {
//         console.log("response---", response);
//     }

// })





// function findDatatype(data, callback) {
//     console.log(data, typeof data, callback);

//     if (typeof data === "string") {
//         console.log("It is a string data type");
//     } else if (typeof data === "Number") {
//         console.log("It is a number datatype");
//     } else if (Array.isArray(data)) {
//         console.log("It is an array");
//     } else if (typeof data === "object") {
//         console.log("It is an object");
//     } else if (typeof data === "boolean") {
//         console.log("It is a boolean");
//     } else {
//         callback("It is not a string", null);
//     }
// }


// findDatatype("Venu", (err, response) => {
//     if (err) {
//         console.log("err ------", err);
//     } else {
//         console.log("response -----", reponse);
//     }
// });





// function findDatatype(data, callback) {
//     console.log(data, callback);
//     if (typeof data === "number") {
//         console.log("It is a number");
//     } else if (typeof data === "string") {
//         console.log("It is a string");
//     } else if (typeof data === "boolean") {
//         console.log("It is a boolean");
//     } else if (Array.isArray(data)) {
//         console.log("It is an array");
//     } else if (typeof data === "object") {
//         console.log("It is an object");
//     } else {
//         callback("It is a number", null);
//     }

// };

// findDatatype("Venu", (err, reponse) => {
//     if (err) {
//         console.log("error----", err);
//     } else {
//         console.log("response----", response);
//     }
// });



// let array = ["a", "b", 10, 50, [100, 200], "c", "d", ["bhargava", "venu", ["zaiba", "btec", [1000, 2000, ["mca", "javascript"]]]], "e", "f", "g", "h"];

// console.log(array.flat(Infinity));


// let result = [];


// for (let ele of array) {
//     if (ele === "object") {
//         result.push(ele);
//     }
//     for (let ele2 of ele) {
//         if (ele2 === "object") {
//             result.push(ele2)
//         }
//         //     for (let ele3 of ele) {
//         if (ele3 === "object") {
//             result.push(ele3);
//         }
//         for (let ele4 of ele) {
//             if (ele4 === "object") {
//                 result.push(ele4)
//             }
//             for (let ele5 of ele) {
//                 if (ele5 === "object") {
//                     result.push(ele5)
//                 }
//                 for (let ele6 of ele) {
//                     if (ele6 === "object") {
//                         result.push(ele6)
//                     }

//                 }

//             }
//         }
//     }
// }
// }

// console.log(result);


// let array = ["a", "b", 10, 50, [100, 200], "c", "d", ["bhargava", "venu", ["zaiba", "btec", [1000, 2000, ["mca", "javascript"]]]], "e", "f", "g", "h"];


// // let result = [];

// // function mergeArray(array) {
// //     for (let ele of array) {
// //         // console.log(ele);  
// //         if (typeof ele === "object") {
// //             mergeArray(ele);
// //             // result.push(ele);
// //         } else {
// //             result.push(ele)
// //         }
// //     }
// // }
// // mergeArray(array);

// // console.log(result);

// // let result = [];


// // function mergeArray(array) {
// //     for (let ele of array) {
// //         if (typeof ele === "object") {

// //             mergeArray(ele);
// //         } else {
// //             result.push(ele);
// //         }
// //     }
// // }

// // mergeArray(array);

// // console.log(result);


// let result = [];

// // function mergeArray(array) {
// //     for (let val of array) {
// //         if (typeof val === "object") {
// //             mergeArray(val);
// //         } else {
// //             result.push(val);
// //         }
// //     }
// // }

// // mergeArray(array);
// // console.log(result);


// for (let val of array) {
//     // console.log(val);
//     if (typeof val === "object") {
//         // console.log("This is an object");
//         // console.log(val);
//         result.push(val);
//     } else {
//         // result.push(val);
//         console.log(val);
//     }
//     // for (let ele of val) {
//     //     if (typeof ele === "object") {
//     //         console.log("This is an object");
//     //     } else {
//     //         result.push(ele);
//     //     }
//     // }
// }

// console.log(result);

let array = ["a", "b", 10, 50, [100, 200], "c", "d", ["bhargava", "venu", ["zaiba", "btec", [1000, 2000, ["mca", "javascript"]]]], "e", "f", "g", "h"];


// let result = [];

// console.log(array.flat(Infinity));
// let result = [];

// for (let val of array) {
//     if (typeof val === "object") {
//         result.push(val);
//     } else {
//         console.log(val);
//     }
//     for (let val1 of val) {
//         if (typeof val1 === "object") {
//             result.push(val1);
//             // } else {
//             //     console.log(val1);
//             // }
//         }
//     }
// }
// console.log(result);


let temp = [...array];

// for (let i = 0; i < temp.length; i++) {
// if (typeof temp === "object") {
//     result.push(temp[i]);
// } for (let j = 0; j < temp[i].length; j++) {
//     if (typeof temp[i] === "object") {
//         result.push(temp[i][j]);
//     } for (let k = 0; k < temp[i][j].length; k++) {
//         if (typeof temp[i][j] === "object") {
//             result.push(temp[i][j][k]);
//         } for (let l = 0; l < temp[i][j][k].length; l++) {
//             if (typeof temp[i][j][k] === "object") {
//                 result.push(temp[i][j][k][l]);
//             } for (let m = 0; m < temp[i][j][k][l].length; m++) {
//                 if (typeof temp[i][j][k][l] === "object") {
//                     result.push(temp[i][j][k][l][m]);
//                 } for (let n = 0; n < temp[i][j][k][l][m].length; n++) {
//                     if (typeof temp[i][j][k][l][m] === "object") {
//                         result.push(temp[i][j][k][l][m][n]);
//                     }
//                 }
//             }
//         }
//     }
// }
// }

// for (let i = 0; i < temp.length; i++) {
//     if (!Array.isArray(temp[i])) {
//         result.push(temp[i])
//     } else {
//         for (let j = 0; j < temp[i].length; j++) {
//             if (!Array.isArray(temp[i][j])) {
//                 result.push(temp[i][j])
//             } else {
//                 for (let k = 0; k < temp[i][j].length; k++) {
//                     if (!Array.isArray(temp[i][j][k])) {
//                         result.push(temp[i][j][k]);
//                     } else {
//                         for (let l = 0; l < temp[i][j][k].length; l++) {
//                             if (!Array.isArray(temp[i][j][k][l])) {
//                                 result.push(temp[i][j][k][l]);
//                             } else {
//                                 for (let m = 0; m < temp[i][j][k][l].length; m++) {
//                                     if (!Array.isArray(temp[i][j][k][l][m])) {
//                                         result.push(temp[i][j][k][l][m]);
//                                     } else {
//                                         for (let n = 0; n < temp[i][j][k][l][m].length; n++) {
//                                             if (!Array.isArray(temp[i][j][k][l][m][n])) {
//                                                 result.push(temp[i][j][k][l][m][n]);
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }


// console.log(temp);

// console.log(result);



function mergeArray(inarray) {
    for (let ele of inarray) {
        if (Array.isArray(ele)) {
            // console.log("This is an object");
            // result.push(ele);
            mergeArray(ele);
        } else {
            result.push(ele);
        }
    }
}

mergeArray(array);

console.log(result);


