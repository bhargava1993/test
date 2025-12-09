
// var a = 10;

// function numbers() {
//     // a=20;
//     console.log("inside function a value---", a);
//     var b = 30;
//     // console.log("inside function b value---", b);

//     // {
//     //     console.log("inside block b value---", b);
//     //     let c =40;
//     //      console.log("inside block c value---", c);
//     // }
//     // console.log("function block c value---", c);

//     function sample(){
//         console.log("sample function b---",b);
//         var d = 60;
//     }
//      console.log("number function d---",d);
//     sample();
// }


// console.log(a);
// numbers();
// console.log(a);
// console.log(b);



function outer() {
    let count = 0;

    console.log("outer---", count);
    // ++count;

    function inner() {
        ++count;
        console.log("inner---", count);

    }

    return inner;

    // return count;
}

// console.log(outer());

// const counter = outer();

// console.log(counter);
// console.log(counter);
// console.log(counter);
// console.log(counter);
// console.log(counter);
// counter()
// counter()
// counter()
// counter()
// counter()
// counter()



function createBankAccount() {
    let balance = 0;
    console.log("70 --- Balance:", balance);
    return {
        deposte(amount) {
            balance = balance + amount;
            console.log("74---Balance:", balance);
        },

      withDraw(amount) {
            balance = balance - amount
            console.log("79---Balance:", balance);
        }
    }
}

// let check = createBankAccount();

// check.deposte(100);
// check.withDraw(40);
// check.withDraw(20);


for(var i=0; i<5;i++){

   (function(x){
    setTimeout(()=>{
        console.log(x);
    },1000)
   })(i)
   

}