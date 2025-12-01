// Spread Operator
//  It is denoted with [... varaible_name]
//  It will work only arrays and objects
//  It will not work in variables
//  It is used as deep copy.
//  It is used to add multiple arrays also.




// Shallow Copy

//  firstly copy the variable , when we trying to modify the copied varible and original variable also modified (or)changed.
//  It will changed (or) ffect to the original variable this should not happening.
//  This should not happening
//  To avoid this problem to introduced in spread operator

// let array = ["Venu", "Sudheer", "Bhargav", "Jagan", "Anji"];

// let a = array;

// a.push("Hari");

// console.log(a);

// // array.push("Murali");

// console.log(array);



//  Deep copy

//  when we trying to modify the copied variable and the original data is not modified.
//  It will not affect the original variable.




// let b = [...array];

// b.push("Ganesh", "Murali");
// console.log(b);

// array.push("Hari");
// console.log(array);


// By combine multiple arrays into single array

// let a = ["Apple", "Banana"];

// let b = ["Mango", "Orange"];

// let c = ["Sapota", "Grapes"];

// let result = [];

// for (let i = 0; i < a.length; i++) {
//     result.push(a[i]);
// }

// for (let i = 0; i < b.length; i++) {
//     result.push(b[i]);
// }

// for (let i = 0; i < c.length; i++) {
//     result.push(c[i]);
// }


// console.log(result);


// Instead of creating multiple for loops when we will use spred operator.

// let result = [...a, ...b, ...c];
// console.log(result);

//  output ----> [ 'Apple', 'Banana', 'Mango', 'Orange', 'Sapota', 'Grapes' ]




// JSON.stringify()
//  It is going to convert anything into sring format
// JSON.parse()
//  It is going to convert agiain into original format

// let array = ["Hyd", "Bng", "Chennai", "Delhi", "Vizg"];
// console.log(array);

// console.log(JSON.stringify(array));

// console.log(JSON.parse(JSON.stringify(array)));


//  Why we use JSON.stringify and JSON.parse
//  Beacuase of spread operator will not work in nested arrays or nested objects
//  Then we will use this functions.
//  spread operator (or) deep copy will work only first level of arrays or objects



// let array = ["Hyd", "Bng", "Chennai", ["Gujarat", "Punjab"], "Delhi", "Vizg"];

// // console.log(array);

// let a = [...array];

// // a.push("lucknow");
// // console.log(a);
// a.splice(2, 1, "Kerala");

// a.splice(4, 0, "JammuKashmir");
// console.log(a);
// console.log(array);


// let obj = {
//     "Name": "Venu",
//     "Age": 22,
//     "details": {
//         "job": "Mernstack developer",
//         "Salary": 50000
//     }
// }

// // console.log(obj);

// // let a = { ...obj };

// let a = (JSON.parse(JSON.stringify({ ...obj })));
// // console.log(a);

// // obj.marks = 650;
// // console.log(obj);

// a.details.maths_marks = 60;
// console.log(a);               // It will change the original array also this should not happening ,so we use json.stringify and json.parse
// console.log(obj);