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



let marks = 26;

if (marks >= 90 && marks <= 100) {
    console.log("The student is passed");
    console.log("Grade A+");
} else if (marks >= 80 && marks < 90) {
    console.log("The student is passed");
    console.log("Grade A")
} else if (marks >= 70 && marks < 80) {
    console.log("The student is passed ");
    console.log("Grade B+");
} else if (marks >= 60 && marks < 70) {
    console.log("The student is passed");
    console.log("Grade B");
} else if (marks >= 50 && marks < 60) {
    console.log("The student is passed");
    console.log("Grade C");
} else if (marks >= 35 && marks < 50) {
    console.log("The student is passed");
    console.log("Grade D");
} else {
    console.log("The student is failed");
    console.log("Grade E");
}


// output----> The student is failed
//             Grade E