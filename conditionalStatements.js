// CONDITIONAL STATEMENTS

// Conditional statements are used to make decisions in code
/*
if statement

if else

if else if else

nested if
*/

// IF STATEMENT

// let a = true;

// if (a == 1){
//     console.log("True");
// }

// if (a==1){
//     console.log("False");
// }

// IF ELSE STATEMENT

// let a = "Sudheer";

// if (a == "Sudheer"){
//     console.log("WEB DEVELOPER");
// } else{
//     console.log("Not a Job Holder");
// }

// let a = 10;

// if (a==true){
//     console.log("True Statement");
// }else{
//     console.log("False Statement");
// }

// let a = 1;

// if (a==true){
//     console.log("True Statement");
// }else{
//     console.log("False Statement");
// }

// Bigger Number  or Smaller Number

// let a = 34;

// if (a < 40){
//     console.log("Variable 'a' is a smaller number");
// }else {
//     console.log("Variable 'a' is a bigger number");
// }

// Vote Eligible Program

// let a = 12;

// if (a >= 18){
//     console.log("Eligible for Vote");
// }else{
//     console.log("Not eligible gor vote");
// }

// let b = 22;

// if (b>=18){
//     console.log("Eligible for vote");
// }else{
//     console.log("Not eligible for vote");
// }

// let age = 103;

// if (age>100){
//     console.log("You are not eligible for vote");
// }else if(age>=18){
//     console.log("You are eligible for vote");
// }else{
//     console.log("You are eligible for vote");
// }

// let age = 93;

// if (age>100){
//     console.log("You are not eligible for vote");
// }else if(age>=18){
//     console.log("You are eligible for vote");
// }else{
//     console.log("You are eligible for vote");
// }

// let age = 3;

// if (age>100){
//     console.log("You are not eligible for vote");
// }else if(age>=18){
//     console.log("You are eligible for vote");
// }else{
//     console.log("You are eligible for vote");
// }

// let age = 122;

// if ((age >= 18) && (age <= 100)){
//     console.log("You are eligible for vote");
// }else if (age > 100){
//     console.log("You are not eligible for vote");
// }else {
//     console.log("You are not eligible for vote");
// }

// let age = 23;

// if ((age >= 18) && (age <= 100)){
//     console.log("You are eligible for vote");
// }else if (age > 100){
//     console.log("You are not eligible for vote");
// }else {
//     console.log("You are not eligible for vote");
// }


// Patient has fever or not program

// let temperature = 96;

// if (temperature >= 98){
//     console.log("Patient had fever");
// }else {
//     console.log("Patient doen't have fever");
// }

// let temperature = 102;

// if (temperature >= 98){
//     console.log("Patient has fever");
// }else{
//     console.log("Doesn't have fever");
// }

// Week days program

// let day = 3;

// if (day == 1){
//     console.log("Day is Sunday");
// }else if(day == 2){
//     console.log("Day is Monday");
// }else if(day == 3){
//     console.log("Day is Tuesday");
// }else if(day == 4){
//     console.log("Day is Wednesday");
// }else if(day == 5){
//     console.log("Day is Thursday");
// }else if (day == 6){
//     console.log("Day is Friday");
// }else{
//     console.log("Day is Saturday");
// }

// let month = 1;

// if (month == 1){
//     console.log("This month is a January");
// }else if(month == 2){
//     console.log("This month is February");
// }else if(month == 3){
//     console.log("This month is a March");
// }else if(month == 4){
//     console.log("This month is a April");
// }else if(month == 5){
//     console.log("This month is a May");
// }else if(month == 6){
//     console.log("This month is a June");
// }else if (month == 7){
//     console.log("This month is a July");
// }else if(month == 8){
//     console.log("This month is a August");
// }else if(month == 9){
//     console.log("This month is a September");
// }else if(month == 10){
//     console.log("This month is a October");
// }else if(month == 11){
//     console.log("This month is a November");
// }else{
//     console.log("This month is a December");
// }

// let month = 6;

// if (month == 1){
//     console.log("This month is a January");
// }else if(month == 2){
//     console.log("This month is february");
// }else if(month == 3){
//     console.log("This month is a March");
// }else if(month == 4){
//     console.log("This month is April");
// }else if(month == 5){
//     console.log("This month is a May");
// }else if(month == 6){
//     console.log("This month is a June");
// }else if(month == 7){
//     console.log("This month is a July");
// }else if(month == 8){
//     console.log("This month is a August");
// }else if(month == 9){
//     console.log("This month is a september");
// }else if(month == 10){
//     console.log("This month is a October");
// }else if(month == 11){
//     console.log("This month is November");
// }else if(month == 12){
//     console.log("This month is a Decemer");
// }else {
//     console.log("None");
// }


// Grades based on marks

// let marks = 73;

// if (marks >= 90 && marks <= 100){
//     console.log("Student passed");
//     console.log("Grade is A+");
// }else if(marks >= 80 && marks <90){
//     console.log("Student Passed");
//     console.log("Grade is A");
// }else if(marks >= 70 && marks < 80){
//     console.log("Student Passed");
//     console.log("Grade is B+");
// }else if(marks >= 60 && marks < 70){
//     console.log("Student Passed");
//     console.log("Grade is B");
// }else if(marks >= 50 && marks < 60){
//     console.log("Student Passed");
//     console.log("Grade is C")
// }else if(marks >= 40 && marks < 50){
//     console.log("Student Passed");
//     console.log("Grade is D");
// }else if(marks >= 36 && marks < 40){
//     console.log("Student Passed");
//     console.log("Grade is E");
// }else{
//     console.log("Student is Failed");
// }

// let marks = 23;

// if (marks >= 90 && marks <=100){
//     console.log("Student Passed");
//     console.log("Grade is A+");
// }else if(marks >= 80 && marks < 90){
//     console.log("Student Passed");
//     console.log("Grade is A");
// }else if(marks >= 70 && marks < 80){
//     console.log("Student Passed");
//     console.log("Grade is B+");
// }else if(marks >= 60 && marks < 70){
//     console.log("Student Passed");
//     console.log("Grade is B");
// }else if(marks >= 50 && marks < 60){
//     console.log("Student Passed");
//     console.log("Grade is C");
// }else if(marks >= 40 && marks < 50){
//     console.log("Student Passed");
//     console.log("Grade is D");
// }else if(marks >= 36 && marks < 40){
//     console.log("Student Passed");
//     console.log("Grade is E");
// }else{
//     console.log("Student is Failed");
// }



