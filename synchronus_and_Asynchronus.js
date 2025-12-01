// synchronus 
// synchronus programming of code runs line by line 
// It will execute series wise (line by line) 
// By default javascript code runs line by line


// console.log("venu");
// console.log("Bhargav");
// console.log("Sudheer");
// setTimeout(() => {
//     console.log("Jagan");
// });
// console.log("Hari");


// setTimeout()

// setTimeout is the timer function in javascript ,
//  where we need to use asynchronus function and later we need to add some timer.

// Asynchronus Programming
//  It will execute based on priority , we need to tell the which line of code will execute first
// and which line of code will execute second.

// Eg   Uber ;
// person 1 ---> He ordered first,  1km 
// person 2 ---> He ordered third , 2km
// person 3 ---> He ordered fourth , 3km
// person 4 ---> He orderd second , 4km

//  In a cab driver firstly he will go to pick the peson 
// whom near to that cab , which is taking less time ,he will go and pick them,
// after  the next person whom near to that person and driver will go pick him
// 

//  Firstly he will go to pick pick person 1 beacuase he is just 1 km left to the cab.
// second he will go to pick person 2 beacause ,he is near to the cab.
// after he will pick person 3 and person 4 based on thier distances.


//  here the ordered doesn't matter ,whom ever near to that cab is matter(distance).



// console.log("1,2,34,");
// setTimeout(() => {
//     console.log("Venu");
// }, 1000);
// console.log("!@##");
// console.log("Bhargava");


// In this setTimeout() function will execute the last 


// To achieve synchronus to asynchronus programming, we have different methods,
//  here one of the simple way is setTimeout()  method



// Callback
// callback function is a function if you give the parameter of a  function to the another function is called callbaack function 


// function morining(callback) {
//     console.log("line --- 66", callback);
//     // callback();
//     console.log("Good morning");
//     callback(evening);
// }

// function evening(callback) {
//     // console.log("line ---- 73", callback);
//     console.log("Good evening");
//     // callback();

// }
// function afternoon(callback) {
//     // console.log("line ---77", callback);
//     console.log("Good afternoon");
//     // callback();
// }

// function night() {
//     // console.log("line---85", callback);
//     console.log("Good night");
//     // evening(callback);
// }


// morining(afternoon);
// afternoon(night);
// evening();
// night();





function morining(callback) {
    console.log("line --- 66", callback);
    console.log("Good morning");
    callback(evening);
}

function evening(callback) {
    console.log("line ---107", callback);
    console.log("Good evening");
    callback();
}
function afternoon(callback) {
    console.log("line --- ", callback);
    console.log("Good afternoon");
    callback(night);
}

function night() {
    console.log("Good night");
}


morining(afternoon);
evening();