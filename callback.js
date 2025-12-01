
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

function goodnight() {
    console.log("good goodnight");
}
function evening(callback) {
    console.log("good evening");
    setTimeout(() => {
        callback()
    }, 1000);

}
function afternoon(goodnighcb) {
    //  console.log("line--68--",goodnighcb);

    console.log("good afternoon");

    setTimeout(() => {
        goodnighcb(goodnight);
    }, 1000);

}

morning(afternoon)
// afternoon()
// evening()
// goodnight()

