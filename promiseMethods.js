// function step1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("step1");
//         }, 4000);
//     });
// }

// function step2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("step2");
//         }, 2000);
//     });
// }

// function step3() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("step3");
//         }, 3000);
//     });
// }

// Promise.race([step1(), step2(), step3()])
//     .then((result) => {
//         console.log("result--------", result);
//     })
//     .finally(() => {
//         console.log("finally");
//     });


// Promise.race([step1(), step2(), step3()])
//     .then((result) => {
//         console.log("result--------", result);
//     })
//     .finally(() => {
//         console.log("finally");
//     });


// Promise.all([step1(), step2(), step3()])
//     .then(([step1Result, step2Result, step3Result]) => {
//         console.log("step1Result--------", step1Result);
//         console.log("step2Result--------", step2Result);
//         console.log("step3Result--------", step3Result);
//     })
//     .finally(() => {
//         console.log("finally");
//     });


// function step1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("step1");
//             resolve();
//         }, 1000); // change time here
//     });
// }

// function step2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("step2");
//             resolve();
//         }, 2000); // change time here
//     });
// }

// function step3() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("step3");
//             resolve();
//         }, 3000); // change time here
//     });
// }

// step1()
//   .then(step2)
//   .then(step3)
//   .then(() => {
//       console.log("All steps done");
//   });
