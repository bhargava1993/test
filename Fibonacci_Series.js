// let num = 10;         // Prints 10 numbers
// let a = 0;
// let b = 1;

// console.log(a);
// console.log(b);

// for (let i = 2; i <= num; i++) {
//     let c = a + b;
//     console.log(c);
//     a = b;
//     b = c;
// }



//                           (or)



// let num = 10;
// let a = -1;
// let b = 1;


// for (let i = 0; i <= num; i++) {
//     let c = a + b;
//     console.log(c);
//     a = b;
//     b = c;
// }




let num = 10;          // Prints numbers below 10
let a = -1;
let b = 1;

for (let i = 0; i <= num; i++) {
    let c = a + b;
    if (c <= num) {
        console.log(c);
        a = b;
        b = c;
    }
}