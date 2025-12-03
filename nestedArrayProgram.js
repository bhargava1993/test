
let array = ["a", "b", 10, 50, [100, 200], "c", "d", ["bhargava", "venu", ["zaiba", "btec", [1000, 2000, ["mca", "javascript"]]]], "e", "f", "g", "h"];


// console.log(array.flat(Infinity));



// let temp = [...array];
// let result = [];
// // let temp = [...array];


// for (let i = 0; i < temp.length; i++) {
//     if (!Array.isArray(temp[i])) {
//         result.push(temp[i])
//     } else {
//         for (let j = 0; j < temp[i].length; j++) {
//             if (!Array.isArray(temp[i][j])) {
//                 result.push(temp[i][j])
//             } else {
//                 for (let k = 0; k < temp[i][j].length; k++) {
//                     if (!Array.isArray(temp[i][j][k])) {
//                         result.push(temp[i][j][k]);
//                     } else {
//                         for (let l = 0; l < temp[i][j][k].length; l++) {
//                             if (!Array.isArray(temp[i][j][k][l])) {
//                                 result.push(temp[i][j][k][l]);
//                             } else {
//                                 for (let m = 0; m < temp[i][j][k][l].length; m++) {
//                                     if (!Array.isArray(temp[i][j][k][l][m])) {
//                                         result.push(temp[i][j][k][l][m]);
//                                     } else {
//                                         for (let n = 0; n < temp[i][j][k][l][m].length; n++) {
//                                             if (!Array.isArray(temp[i][j][k][l][m][n])) {
//                                                 result.push(temp[i][j][k][l][m][n]);
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }


// console.log(temp);

// console.log(result);




// Use recursive function

// let result = [];


// function mergeArray(array) {
//     for (let val of array) {
//         if (Array.isArray(val)) {
//             // mergeArray(val);
//             // result.push(val);
//             mergeArray(val);
//         } else {
//             result.push(val);
//         }
//     }
// }

// console.log(array);
// mergeArray(array);

// console.log(result);

