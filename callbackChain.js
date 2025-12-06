// Callback()
// Promise()
// async/await


// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback();
// }

// function sayBye() {
//     console.log("GoodBye");
// }

// greet("venu", sayBye);


// sample callbaChain
// --------------------------

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
//         })
//     })
// })


// function step1(input) {
//     return new Promise((resolve, reject) => {
//         console.log("step1 start");
//         if (input) {
//             resolve("step1 executed");
//         } else {
//             reject("step1 error");
//         }
//     })
// }

// function step2(input) {
//     return new Promise((resolve, reject) => {
//         console.log("step2 start");
//         if (input) {
//             resolve("step2 executed");
//         } else {
//             reject("step2 error");
//         }
//     })
// }

// function step3(input) {
//     return new Promise((resolve, reject) => {
//         console.log("step3 start");
//         if (input) {
//             resolve("step3 executed");
//         } else {
//             reject("step3 error");
//         }
//     })
// }

// function step4(input) {
//     return new Promise((resolve, reject) => {
//         console.log("step4 start");
//         if (input) {
//             resolve("step4 executed");
//         } else {
//             reject("step4 error");
//         }
//     })
// }


// async function asyncFn() {
//     loader=true;
//     try {
//         let step1Res = await step1(true);
//         console.log("step1Res-------", step1Res);
//         let step2Res = await step2(true);
//         console.log("step2Res-------", step2Res);
//         let step3Res = await step3(true);
//         console.log("step3Res-------", step3Res);
//         let step4Res = await step4(true);
//         console.log("step4Res-------", step4Res);
//     } catch (error) {
//         console.log("107 error------", error);
//          loader=false;
//     } 


// }

// asyncFn()


// step1();
// console.log(step1());


// step1(true)
//     .then((result) => {
//         console.log("64 restult-----", result);
//         return step4(true);
//     })
//     .then((setp2Result) => {
//         console.log("103 setp2Result--------", setp2Result);
//         return step2(true);
//     })
//     .then((setp3Result) => {
//         console.log("107 setp3Result--------", setp3Result);
//         return step3(true);
//     })
//     .then((setp4Result) => {
//         console.log("111 setp4Result--------", setp4Result);
//     })
//     .catch((error) => {
//         console.log("114 error---", error);
//     })
//     .finally(() => {
//         console.log("finally executed");
//  loader=false;
//     });

// step1(true)
//     .then((result) => {
//         console.log("64 restult-----", result);
//         step2(false).then((step2Response) => {
//             console.log("78 restult-----", step2Response);
//             step3(false).then((step2Response) => {
//                 console.log("78 restult-----", step2Response);
//                 step4(false).then((step2Response) => {
//                     console.log("78 restult-----", step2Response);
//                 }).catch((error) => {
//                     console.log("80 error---", error);
//                 });
//             }).catch((error) => {
//                 console.log("80 error---", error);
//             });
//         }).catch((error) => {
//             console.log("80 error---", error);
//         });
//     })
//     // .then((setp2Result)=>{
//     //     console.log("80 setp2Result--------",setp2Result);
//     // })
//     .catch((error) => {
//         console.log("83 error---", error);

//     })
//     .finally(() => {
//         console.log("finally executed");
//     })

//payment callback chain

// function getuser(id,next){
//     // console.log("fetching user info---", id);

//     // let obj={}
//     // obj["id"]=id;
//     // obj["name"]="venu";


//     next({id, name:"venu"});
// }

// function getOrders(user, next){
// //  console.log("fetching Order info---");
//  next({user, orders:["phone","laptop","charger"]});
// }

// function processOrder(processingDetails, next){
//     // console.log("processing:---",processingDetails);
//     next({processingDetails, "payment":"notDone"});
// }
// function payment(paymentDetails){

//     // console.log("successfully order placed", paymentDetails);
//     if(paymentDetails.payment === "done"){
//         console.log("successfully order placed", paymentDetails);
//     }else{
//          console.log("your order is cancelled", paymentDetails);
//     }
// }

// getuser(1, (user)=>{
//     console.log("user------",user);
//     getOrders(user, (orderInfo)=>{
//         console.log("orderInfo------",orderInfo);
//         processOrder(orderInfo,(processingData)=>{
//             console.log("processOrder------",processingData);
//                 payment(processingData)
//         });
//     });
// })


// convert into promises


// function getuser(userInfo) {
//     // console.log("userInfo-------",userInfo);
//     return new Promise((resolve, reject) => {
//         console.log("fetch userinfo");
//         if (userInfo.status) {
//             resolve({ ...userInfo, name: "venu" });
//         } else {
//             reject("error in getuser function");
//         }
//     })

// }

// function getOrders(user) {
//     return new Promise((resolve, reject) => {
//         console.log("getOrders data---", user);
//         if (user.status) {
//             user["orders"] = ["phone", "laptop", "charger"];
//             resolve(user);
//         } else {
//             reject("error in getOrder function");
//         }

//     })
// }

// getuser({ id: 1, status: true })
//     .then((user) => {
//         user["status"] = false;
//         return getOrders(user)
//     })
//     .then(orders => {
//         console.log("orders----", orders);
//     })
//     .catch((error) => {
//         console.log("132 error----", error);
//     }).finally(() => {
//         console.log("finally block");
//     })

// getOrders(1).then((data)=>{
//     console.log("getuser data--",data);
// }).catch((error)=>{
//     console.log(console.error);
// })