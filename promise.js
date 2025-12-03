// promise
// promise is the one type of to acheive synchronus to asynchronus program
// promise has three statements

// 1.pending
// 2.resolve
// 3.reject



// using callback


// function add(a, b, callback) {
//     console.log(a, b, callback);
//     return callback(a, b);
// }
// function logicAdd(a, b) {
//     return a + b;
// }

// console.log(add(10, 20, logicAdd));





// function adding(a, b, callback) {
//     console.log(a, b, callback);
//     return callback(a , b);

// }

// function add(error, response) {
//     if (error) {
//         console.log("error----", error);
//     } else {
//         console.log("response------", response);
//     }
// }
// console.log(adding(10, 20, add));



// Adding two numbers by using promise

// function promise_name(a, b) {
//     return new Promise((resolve, reject) => {
//         if (true) {
//             let result = a + b;
//             resolve(result)
//         } else {
//             let sub = b - a;
//             reject(sub)
//         }
//     });
// }



// promise_name(10, 20).then((result) => {
//     console.log("result-----", result)

// }).catch((error) => {
//     console.log("error----", error)

// }).finally((final) => {
//     console.log("finally-----", final)

// });



// function factorial(num) {
//     return new Promise((resolve, reject) => {
//         if (num < 0) {
//             reject("It is not a factorial");
//         }

//         let fact = 1;

//         for (let i = 1; i <= num; i++) {
//             fact = fact * i;
//         }
//         resolve(fact);



//     });
// }

// factorial(5).then((result) => {
//     console.log("result ------", result);

// }).catch((error) => {
//     console.log("error ----", error);

// }).finally(() => {
//     console.log("finally ---")

// });



// error first callback

// function divide(a, b, callback) {
//     console.log(a, b, callback);
//     if (a === 0 || b === 0) {
//         console.log("input arguments is 0,please check once and send correct input value", null);
//         return callback(a, b);
//     } else {
//         callback(null, a / b)
//     }
// }

// divide(0, 5, (err, response) => {
//     if (err) {
//         console.log("error----", err);
//     } else {
//         console.log("reponse----", response);
//     }

// });






// check if a number is positive or not by using error first callback funvtion

// function checkNumber(num, callback) {
//     console.log(num, callback);
//     if (typeof num === "number") {
//         if (num > 0) {
//             console.log(("It is a positive number"));
//         } else {
//             console.log(("It is a negative number"));
//         }
//         callback(num, null)
//     } else {
//         callback(null, "It is not a number")
//     }
// }

// checkNumber(10, (response, err) => {
//     if (err) {
//         console.log("error-----", err);
//     } else {
//         console.log("response -----", response);
//     }
// })



// Check if it is a positive number or negative number;



// function checkNumber(num) {
//     return new Promise((resolve, reject) => {
//         // console.log(response, reject);
//         if (typeof num === "number") {
//             // console.log("It is a number");
//             if (num > 0) {
//                 console.log("It is a positive number", num)
//             } else {
//                 console.log("It is a negative number", num);
//             }
//             resolve(num);
//         } else {
//             reject("It is a not a  number");
//         }



//     })

// }

// checkNumber("Venu").then((result) => {
//     console.log("result-----", result);
// }).catch((error) => {
//     console.log("error-----", error);
// }).finally(() => {
//     console.log("finally -----");
// });



// function login(username, password, callback) {
//     console.log(username, password, callback);
//     let user = "admin";
//     let pass = "12345";
//     if (!username || !password) {
//         callback("invalid details", null);
//         if (username !== user && password !== pass) {
//             callback("Invalid password and username", null)
//         }
//     } else {
//         if (username === user && password === pass) {
//             callback(null, "Login successful");

//         } else {
//             callback("Invalid details", null);
//         }

//     }

// };

// login("admin", "12345", (err, response) => {
//     if (err) {
//         console.log("err ----", err);
//     } else {
//         console.log("response ----", response);
//     }

// });



// login check using promise


function login(username, password) {
    console.log(username, password);
    let user = "admin";
    let pass = "12345";
    return new Promise((resolve, reject) => {
        if (!username || !password) {
            reject("Invalid details");
        } else if (username !== user || password !== pass) {
            reject("Invalid details")
        } else {
            if (username === user || password === pass) {
                resolve("Login Successsful")
            } else {
                reject("Invalid details");
            };
        };

    });
};

login("admin", "12345").then((result) => {
    console.log("result-----", result);
}).catch((error) => {
    console.log("error ----", error);
}).finally((final) => {
    console.log("final ----", final);
});