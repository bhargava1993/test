
// syncronus/ asyncronos



// console.log("task 1");
// console.log("task 2");

// setTimeout(()=>{
// console.log("task 2");
// })

// console.log("task 3");
// console.log("task 4");


// person 1 -first 2
// person 2 - 3 
// person 3 - 4
// person 4 -first



//output:
// 1
// 2
// 3


// console.log("good morning");
// console.log("good afternoon");
// console.log("good evening");
// console.log("good night");

//output:
// good morning
// good afternoon
// good evening
// good night


// callback function:    callback function is function 
// if you send one function as an argument to another function
//  then it is called as callback function.
// ---------------------------------------------------------

// let timmer=()=>{
//     console.log("sample timer function");
//     return;
// }
// setTimeout(timmer);


function morning(callback) {
    // console.log("line--55--",callback);

    console.log("good morning");
    setTimeout(() => {
        callback(evening);
    }, 1000)

}

// function goodnight() {
//     console.log("good goodnight");
// }
// function evening(callback) {
//     console.log("good evening");
//     setTimeout(() => {
//         callback()
//     }, 1000);

// }
// function afternoon(goodnighcb) {
//     //  console.log("line--68--",goodnighcb);

//     console.log("good afternoon");

//     setTimeout(() => {
//         goodnighcb(goodnight);
//     }, 1000);

// }

// morning(afternoon)
// afternoon()
// evening()
// goodnight()


// function add(a,b, callback){
//     console.log(a, b, callback);
//    return callback(a,b);
// }

// function logicAdd(a,b){
//     // console.log(a+b);
//     return a+b;
// }

// console.log(add(10,20, logicAdd));
// 0/10
// 10/0
// callback("error message", null);
// callback(null, "success");

// 20/10

// function divide(a,b, callback){
//     // console.log(a,b, callback);

//     if( a == 0 || b == 0){

//          callback("input arguments reviceving 0, Please check and send correct inputs", null);
//          return;
//     }else{
//         let division = a/b;

//         callback(null, division);
//     }

// }

// divide(20,10,(err,response)=>{
//     if(err){
//          console.log("error---",err);
//     }else{
//         console.log("response-----",response)
//     } 
// })

// function getDBData(tablename, select, callback){

//     let response = `select * from ${tablename}`;

//     if(response){
//         callback(null,response)
//     }else{
//          console.log("not geeting data", null);
//     }


// }

// getDBData("student", "ALL", (err,res)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(res);
//     }
// })




// function divide(a, b, callback) {
//     if (b === 0) {
//         callback("Cannot divide by zero", null);
//     }
//     else {
//         callback(null, a / b);
//     }
// }

// divide(10, 0, (err, result) => {
//     if (err) {
//         console.log("Error:", err);
//     }
//     else {
//         console.log("Result:", result);
//     }
// });


//data types check
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
//     }else if (typeof data == "boolean") {
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

// callback chaining

//  promises

// function findDatatype(data, callback) {
//     console.log(typeof data);

//     if (typeof data === "string") {

//         if (typeof data === "number") {

//             if (Array.isArray(data)) {

//                 if (typeof data == "boolean") {
//                     if (typeof data == "object") {
//                         callback(null, "data is object");
//                     }
//                     callback(null, "data is boolean");
//                 }
//                 callback(null, "data is Array");
//             }

//             callback(null, "data is number");

//         }
//         callback(null, "data is string");
//     }



// }

// findDatatype(true, (err, response) => {

//     if (err) {
//         console.log("err---------", err);
//     } else {
//         console.log("response---", response);
//     }

// })






