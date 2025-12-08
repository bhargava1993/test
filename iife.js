// function mul(a, b) {
//     console.log(a * b);
// }
// // console.log(mul(10, 4));
// mul(10, 5);



// IIFE ( IMMediate Invoked Function Expression)
// (function div(a, b) {
//     console.log(a / b);
// })(20, 4);


(function primeCheck(num) {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (i % 2 === 0) {
            isPrime = false;
            break;
        }
    }
})(19);