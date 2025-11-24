let num = 4;

let result = 0;

for (let i = 1; i <= 10; i += 1) {
    result = num + "*" + i + "=" + num * i;
    console.log(result);
}

//  output 

// 4*1=4
// 4*2=8
// 4*3=12
// 4*4=16
// 4*5=20
// 4*6=24
// 4*7=28
// 4*8=32
// 4*9=36
// 4*10=40



for (let i = 1; i <= 10; i += 1) {
    result = num * i;
    console.log(result);
}

// output

// 4
// 8
// 12
// 16
// 20
// 24
// 28
// 32
// 36
// 40