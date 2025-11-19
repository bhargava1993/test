// statements

// conditional statement
// success -- true - 1
// failure -- false -0,-1,-2

// if()
// else
// else if()
// switch

// ()
// []
// {}

// if(condition){
// // logic
// }else{
//     //fail  someting
// }



// bipc
// mpc

// <
// >
// <=
// >=

// these console log is for success
// console.log(marks >=90);

// these console log is for failure

// console.log(marks >=90);

let marks =75;

// 70
// commerce

if(marks >=90){
console.log("bipc");
}else if(marks >= 80){
console.log("mpc");
}
else{
console.log("commerce");
}


// weeks 

let week ="sunday";
console.log("today is sunday");

week === "sunday"

months


voter


// Nested if–else: Checking Login Role

// Age + Citizenship Check

let age = 21;
let citizen = true;

if (age >= 21) {
    
    if (citizen) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You must be a citizen to vote.");
    }
} else {
    console.log("You are too young to vote.");
}


// Checking Login Role

let username = "admin";
let password = "1234";

console.log(username === "admin");
console.log( password === "1234");



if(username === "admin"){
    if(password === "1234"){
    console.log("this persion is correct");
    }else{
        console.log("password is wrong");
    }
}else{
console.log("Username not found.");
}

if (username === "admin") {
    if (password === "1234") {
        console.log("Login successful. Welcome, Admin!");
    } else {
        console.log("Incorrect password.");
    }
} else {
    console.log("Username not found.");
}

//Grade Calculator

let score = 85;

if (score >= 0 && score <= 100) {
    if (score >= 90) {
        console.log("Grade: A");
    } else if (score >= 80) {
        console.log("Grade: B");
    } else if (score >= 70) {
        console.log("Grade: C");
    } else {
        console.log("Grade: D or F");
    }
} else {
    console.log("Invalid score!");
}

// Number is Positive, Negative or Zero — and Even/Odd
let num = 7;

if (num > 0) {
    if (num % 2 === 0) {
        console.log("Positive and even");
    } else {
        console.log("Positive and odd");
    }
} else if (num < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}

// ATM Withdrawal Logic
let balance = 500;
let withdraw = 200;

if (withdraw > 0) {
    if (withdraw <= balance) {
        console.log("Withdrawal successful!");
    } else {
        console.log("Insufficient balance.");
    }
} else {
    console.log("Invalid amount!");
}


// Temperature Check (Nested Conditions)

let temp = 32;

if (temp >= 0) {
    if (temp <= 30) {
        console.log("Weather is normal");
    } else {
        console.log("It's hot outside");
    }
} else {
    console.log("It's freezing!");
}

//  Shopping Discount
let amount = 120;

if (amount >= 50) {
    if (amount >= 100) {
        console.log("You get a 20% discount!");
    } else {
        console.log("You get a 10% discount!");
    }
} else {
    console.log("No discount.");
}






