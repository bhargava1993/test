// let a = [10, 20, 30, 40, 50];
// let b = [60, 70, 80, 90, 100];


// let copy = a;
// a = b;
// b = copy;

// console.log(a);
// console.log(b);


// let a = 5;
// let b = 10;

// let copy = a;
// a = b;
// b = copy;

// console.log(a);
// console.log(b);


// let a = 50, b = 100, temp;
// console.log(a);
// console.log(b);
// console.log(temp);


// temp = a;
// // console.log(temp);

// a = b;
// b = temp;
// console.log(a);
// console.log(b);



// console.log(temp);



let array = [1, 2, 6, 9, 4, 8, 10], temp, temp2, temp3, temp4;



// temp = [...array][4];
// temp2 = [...array][2];
// temp3 = [...array][5];
// temp4 = [...array][3];

temp = array[4];
temp2 = array[2];
temp3 = array[5];
temp4 = array[3];

array[2] = temp;
array[3] = temp2;
array[4] = temp3;
array[5] = temp4;
console.log(array);

// console.log([...array].sort((a, b) => a - b));
// console.log([...array].sort((a, b) => b - a));


// let a = [10, 2, 100, 134, 245, 23, 45, 42, 53, 550, 6];
// console.log(a.sort());
