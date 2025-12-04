// async/await:
// ------------


// sample Promise
// ----------------------
// function samplePromises(){
//     return new Promise((resolve,reject)=>{
//         if(true){
//             resolve("success");
//         }else{
//             reject("failure");
//         }
//     });
// }
// console.log(samplePromises());

// samplePromises().then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//      console.log(error);
// }).finally(()=>{
//     console.log("finally");
// });

// function goodMorning() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("good Morning");
//         }, 5000);
//     });
// }

// function afternoon() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("good afternoon");
//         }, 2000);
//     });
// }

// function evening() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("good evening");
//         }, 6000);
//     });
// }

// function goodnight() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("good night");
//         }, 3000);
//     });
// }


// async function sampleAsyncFn(){

   
//     let goodMorning1 = await goodMorning();
//     console.log(goodMorning1)
//     let afternoon1= await afternoon();
//     console.log(afternoon1)
//     let evening1 = await evening();
//     console.log(evening1)
//     let goodNight1 = await goodnight();
//     console.log(goodNight1)
//     return "success";
// }

// sampleAsyncFn()

// console.log();

// console.log("1st settimeout");
// console.log("2nd settimeout");
// setTimeout(()=>{
//     console.log("6st settimeout");
// },4000)
// console.log("3rd settimeout");
// console.log("4th settimeout");


// output:
// 1st settimeout
// 2nd settimeout
// 3rd settimeout
// 4th settimeout
// 6st settimeout

// output:
// 1st settimeout
// 2nd settimeout
// 6st settimeout
// 3rd settimeout
// 4th settimeout

// console.log("----------------------------------");


// setTimeout(()=>{
//     console.log("1st settimeout");
// },4000)

// setTimeout(()=>{
//     console.log("2nd settimeout");
// },3000)

// setTimeout(()=>{
//     console.log("3rd settimeout");
// },2000)

// setTimeout(()=>{
//     console.log("4th settimeout");
// },1000)

// fetch("https://jsonplaceholder.typicode.com/posts/1")

// Http methods:

// get --> fetch 
// post --> inserting data 
// put --> updating data
// patch --> update 
// delete --> delete

// async function fetchData(){

//     let res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let data = await res.json();
//     // console.log("133 res---",data);

//     return data;

// }
// console.log(fetchData());

// fetchData().then((result)=>{
//     console.log("141 result---",result);
// })
// function fetchData(){
//     return new Promise((resolve, reject)=>{
       
//      fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((res) => res.json())
//     .then((data) => resolve(data))
//     .catch((err) => reject(err));

//     })
// }
// fetchData().then((data)=>{
//      console.log("data----",data);
// }).catch((error)=>{
//     console.log("error----",error);
// })