// let array_1 = [120, 283, 289, 118, 29, 100];

// let array_2 = [200, 300, 400, 100, 500, 200];

// let sum = [];


// for (let i = 0; i <= array_1.length - 1; i += 1) {
//     sum[i] = array_1[i] + array_2[i];     
// }
// console.log(sum);





//  Adding Two arrays


let a = [20, 30, 40, 50, 10];
let b = [100, 200, 300, 400, 500];

let add = [];


for (let i = 0; i <= a.length - 1; i += 1) {
    add[i] = a[i] + b[i];

}
console.log(add);

//  output -------> [ 120, 230, 340, 450, 510 ]



//  Substracting Two arrays

let c = [100, 200, 300, 400, 500];
let d = [20, 30, 40, 50, 10];

let sub = [];

for (let i = 0; i < c.length; i += 1) {
    sub[i] = c[i] - d[i];
}
console.log(sub);


//  output ----> [ 80, 170, 260, 350, 490 ]




//  Multiplication of Two arrays

let e = [100, 200, 300, 400, 500];
let f = [20, 30, 40, 50, 10];

let mul = [];

for (let i = 0; i < c.length; i += 1) {
    mul[i] = e[i] * f[i];
}
console.log(mul);


//  output ------->[ 2000, 6000, 12000, 20000, 5000 ]




//  Dividing Of Two arrays


let g = [100, 200, 300, 400, 500];
let h = [20, 30, 40, 50, 10];

let div = [];

for (let i = 0; i < c.length; i += 1) {
    div[i] = g[i] / h[i];
}
console.log(div);


//  output -----> [ 5, 6.666666666666667, 7.5, 8, 50 ]