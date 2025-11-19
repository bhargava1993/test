let a = [10, 30, 28, 22, 40];

sum = 0;

for (let i = 0; i < a.length; i += 1) {
    sum = sum + a[i];
}
console.log(sum);


//  output ------> 130



let b = [503, 29, 40, 60, 40];

sub = 0;

for (let i = 0; i < b.length; i += 1) {
    sub = sub - b[i];
}
console.log(sub);


//  output ----> -672



let c = [503, 29, 240, 160, 40]

mul = 1;

for (let i = 0; i < c.length; i += 1) {
    mul = mul * c[i];
}
console.log(mul);



//  output -----> 22405632000


let d = [503, 29, 240, 160, 40]

div = 1;

for (let i = 0; i < d.length; i += 1) {
    div = div / d[i];
}
console.log(div);


// output ---->4.4631635474509256e-11

