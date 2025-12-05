// Callback Chaining 
// The calback function inside the callback function is called callback chaining function.

// function step1(callback) {
//     console.log("step1");
//     callback();
// }
// function step2(callback) {
//     console.log("step2");
//     callback();
// }
// function step3(callback) {
//     console.log("step3");
//     callback();
// }
// function step4() {
//     console.log("step4");

// }


// step1(() => {
//     step2(() => {
//         step3(() => {
//             step4();
//         });
//     });
// });




// payment details by using callback chain;

// function getUser(id, next) {
//     console.log(id, next);
//     console.log(" fetching user information-----");
//     next({ id, name: "Venukumar" });
// }
// function ordersDetails(user, res) {
//     console.log(" fetching orders details ");
//     res({ user, orders: ["laptop", "moblie", "charger"] });

// }
// function processOrders(processingOrders, next) {
//     console.log("processing -----", processingOrders);
//     next({ processingOrders, "payment": "done" });
// }
// function payment(paymentDetails) {
//     if (paymentDetails.payment === "done") {
//         console.log("sucessfully Order placed", paymentDetails);
//     } else {
//         console.log("Order is cancelled", paymentDetails);
//     }
// }


// getUser(1, (user) => {
//     console.log("result -----", user);
//     ordersDetails(user, (orderinfo) => {
//         console.log("result1 ------", orderinfo);
//         processOrders(orderinfo, (processinfo) => {
//             console.log("result2 ------", processinfo);
//             payment(processinfo);

//         });
//     });
// });


// function getUser(id, next) {
//     console.log("user info----", id);
//     next({ id, name: "Venukumar" });

// }
// function orderdetails(user, next) {
//     console.log("Order details ---",);
//     next({ user, "order": ["Laptop", "Mobile", "Charger", "Pouch"] })
// }
// function processOrders(processcingDetails, next) {
//     console.log("Processing Details -----", processcingDetails);
//     next({ processcingDetails, "payment": "done" });
// }
// function payments(paymentDetails) {
//     if (paymentDetails.payment === "done") {
//         console.log("Successfully order placed", paymentDetails);
//     } else {
//         console.log("Your order is cancelled", paymentDetails);
//     }
// }

// getUser(1, (user) => {
//     console.log("user information------", user);

//     orderdetails(user, (ordersinfo) => {
//         console.log("order information -----", ordersinfo);
//         processOrders(ordersinfo, (processingOrders) => {
//             console.log("process details-----", processingOrders);
//             payments(processingOrders);
//         })
//     })
// })



// function getUser(id) {
//     return new Promise((resolve, reject) => {
//         // console.log("user info -----")
//         if (id) {

//             resolve({ id, name: "Venukumar" });
//         } else {
//             reject("user info is not correct",)
//         };
//     });
// };

// function orderdetails(ordersDetails) {
//     return new Promise((resolve, reject) => {
//         if (ordersDetails) {
//             resolve({ ordersDetails, "orders": ["Laptop", "MobilePhone", "MobileCharger"] });
//         } else {
//             reject("orederDetails is not correct");
//         };

//     });
// };
// function processOrders(process) {
//     return new Promise((resolve, reject) => {
//         if (process) {
//             resolve({ process, "payment": "done" })
//         } else {
//             reject("process the details is not corect");
//         };
//     });
// };

// function payments(paymentDetails) {
//     return new Promise((resolve, reject) => {
//         if (paymentDetails.payment === "done") {
//             resolve("Your order placed Successfully");
//         } else {
//             reject("Your order is cancelled");
//         };
//     });
// };

// getUser(1)
//     .then((user) => {
//         console.log("user infoo ---- ", user);
//         return orderdetails(user);
//     }).then((ordersDetails) => {
//         console.log("orderDetails ------", ordersDetails);
//         return processOrders(ordersDetails);
//     }).then((processOrders) => {
//         console.log("process the orders -----", processOrders);
//         return payments(processOrders);
//     }).then((paymentDetails) => {
//         console.log("result ----", paymentDetails);
//     }).catch((err) => {
//         console.log(err);
//     });





// Basic math operations

// function add(a, b, next) {
//     console.log(a, b, next);
//     next(a + b);
// }
// function sub(a, b, next) {
//     console.log(a, b, next);
//     next(a - b);
// }
// function mul(a, b, next) {
//     console.log(a, b, next);
//     next(a * b);
// }
// function div(a, b) {
//     console.log(a, b);
//     return (a / b);
// }

// add(10, 5, (addResult) => {
//     console.log("addResult ----", addResult);
//     sub(50, 30, (subResult) => {
//         console.log("subResult-----", subResult);
//         mul(10, 2, (mulResult) => {
//             console.log("mulResult -----", mulResult);
//             console.log(div(10, 5));
//         })
//     })
// })



// Basic math operations using promise

function add(a, b) {
    return new Promise((resolve, reject) => {
        // let add = a+b;
        if (true) {
            let add = a + b;
            resolve(add);
        } else {
            reject("reject")
        }
    })
}
function sub(a, b) {
    return new Promise((resolve, reject) => {
        if (true) {
            let sub = a - b;
            resolve(sub);
        } else {
            reject("reject");
        }
    })
}

function mul(a, b) {
    return new Promise((resolve, reject) => {
        if (true) {
            let mul = a * b;
            resolve(mul);
        } else {
            reject("reject");
        }
    })
}
function div(a, b) {
    return new Promise((resolve, reject) => {
        if (true) {
            let divide = a / b;
            resolve(divide);
        } else {
            reject("reject");
        }
    })
}


add(10, 5).then((result) => {
    console.log("result ----", result);

})
sub(10, 5).then((result) => {
    console.log("result1 -----", result);
    // return mul(result);

})
mul(10, 4).then((result) => {
    console.log("result2----", result)

})
div(10, 4).then((result) => {
    console.log("result3 ----", result);

});
