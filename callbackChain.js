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

// function add(a, b) {
//     return new Promise((resolve, reject) => {
//         // let add = a+b;
//         if (true) {
//             let add = a + b;
//             resolve(add);
//         } else {
//             reject("reject")
//         }
//     })
// }
// function sub(a, b) {
//     return new Promise((resolve, reject) => {
//         if (true) {
//             let sub = a - b;
//             resolve(sub);
//         } else {
//             reject("reject");
//         }
//     })
// }

// function mul(a, b) {
//     return new Promise((resolve, reject) => {
//         if (true) {
//             let mul = a * b;
//             resolve(mul);
//         } else {
//             reject("reject");
//         }
//     })
// }
// function div(a, b) {
//     return new Promise((resolve, reject) => {
//         if (true) {
//             let divide = a / b;
//             resolve(divide);
//         } else {
//             reject("reject");
//         }
//     })
// }


// add(10, 5).then((result) => {
//     console.log("result ----", result);

// })
// sub(10, 5).then((result) => {
//     console.log("result1 -----", result);
//     // return mul(result);

// })
// mul(10, 4).then((result) => {
//     console.log("result2----", result)

// })
// div(10, 4).then((result) => {
//     console.log("result3 ----", result);

// });





// function step1(callback) {
//     console.log("step1");
//     callback("step1");
// }
// function step2(callback) {
//     console.log("step2");
//     callback("step2");
// }
// function step3(callback) {
//     console.log("step3");
//     callback("step3")
// }
// function step4() {
//     console.log("step4");
//     // callback("Step4")
// };

// step1(() => {
//     step2(() => {
//         step3(() => {
//             step4();
//         })
//     })
// })



// function step1(input) {
//     return new Promise((resolve, reject) => {
//         if (input) {
//             resolve("step1");
//         } else {
//             reject("step1-----error")
//         }
//     })
// }
// function step2(input) {
//     return new Promise((resolve, reject) => {
//         if (input) {
//             resolve("step2");
//         } else {
//             reject("step2--- error")
//         }
//     })
// }
// function step3(input) {
//     return new Promise((resolve, reject) => {
//         if (input) {
//             resolve("step3");
//         } else {
//             reject("step3--- error");
//         }
//     })
// }
// function step4(input) {
//     return new Promise((resolve, reject) => {
//         if (input) {
//             resolve("step4");
//         } else {
//             reject("step4--- error");
//         }
//     })
// };


// async function steps() {
//     try {
//         let result1 = await step1(true);
//         console.log(result1);
//         let result2 = await step2(false);
//         console.log(result2);
//         let result3 = await step3(true);
//         console.log(result3);
//         let result4 = await step4(false);
//         console.log(result4);
//     } catch (error) {
//         console.log("error ------", error);


//     }
//     // let result1 = await step1(true);
//     // console.log(result1);
//     // let result2 = await step2(true);
//     // console.log(result2);
//     // let result3 = await step3(true);
//     // console.log(result3);
//     // let result4 = await step4(false);
//     // console.log(result4);

// }
// steps();






// step1(true)
//     .then((result) => {
//         console.log("result-----", result);
//         return step2(true);
//     })
//     .then((result1) => {
//         console.log("result1 ------", result1);
//         return step3(true);
//     })
//     .then((result2) => {
//         console.log("result2 -----", result2);
//         return step4(false);
//     })
//     .then((result3) => {
//         console.log("result3-----", result3);
//     })
//     .catch((error) => {
//         console.log("error -----", error);
//     })
//     .finally(() => {
//         console.log("finally  ------executed");
//     })



// function getUser(id, next) {
//     console.log("User info-----")
//     next({ id, "name": "Virat kohli" });
// }
// function orderDetails(user, next) {
//     console.log("Order details------")
//     next({ user, "orders": ["fruits", "electonics", "sports things"] });
// }
// function processDetails(order, next) {
//     console.log("Processs orders -----")
//     next({ order, "payment": "done" });
// }
// function payment(paymentDetails) {
//     console.log("Payment -----");
//     if (paymentDetails.payment === "done") {
//         console.log("Your order is successfully placed");

//     } else {
//         console.log("Your order is cancelled");
//     }
// }


// getUser(1, (userinfo) => {
//     console.log("userinfo-----", userinfo);
//     orderDetails(userinfo, (orders) => {
//         console.log("order details-----", orders);
//         processDetails(orders, (process) => {
//             console.log("process details------", process);
//             payment(process);
//         })
//     })

// })



// function getUser(id) {
//     return new Promise((resolve, reject) => {
//         if (id) {
//             resolve({ id, "name": "ViratKohli" });
//         } else {
//             reject("userinfo-----error");
//         }
//     })
// }

// function orderDetails(user) {
//     return new Promise((resolve, reject) => {
//         if (user) {
//             resolve({ user, "orders": ["fruits", "electonics", "sports things"] });
//         } else {
//             reject("order details -----error");
//         }
//     });
// };

// function processDetails(order) {
//     return new Promise((resolve, reject) => {
//         if (order) {
//             resolve({ order, "payment": "done" });
//         } else {
//             reject("order details -----error");
//         }
//     });
// };

// function payment(paymentDetails) {
//     return new Promise((resolve, reject) => {
//         if (paymentDetails.payment === "done") {
//             resolve("Your order is suncessfully placed");
//         } else {
//             reject("Your order is cancelled");
//         }
//     })
// }


// async function simple() {
//     try {
//         let user = await getUser(1);
//         console.log(user);
//         let order = await orderDetails(user);
//         console.log(order);
//         let process = await processDetails(order);
//         console.log(process);
//         let pay = await payment(process);
//         console.log(pay);
//     } catch (error) {
//         console.log("error ----", error);
//     }

// }
// simple();



// getUser(1).then((userinfo) => {
//     console.log("userinfo----", userinfo);
//     return orderDetails(userinfo);

// }).then((orders) => {
//     console.log("order details ------", orders);
//     return processDetails(orders)
// }).then((process) => {
//     console.log("processing the orders-----", process);
//     return payment(process);
// }).then((payment) => {
//     console.log(payment);
// }).catch((error) => {
//     console.log("error ------", error);
// }).finally(() => {
//     console.log("finally executed")
// });





// function subjects(name, next) {
//     console.log("student details---");
//     next({ name, "subject": ["Maths", "English", "Social"] });
// };
// function marks(student, next) {
//     console.log("Student Marks----");
//     next({ student, "marks": [60, 70, 55] });
// };
// function totalMarks(data, next) {
//     console.log("Total Marks----");
//     let total = data.marks.reduce((a, b) => a + b);
//     next({ ...data, total });
// };

// function studentResult(data) {
//     console.log("student results------");
//     if (data.total >= 150) {
//         console.log("Student is passed");
//     } else {
//         console.log("Student is failed");
//     }
// }


// subjects("Venukumar", (studentinfo) => {
//     console.log("student information  -----", studentinfo);
//     marks(studentinfo, (marks) => {
//         console.log("student marks ------", marks);
//         totalMarks(marks, (totals) => {
//             console.log("student total marks----", totals);
//             studentResult(totals);

//         })
//     })
// })



function subjects(name) {
    return new Promise((resolve, reject) => {
        console.log("Student information -----")
        if (name) {
            resolve({ name, "subject": ["Maths", "English", "Social"] });
        } else {
            reject("error in student details");
        }
    })

}
function marks(student) {
    return new Promise((resolve, reject) => {
        if (student) {
            resolve({ student, "marks": [60, 70, 55] })
        } else {
            reject("error in student marks");
        }
    })
}



function totalMarks(mark) {
    return new Promise((resolve, reject) => {
        console.log("student total marks-----")
        let total = mark.reduce((a, b) => a + b);
        if (mark) {
            resolve(total);
        } else {
            reject("error in totalMarks");
        }
    })
}

function studentResult(total) {
    if (total >= 150) {
        console.log("Student is pased");
    } else {
        console.log("Student is failed");
    }
    return total;
}


async function sample() {
    try {
        let student = await subjects("Venukumar");
        console.log(student);
        let mark = await marks(student);
        console.log(mark)
        let totals = await totalMarks(mark.marks);
        console.log(totals);
        let result = await studentResult(totals);
        console.log(result);

    } catch (error) {
        console.log("error----", error);
    }
}

sample();





subjects("Venukumar")
    .then((result) => {
        console.log(result);
        return marks(result);
    })
    .then((marks) => {
        console.log(marks);
        return totalMarks(marks.marks);
    }).then((total) => {
        console.log(total);
        return studentResult(total);

    })//.then((results) => {
    //     console.log(results)
    // })
    .catch((error) => {
        console.log(error);
    }).finally(() => {
        console.log("finally-----executed");
    });
