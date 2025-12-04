
// It executes only one time

// setTimeout(() => {
//     console.log("Hi Venukumar")
//     console.log("Your age is 22");
// }, 1000);


// It will print continuosly untill we can stop.

// let sample = setInterval(() => {
//     console.log("Hi venukumar");
// }, 1000);


// setTimeout(() => {
//     clearInterval(sample);
//     console.log("Stop");        // It stops 4th iteration

// }, 4000)



// let id = setInterval(() => console.log("Venukumar"), 4000)

// setTimeout(() => {
//     clearInterval(id);
//     console.log("stop");
// }, 5000)









// setTimeout(() => {
//     console.log("This runs after 1 second");
// }, 1000);
// function greet(name) {
//     console.log("Hello", name);
// }

// console.log(greet);

// setTimeout(greet, 2000, "Arun");
// // Runs after 2 seconds → "Hello Arun"


// const id = setTimeout(() => {
//     console.log("This will not run");
// }, 3000);

// clearTimeout(id); // Cancels the timeout

// setInterval(() => {
//     console.log("tick");
// }, 1000);

// const id = setInterval(() => console.log("tick"), 1000);

// setTimeout(() => {
//     clearInterval(id);
//     console.log("Stopped");
// }, 5000);



// let i = 0;
// let id = setInterval(() => {
//     i++;
//     console.log(i);
//     if (i === 10) {
//         clearInterval(id);
//     }
// }, 900)



// for (let i = 0; i <= 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 4000)
// }

for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 3000);
};


for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 4000)
}



