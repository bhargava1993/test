// Async await 
// It is the extension of Promise 

// async function sample() {
//     return "sunccess";
// }
// console.log(sample());

// Instead of this code we write async await function
// function sample() {
//     return new Promise((resolve, reject) => {
//         if (true) {
//             resolve("Success");                   
//         } else {
//             reject("failure");
//         }
//     })
// }


// sample().then((result) => {
//     console.log("result-----", result);
// }).catch((error) => {
//     console.log("error -----", error);
// }).finally(() => {
//     console.log("Finally ----")
// });




// function morning() {
//     setTimeout(() => {
//         console.log("Good morning")
//     }, 1000)
//     // console.log("Good morning")
//     return ("Good morning");
// }
// function afternoon() {
//     setTimeout(() => {
//         console.log("Good afternoon")
//     }, 2000)
//     // console.log("Good afternoon")
//     return ("Good afternoon");
// }
// function evening() {
//     setTimeout(() => {
//         console.log("Good evening")
//     }, 3000)
//     // console.log("Good evening")
//     return ("Good evening");
// }
// function night() {
//     setTimeout(() => {
//         console.log("Good night")
//     }, 4000)
//     // console.log("Good night")
//     return ("Good night");
// }


// async function sample() {
//     let morning1 = await morning();
//     console.log(morning1);
//     let afternoon2 = await afternoon();
//     console.log(afternoon2);
//     let evening3 = await evening();
//     console.log(evening3);
//     let night4 = await night();
//     console.log(night4);
// }

// console.log(sample());




// function goodMorning() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("good Morning");
//         }, 5000);
//     });
// }

// function afternoon() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("good afternoon");
//         }, 2000);
//     });
// }

// function evening() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("good evening");
//         }, 6000);
//     });
// }

// function goodnight() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("good night");
//         }, 3000);
//     });
// }


// goodMorning().then((result) => {
//     console.log("result ----112", result);
// })
// afternoon().then((result) => {
//     console.log("result-----115", result);
// })
// evening().then((result) => {
//     console.log("result-----118", result);
// })
// goodnight().then((result) => {
//     console.log("result----121", result);
// })


// function cricket() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Hello Cricket");
//         }, 2000);
//     });
// };
// function Kabaddi() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Hello Kabaddi");
//         }, 2000);
//     });
// };
// function volleyball() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Hello Volleyball");
//         }, 2000);
//     });
// };
// function tennis() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Hello Tennis");
//         }, 5000);
//     });
//     ;
// }


// async function sample() {
//     let cricket1 = await cricket();
//     console.log(cricket1);

//     let kabaddi1 = await Kabaddi();
//     console.log(kabaddi1);
//     let volleyball1 = await volleyball();
//     console.log(volleyball1);
//     let tennis1 = await tennis();
//     console.log(tennis1);
// };
// console.log(sample());

// cricket().then((result) => {
//     console.log("result ----169", result);
// });
// Kabaddi().then((result) => {
//     console.log("result ----172", result);
// });
// volleyball().then((result) => {
//     console.log("result ----175", result);
// });
// tennis().then((result) => {
//     console.log("result ----178", result);
// });



// function apple() {
//     setTimeout(() => {
//         console.log("apple is red");
//     }, 5000)
//     // console.log("apple is red");
//     // return "apple is red";
// }
// function banana() {
//     setTimeout(() => {
//         console.log("banana is yellow");
//     }, 2000)
//     // console.log("banana is yellow")
//     // return "banana is yellow";
// }
// function grapes() {
//     setTimeout(() => {
//         console.log("grapes are light green")
//     }, 3000)
//     // return "grapes are light green";
// }
// function mango() {
//     setTimeout(() => {
//         console.log("mango is yellow");
//     }, 4000)
//     // return "mango is yellow";
// }


// async function fruits() {
//     let banana1 = await banana();
//     let apple1 = await apple();
//     // console.log(apple1);
//     // let banana1 = await banana();
//     // console.log(banana1);
//     let grapes1 = await grapes();
//     // console.log(grapes1);
//     let mango1 = await mango();
//     // console.log(mango1);
// }
// console.log(fruits());




// Normal function 

// function add(a, b) {
//     return a + b;

// }
// console.log(add(10, 40));

// callback function

// function add(a, b, callback) {
//     console.log(a, b, callback);
//     setTimeout(() => {
//         callback(a + b);
//     }, 2000)
//     // callback(a + b);
// }

// add(5, 10, (result) => {
//     console.log("result ----", result);
// });


//  error-first callback function

// function add(a, b, callback) {
//     console.log(a, b, callback);
//     setTimeout(() => {
//         if (typeof a !== "number" || typeof b !== "number") {
//             callback("Invalid inputs", null);
//         } else {
//             let sum = a + b;
//             callback(null, sum);
//         }
//     }, 2000);
// };

// add(10, 20, (error, result) => {
//     if (error) {
//         console.log("error ---", error);
//     } else {
//         console.log("result -----", result);
//     }
// });

// promise function


// function add(a, b) {
//     console.log(a, b);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof a === "number" && typeof b === "number") {
//                 let sum = a + b;
//                 resolve(sum);
//             } else {
//                 reject("Invalid inputs");
//             }
//         }, 2000)

//     })

// };
// add(10, 30).then((result) => {
//     console.log("result --- ", result);
// }).catch((error) => {
//     console.log("error-----", error);
// }).finally(() => {
//     console.log("finally -----");
// });


// async-await function

// function sum(a, b) {
//     console.log(a, b);
//     return new Promise((resolve, reject) => {
//         if (typeof a === "number" && typeof b === "number") {
//             let adding = a + b;
//             resolve(adding);
//         } else {
//             reject("reject");
//         }
//     })
// }


// async function add(a, b) {
//     try {
//         let result = await sum(5, 10);
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }

// }


// add().then((result) => {
//     console.log("result ----", result);
// })



// check the number is even or odd

// function checkNumber(num) {
//     console.log(num);
//     if (num % 2 === 0) {
//         console.log("It is an even number");
//     } else {
//         console.log("It is an odd number");
//     }

// }
// console.log(checkNumber(67));

// checkNumber by using callback

// function checkNumber(num, callback) {
//     console.log(num, callback);
//     if (num % 2 === 0) {
//         callback("It is an even number")
//     } else {
//         callback("It is an odd number");
//     }
// }
// checkNumber(41, (result) => {
//     console.log("result-----", result);
// })

// using error -first callback function 

// function checkNumber(num, callback) {
//     console.log(num, callback);
//     if (num % 2 !== 0) {
//         callback("It is an odd number", null)
//     } else {
//         callback(null, "It is an even number");
//     };

// };
// checkNumber(32, (error, result) => {
//     if (error) {
//         console.log("error----", error)
//     } else {
//         console.log("result----", result);
//     }
// });



//  promise


// function checkNumber(num) {
//     console.log(num);
//     return new Promise((resolve, reject) => {
//         if (num % 2 === 0) {
//             resolve("It is an even number");
//         } else {
//             reject("It is an odd number");
//         }
//     })
// };

// checkNumber(34).then((result) => {
//     console.log("result ----", result);
// }).catch((error) => {
//     console.log("error----", error);
// });

// async function check() {
//     try {
//         console.log(await checkNumber(36))
//     } catch (err) {
//         console.log(err);
//     }

// }

// check();



// Normal function 

// function validateAge(age) {
//     if (age > 0 && age <= 100) {
//         console.log(age, "It is validate");
//     } else {
//         console.log(age, "It is not validate");
//     }

// }
// console.log(validateAge(60));


// callback

// function validateAge(age, callback) {
//     console.log(age, callback);
//     if (age < 0 && age >= 100) {
//         callback("It is validate");
//     } else {
//         callback("It is not validate");
//     }
// };

// validateAge(35, (result) => {
//     console.log("result -----", result);
// })


// error -firset callback function


// function validateAge(age, callback) {
//     console.log(age, callback);
//     if (age > 0 && age <= 100) {
//         callback(null, "It is validate");
//     } else {
//         callback("It is not validate", null);
//     }
// };

// validateAge(36, (err, result) => {
//     if (err) {
//         console.log("error-------", err);
//     } else {
//         console.log("result -----", result);
//     }
//     // console.log("result -----", result);
// });


function validateAge(age) {

    console.log(age);
    return new Promise((resolve, reject) => {
        if (age > 0 && age <= 100) {
            resolve("It is validate");
        } else {
            reject("It is not validate");
        }
    });
};

// validateAge(43).then((result) => {
//     console.log("result -----", result)
// }).catch((error) => {
//     console.log("error ----", error);
// })

async function check() {
    try {
        console.log(await validateAge(40));
    } catch (err) {
        console.log("err");
    }

}

check().then((result) => {
    console.log(result);
});