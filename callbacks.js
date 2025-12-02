


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
// 1. prmimite
//     String,number,undefined, null, Boolean
// 2. non prmitive
// array , Object,functions


// 10
// ["venu", "bhargava"]
// {
//     "name":"venu"
// }

// success or failure
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





function findDatatype(data, callback) {
    console.log(data, callback);
    if (typeof data === "number") {
        console.log("It is a number");
    } else if (typeof data === "string") {
        console.log("It is a string");
    } else if (typeof data === "boolean") {
        console.log("It is a boolean");
    } else if (Array.isArray(data)) {
        console.log("It is an array");
    } else if (typeof data === "object") {
        console.log("It is an object");
    } else {
        callback("It is a number", null);
    }

};

findDatatype(40, (err, reponse) => {
    if (err) {
        console.log("error----", err);
    } else {
        console.log("response----", response);
    }
});