
// functions: functions are used for reusing code

// Syntax:

// function function_Name(){
//     //bussiness logic
//     return;
// } 

// function_Name();

// without parameters/aruments/ input parametr/input arguments
// function sample(){
//     console.log("sample function");
//     return 100000;
//       console.log("after sample function");
// }

// console.log(sample());

// let a = 10;
// console.log(a);

// a,b,c

//with parametrs
// function sample (c,b,a)   {

//     console.log(c,b,a);
//     console.log("sample function");
//     return true;

// }

// console.log(sample(10,20,30));

// a+b;
// function tables(number) {

//     for (let i = 1; i <= 10; i++) {
//         console.log(number + "*" + i + "=" + number * i);
//     }
//     return "success";

// }

// console.log(tables(10));
// console.log(tables(20));

// function findUniqueArray(inputArray){
//     console.log(inputArray);

//     return [...new Set(inputArray)];
// }

// let array=[1,3,6,2,3,6,1,8,7,9,8,4]

// console.log(findUniqueArray(array));


// name less/ ananomus function

// function (){
// return;
// }

// let array=[1,3,6,2,3,6,1,8,7,9,8,4];


// array.forEach(function(element){
//     console.log(element*10);
// })

// array.map(function(element){
//     console.log(element);
// })


// for(let i=0;i<array.length;i++){
//     console.log(array[i]);
// }


// const a = 10;
// console.log(a);

//function express
// const sampleFn = function (a,b,c) {
//     console.log(a,b,c);
//     return 10;
// }

// console.log(sampleFn(10,20,30));


//default parameters

// function defaultFn(student1="absent",student2="absent",student3="absent"){

//     console.log(student1,student2,student3);
//     return true;
// }

// let student1 = "present";
// let student2 = "present";
// let student3 = "present";

// console.log(defaultFn());

// function defaultFn(discount =10){
// console.log(discount);
// return;
// }

// console.log(defaultFn())


//arrow function

// const sample = (a,b)=>{
//     console.log(a,b);
//     return;
// }

// console.log(sample(10,20));

// a+b
// function add(a,b){
//     return a+b;
// }

// console.log(add(10,20));

// const add = (a, b) =>a+b;

// console.log(add(10, 20));

// let array=["bhargava","venu","sudheer","zaiba"];

// let result = array.filter(function(ele){
//     return ele === "sudheer"
// })
// console.log(result);

// console.log(array.filter((ele)=> ele === "venu"));


// Callback()

// higher order functions
// function sample(sample2){

// }

// function sample2(){

// }