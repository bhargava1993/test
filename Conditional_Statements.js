// Statements
// Statements are instructions in javascripts

// 1. Conditional statements
// Conditional statements are used to make decisions in code. It runs based on conditions.

// 2. Looping Statements
// Looping statements are used to repeat a block of code in multiple times untill the consition is false.


// 1. Conditional statements

// if (true) {
//     console.log("Venu");

// } else {
//     console.log("Jagan")

// }

// output ---> Venu


// var a = 10;

// if (a = 10) {
//     console.log("True")

// } else {
//     console.log("False")
// }

// output ---> True





// var a = 20
// if (a < 30) {
//     console.log("Smaller number")

// } else {
//     console.log("Bigger number")
// }

// output ---> Smaller Number


// 1. Vote Eligible Program 

// let age = 18;
// if (age >= 18) {
//     console.log("You are eligible to vote")
// } else {
//     console.log("You are not eligible to vote")
// }
// output ---> You are eligible to vote


// let age_ = 16;
// if (age_ >= 18) {
//     console.log("You are eligible to vote")
// } else {
//     console.log("You are not eligible to vote")
// }
// output ---> You are not eligible to vote



// let age = 18;
// if (age >= 18) {
//     console.log("You are eligible to vote")
// } else if (age > 100) {
//     console.log("You are not eligible to vote")
// } else {
//     console.log("You are not eligible to vote")
// }
// // output ----> You are eligible to vote



// let Age = 104;
// if (Age > 100) {
//     console.log("You are not eligible to vote")
// } else if (Age >= 18) {
//     console.log("You are eligible to vote")
// } else {
//     console.log("You are not eligible to vote")
// }
// // output ---> You are not eligible to vote


// let Age = 104;
// if (Age >= 18 && Age <= 100) {
//     console.log("You are eligible to vote")
// } else if (Age > 100) {
//     console.log("You are not eligible to vote")
// } else {
//     console.log("You are not eligible to vote")
// }

// // output ---> You are not eligible to vote.




// 2. Patient has fever or not Program 

// let temperature = 60;
// console.log(temperature >= 90);


// if (temperature >= 90) {
//     console.log("patient has fever");

// } else {
//     console.log("Patient has not fever");

// }
// output ----> patient has not fever


// let temperature = 95;
// console.log(temperature >= 90);


// if (temperature >= 90) {
//     console.log("patient has fever");

// } else {
//     console.log("Patient has not fever");

// }
// output ----> patient has not fever




// 3. Weeks Program 

// let day = 3;

// if (day == 1) {
//     console.log("Today is sunday");
// } else if (day == 2) {
//     console.log("Today is Monday");
// } else if (day == 3) {
//     console.log("Today is Tuesday");
// } else if (day == 4) {
//     console.log("Today is wednesday");
// } else if (day == 5) {
//     console.log("Today is Thursday")
// } else if (day == 6) {
//     console.log("Today is Friday");
// } else if (day == 7) {
//     console.log("Today is Saturday");
// }
// output----> Today is 


// let day = 1;

// if (day == 1) {
//     console.log("Today is sunday");
// } else if (day == 2) {
//     console.log("Today is Monday");
// } else if (day == 3) {
//     console.log("Today is Tuesday");
// } else if (day == 4) {
//     console.log("Today is wednesday");
// } else if (day == 5) {
//     console.log("Today is Thursday")
// } else if (day == 6) {
//     console.log("Today is Friday");
// } else if (day == 7) {
//     console.log("Today is Saturday");
// }

// output----> Today is sunday


// 4. Months Program

// let month = 4;
// if (month == 1) {
//     console.log("This month is Januaury");
// } else if (month == 2) {
//     console.log("This month is Febrauary")
// } else if (month == 3) {
//     console.log("This month is March");
// } else if (month == 4) {
//     console.log("This month is April");
// } else if (month == 5) {
//     console.log("This month is May");
// } else if (month == 6) {
//     console.log("This month is June");
// } else if (month == 7) {
//     console.log("This month is July");
// } else if (month == 8) {
//     console.log("This month is August");
// } else if (month == 9) {
//     console.log("This month is September");
// } else if (month == 10) {
//     console.log("This month is October");
// } else if (month == 11) {
//     console.log("This month is November");
// } else if (month == 12) {
//     console.log("This month is December");
// }

// output ---->This month is April


// let month = 10;
// if (month == 1) {
//     console.log("This month is Januaury");
// } else if (month == 2) {
//     console.log("This month is Febrauary")
// } else if (month == 3) {
//     console.log("This month is March");
// } else if (month == 4) {
//     console.log("This month is April");
// } else if (month == 5) {
//     console.log("This month is May");
// } else if (month == 6) {
//     console.log("This month is June");
// } else if (month == 7) {
//     console.log("This month is July");
// } else if (month == 8) {
//     console.log("This month is August");
// } else if (month == 9) {
//     console.log("This month is September");
// } else if (month == 10) {
//     console.log("This month is October");
// } else if (month == 11) {
//     console.log("This month is November");
// } else if (month == 12) {
//     console.log("This month is December");
// }


//output---> This month is 


// 5. Grades based on Marks Program 

// let marks = 78;

// if (marks >= 90 && marks <= 100) {
//     console.log("The student is passed");
//     console.log("Grade A+");
// } else if (marks >= 80 && marks < 90) {
//     console.log("The student is passed");
//     console.log("Grade A")
// } else if (marks >= 70 && marks < 80) {
//     console.log("The student is passed ");
//     console.log("Grade B+");
// } else if (marks >= 60 && marks < 70) {
//     console.log("The student is passed");
//     console.log("Grade B");
// } else if (marks >= 50 && marks < 60) {
//     console.log("The student is passed");
//     console.log("Grade C");
// } else if (marks >= 35 && marks < 50) {
//     console.log("The student is passed");
//     console.log("Grade D");
// } else {
//     console.log("The student is failed");
//     console.log("Grade E");
// }

// output ----> The student is passed
//              Grade B+



// let marks = 26;

// if (marks >= 90 && marks <= 100) {
//     console.log("The student is passed");
//     console.log("Grade A+");
// } else if (marks >= 80 && marks < 90) {
//     console.log("The student is passed");
//     console.log("Grade A")
// } else if (marks >= 70 && marks < 80) {
//     console.log("The student is passed ");
//     console.log("Grade B+");
// } else if (marks >= 60 && marks < 70) {
//     console.log("The student is passed");
//     console.log("Grade B");
// } else if (marks >= 50 && marks < 60) {
//     console.log("The student is passed");
//     console.log("Grade C");
// } else if (marks >= 35 && marks < 50) {
//     console.log("The student is passed");
//     console.log("Grade D");
// } else {
//     console.log("The student is failed");
//     console.log("Grade E");
// }


// output----> The student is failed
//             Grade E


// Nested if - else conditional statements

// Age + Citizenship Check

// let age = 14;
// let citizen = true;

// if (age >=18){
//     if (citizen = true){
//         console.log("You are eligible for vote");
//     }else{
//         console.log("You are not a citizen to vote");
//         console.log("You must be a citizen to vote");
//     }
// }else{
//     console.log("You are too younger");
//     console.log("You are not eligible to vote");
// }



// output ----> You are too younger
//       -----> You are not eligible to vote 




// Checking Login 

// let username = "Jagan";
// let password = "12345";

// if (username == "Venu") {
//     if (password == "12345") {
//         console.log("Login Succesful..!, Welcome Venu");
//     } else {
//         console.log("Incorrect Password");
//         console.log("Try again");
//     }
// } else {
//     console.log("username not found");
//     console.log("Try again");
// }



// output -----> username not found
//       -------> Try again




//  Grade Calculator

// let score = 74;

// if (score >= 0 && score <= 100) {
//     if (score >= 90) {
//         console.log("Grade A");
//     } else if (score >= 80) {
//         console.log("Grade B");
//     } else if (score >= 70) {
//         console.log("Grade C");
//     } else if (score >= 60) {
//         console.log("Grade D");
//     } else if (score >= 50) {
//         console.log("Grade E");
//     } else if (score < 50) {
//         console.log("Grade F");
//     }
// } else {
//     console.log("Invalid score")
// }


// output ----> Grade C




// The Number is positive,Negative,Zero,even and odd

// let num = -90;

// if (num > 0) {
//     if (num % 2 == 0) {
//         console.log("The Number is Positive and Even");
//     } else if (num % 2 != 0) {
//         console.log("The Number is Positive and Odd");
//     }
// } else if (num < 0) {
//     if (num % 2 == 0) {
//         console.log("The Number is Negative and Even");
//     } else if (num % 2 != 0) {
//         console.log("The Number is Negative and Odd");

//     }
// } else {
//     console.log("The Number is Zero");
// }


// output ----> The Number is Negative and 



//  ATM Withdrawl Logic 

// let amount = 1000;
// let withdraw = 40000;

// if (withdraw > 0) {
//     if (withdraw < amount) {
//         console.log("Withdraw Successful");
//     } else {
//         console.log("Insufficient Balance");
//     }
// } else {
//     console.log("Invalid Amount...!");
//     console.log("Please..., Re-Enter the Amount");
// }




// output ----->  Insufficient Balance



//  Temperature Check

// let temp = 45;

// if (temp >= 0) {
//     if (temp <= 30) {
//         console.log("Temperature is Normal");
//     } else {
//         console.log("Its Hot Outside");
//     }
// } else {
//     console.log("Freezing");
// }



// Output -----> Its Hot Outside



// Shopping Discount

let amount = 500;

if (amount > 50) {
    if (amount >= 500) {
        console.log("You get 50% discount");
    } else if (amount >= 100) {
        console.log("You get 20% discount");
    } else {
        console.log("You get 10% discount");
    }
} else {
    console.log("No discount")
}