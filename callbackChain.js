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


function getuser(userInfo) {
    // console.log("userInfo-------",userInfo);
    return new Promise((resolve, reject) => {
        console.log("fetch userinfo");
        if (userInfo.status) {
            resolve({ ...userInfo, name: "venu" });
        } else {
            reject("error in getuser function");
        }
    })

}

function getOrders(user) {
    return new Promise((resolve, reject) => {
        console.log("getOrders data---", user);
        if (user.status) {
            user["orders"] = ["phone", "laptop", "charger"];
            resolve(user);
        } else {
            reject("error in getOrder function");
        }

    })
}

getuser({ id: 1, status: true })
    .then((user) => {
        user["status"] = false;
        return getOrders(user)
    })
    .then(orders => {
        console.log("orders----", orders);
    })
    .catch((error) => {
        console.log("132 error----", error);
    }).finally(() => {
        console.log("finally block");
    })

// getOrders(1).then((data)=>{
//     console.log("getuser data--",data);
// }).catch((error)=>{
//     console.log(console.error);
// })