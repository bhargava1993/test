// function
// function is a block of code it performs a specific task when its called .
// functions are used for reusability purpose
// when we want to execute the code ,we don't need to write the whole code ,just we called its execute.


// function first_name() {
//     console.log("Venukumar");
// }
// console.log(first_name());



//  Function without parameter

// function last_name() {
//     console.log("Jagan");
//     return true;
// }
// console.log(last_name());


// Function with parameters

// function values(a, b, c) {
//     console.log(a, b, c);
//     return true;
// }
// console.log(10, 30, 20);


//  Function with parameters and arguments

// function values(a, b) {
//     return a + b;
// }
// console.log(values(10, 20));


// function values(a, b) {
//     return b - a;
// }
// console.log(values(10, 20));


// function values(a, b) {
//     // console.log(a + b);
//     return a + b;
// }
// console.log(values(10, 20));
// console.log(values(30, 50));
// console.log(values(40, 60));



// function table(num) {
//     for (let i = 1; i <= 10; i++) {
//         let result = num + "*" + i + "=" + num * i;
//         console.log(result);
//     }
//     return 0;
// }
// console.log(table(4));
// console.log(table(20));



// let array = [10, 20, 30, 40, 50, 60];
// array.forEach(function (element) {
//     console.log(element);
// })

// //             (or)
// array.map(function (ele) {
//     console.log(ele);
// })

//                  (or)

// array.filter(function (ele) {
//     console.log(ele);
// }



// Default Parameters
// Default parameters allows us to set default values for the function parameters.
// If the user doesn't give the input value it will take automatically default values.
// It helps to avoid errors and make function is more flexible.


// function defaultFn(student1, student2 = "absent", student3 = "absent") {
//     console.log(student1, student2, student3);
//     return true;
// }
// let student1 = "present";
// let student2 = "present";
// let student3 = "present";

// console.log(defaultFn(student1, student2));
// console.log(defaultFn(student1, student2, student3));
// console.log(defaultFn(student1, null, student3));
// console.log(defaultFn(student1, student3));
// console.log(defaultFn(student2, null, null));
// console.log(defaultFn(null, student1));
// console.log(defaultFn(student3, student1, ));


// Function Expression

// An ananymous function assign it a variable then it is called Function Expression.

// const firstName = function () {
//     console.log('Hello');
//     return 10;
// }
// console.log(firstName());


// Arrow Functions
// It introduced in ES6
// These features make code easier and shorter to manage the code.
// whenever we are going to run single line of code then we will use this arrow functions.

// const sample = () => {
//     console.log("Hello");
//     return true;
// }
// console.log(sample());


// const sample = (a, b) => {
//     return a + b;
// }
// console.log(sample(10, 40));



// let array = [13, 14, 25, 35, 25, 63, 74, 52, 32];
// array.sort();
// console.log(array);

// console.log(array.filter((ele) => ele === 35));

// let result = array.filter(function (ele) {
//     return ele === 74;
// });
// console.log(result);


// let result_1 = array.filter((ele) => ele === 74);
// console.log(result_1);


//  TO find maximum value of an array

// for (let i = 0; i < array.length; i++) {
//     if (max < array[i]) {
//         max = array[i];
//     }
// }
// console.log(max);


//  Uing functions

// function Value(array) {
//     let max = array[0];

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i];
//         }
//     }
//     return max;
// }

// let numbers = [13, 40, 25, 46, 86];

// let array_1 = [12, 24, 35, 46, 56, 11, 10];
// console.log(Value(numbers));
// console.log(Value(array_1));


// function factorial(num) {
//     fact = 1;
//     for (let i = 1; i < num; i++) {
//         fact = fact * i;
//     }
//     // console.log(fact);

//     return fact;

// }
// console.log(factorial(6));


// function sample() {
//     // console.log("Hello");
//     return "Hello";
// }
// console.log(sample())


// let array = ["Venu", "Sudheer", "Venu", "Karthik", "Sudheer", "Jagan", "Karthik"];


// // let cities = ["Hyd", "Bng", "Chennai", "Hyd", "Chennai", "Punjab", "Kolkatta"];

// let unique = [];

// for (let i = 0; i < array.length; i++) {
//     let exists = unique.includes(array[i]);
//     if (!exists) {
//         unique.push(array[i]);
//     }
// }
// console.log(unique);

// let obj = {};

// keys = Objects.keys()

// for (let i = 0; i < array.length; i++) {
//     if (obj[array[i]]) {
//         obj[array[i]] = obj[array[i]] + 1;
//     } else {
//         obj[array[i]] = 1
//     }
// }
// console.log(obj);

// console.log(Object.keys(obj));


//  To find unique values in an array using functions

let names = ["Venu", "Sudheer", "Venu", "Karthik", "Sudheer", "Jagan", "Karthik"];
let cities = ["Hyd", "Bng", "Chennai", "Hyd", "Chennai", "Punjab", "Kolkatta"];


// function unique_values(array) {
//     let unique = [];
//     for (i = 0; i < array.length; i++) {
//         let exists = unique.includes(array[i]);
//         if (!exists) {
//             unique.push(array[i]);
//         }
//     }
//     return unique;
// }
// console.log(unique_values(names));
// console.log(unique_values(cities));



// TO find the count of each value in an array using functions

// let fruits = ["Apple", "Banana", "Grapes", "Apple"]


// const count = function count_of_values(array) {
//     let obj = {};
//     for (let i = 0; i < array.length; i++) {
//         if (obj[array[i]]) {
//             obj[array[i]] = obj[array[i]] + 1;
//         } else {
//             obj[array[i]] = 1;
//         }
//     }
//     console.log(obj);
//     return Object.keys(obj);
// }
// console.log(count_of_values(names));
// console.log(count_of_values(cities));


// console.log(count_of_values(fruits));

// const count = count_of_values(fruits);

// console.log(count(fruits));
// console.log(count(names));


// let word = "Listen";
// let sortWord = "Silent";

// console.log(word.toLowerCase());
// console.log(sortWord.toLowerCase());
// console.log(word.split());
// console.log(sortWord.split());

// console.log(word.toLowerCase().split("").sort());
// console.log(sortWord.toLowerCase().split("").sort());


// Anagram Program ;

// let firstWord = "Heart";
// let secondWord = "Earth";


// let first_word = firstWord.toLowerCase().split("").sort().join("");
// let second_word = secondWord.toLowerCase().split("").sort().join("");

// console.log(first_word);
// console.log(second_word);

// if (first_word === second_word) {
//     console.log("It is a anagram");
// } else {
//     console.log("It is not a anagram");
// }



// // Anagram Program using Function;
// function anagramCheck(word, sortWord) {

//     let first_word = word.toLowerCase().split("").sort().join();
//     let second_word = sortWord.toLowerCase().split("").sort().join();

//     console.log(first_word);
//     console.log(second_word);

//     if (first_word === second_word) {
//         console.log("It is a anagram");
//     } else {
//         console.log("It is not a anagram");
//     }
//     return first_word === second_word;
// }
// console.log(anagramCheck("Listen", "Silent"));



//  Find the Even numbers of an array

// let array_1 = [12, 24, 35, 23, 45, 34, 57, 64, 68, 74];

// function even(array) {
//     let even = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             even.push(array[i]);
//         }
//     }
//     return even;
// }
// console.log(even(array_1));

// let even = [];
// for (let i = 0; i < array_1.length; i++) {
//     // console.log(array_1[i])
//     if (array_1[i] % 2 === 0) {
//         even.push(array_1[i]);
//     }
// }
// console.log(even);



//  To find the Odd numbers in an array

// let array_1 = [12, 24, 35, 23, 45, 34, 57, 64, 68, 74];
// function odd(array) {
//     let odd = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 !== 0) {
//             odd.push(array[i]);
//         }
//     }
//     return odd;
// }
// console.log(odd(array_1));



// To find the palindrome using the functions

// function palindrome(string) {
//     revString = "";
//     for (let i = string.length - 1; i >= 0; i--) {
//         revString = revString + string[i];

//     }
//     return (string === revString);
// }
// console.log(palindrome("level"));
// console.log(palindrome("Venu"));
// console.log(palindrome("racecar"));



// To find the palindrome number using functions

// function palindrome(numbers) {
//     revNum = "";
//     let num = JSON.stringify(numbers);
//     for (let i = num.length - 1; i >= 0; i--) {
//         revNum = revNum + num[i];

//     }
//     return (num === revNum);
// }
// console.log(palindrome(1221));
// console.log(palindrome(1241));
// console.log(palindrome(2002));


//  Fibonacci series using functions


// function fibonacci(num) {
//     let a = -1;
//     let b = 1;
//     for (let i = 0; i <= num; i++) {
//         let c = a + b;
//     if (c <= 20) {              // When we want to print this number below ,then we will use this conditiion otherwise not.
//             console.log(c);
//             a = b;
//             b = c;
//         }
//     }
//     return true;
// }
// // console.log(fibonacci(10));
// console.log(fibonacci(20));




//  Prime Number Program using functions

// function prime(num) {
//     isPrime = true;
//     for (let i = 2; i < num; i++) {
//         if (num % 2 === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (num <= 1) {
//         console.log("It is not a prime number");
//     } else if (isPrime) {
//         console.log("It is a prime number");
//     } else {
//         console.log("It is not a prime number");
//     }
// }

// console.log(prime(90));
// console.log(prime(11));
// console.log(prime(29));
// console.log(prime(57));


//  Count the how many vowels in the word

// function count(string) {
//     let vowels = "aeiouAEIOU";
//     let counts = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (vowels.includes(string[i])) {
//             counts = counts + 1;
//         }
//     }
//     return counts;
// }
// console.log(count("Venukumar,Jagan ,Viraatkohli"));
// console.log(count("Virat kohl and MS Dhoni and Rohith Sharma and"));

// let word = "Jagan,Anji,sudheer";
// let vowels = "aeiouAEIOU";
// // let word = "Jagan,Anji";
// let count = 0

// for (let i = 0; i < word.length; i++) {
//     if (vowels.includes(word[i])) {
//         count = count + 1;
//     }
// }
// console.log(count);



// Reverse an array using functions

// let a = ["Venu", "Jagan", "Sudheer", "Anji", "Ganesh"];
// let b = ["Hyd", "Bng", "Chennai", "Vizag"];

// let reverse_array = [];

// function reverse(array) {
//     for (let i = array.length - 1; i >= 0; i--) {
//         reverse_array.push(array[i]);

//     }
//     return reverse_array;
// }
// // console.log(reverse(a));

// console.log(reverse(b));

// console.log(reverse(a));



// Sum of array Elements

// let a = [10, 20, 30, 40, 50, 60];

// let b = [39, 20, 42, 81];

// let sum = 0;

// function add(array) {
//     for (let i = 0; i < array.length; i++) {
//         sum = sum + array[i];
//     }
//     return sum;
// }
// console.log(add(a));
// console.log(add(b));



//  To extract some part of an array without using array methods

// let color = ["White", "Red", "Purple", "Black", "Yellow", "Green", "Blue", "Pink", "Orange"];
// let city = ["Hyd", "Bng", "Chennai", "Pune", "Punjab", "Vizag", "Delhi"];

// function extract(array) {
//     let extract_array = [];
//     for (let i = 0; i < array.length; i++) {
//         if ((i > 1) && (i <= 5)) {
//             extract_array.push(array[i]);
//         }
//     }
//     return extract_array;
// }
// console.log(extract(color));
// console.log(extract(city));
