// setTimeout(() => {
//   console.log("This runs after 1 second");
// }, 1000);


// function greet(name) {
//   console.log("Hello", name);
// }

// setTimeout(greet, 2000, "Arun"); 
// Runs after 2 seconds → "Hello Arun"


// const id = setTimeout(() => {
//   console.log("This will not run");
// }, 3000);

// clearTimeout(id); // Cancels the timeout

// setInterval(() => {
//   console.log("tick");
// }, 1000);

// const id = setInterval(() => console.log("tick"), 1000);

// setTimeout(() => {
//   clearInterval(id);
//   console.log("Stopped");
// }, 5000);



// setTimeout
// it is excuted only once

// let id = setTimeout(()=>{
//     console.log("set time out after 3 sce");
// }, 3000)
// clearTimeout(id);


// setInterval

// let id = setInterval(()=>{
//     console.log("bhargava");
// },2000);

// setTimeout(()=>{
//     clearInterval(id)
// },5000);

// let i = 0;

// let id = setInterval(() => {
//     i++;
//     console.log(i);

//     if (i === 10) {
//         clearInterval(id);
//     }
// }, 1000);



for (let i=0; i< 5;i++){

    setTimeout(()=>{
        console.log(i);
    },3000)
}

