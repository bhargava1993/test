// printing numbers 1 to 50

// for (let i = 0; i <= 50; i++) {
//     console.log(i);
// }



// Printing numbers 1 to 50 in reverse order

// for (let i = 50; i >= 0; i--) {
//     console.log(i);
// }




// Adding numbers 1 to 100


// add = 0;
// for (i = 0; i <= 100; i++) {
//     add = add + i;
// }
// console.log(add);



// Subtract 50 to 1 numbers


// sub = 0;
// for (let i = 50; i >= 0; i--) {
//     sub = sub + i;
// }
// console.log(sub);



//  Printing even numbers with in range of 1 to 50

// for (let i = 0; i <= 50; i += 2) {
//      console.log(i);
// }

//                  (or)

// for (let i = 0; i <= 50; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

//                       (or)


//  Adding even numbers with in the range of 1 to 50


// add = 0;
// for (let i = 0; i <= 50; i += 2) {
//     if (i % 2 === 0) {
//         add = add + i;
//     }
// }
// console.log(add);


//                       (or)


//  Adding even numbers with in the range of 1 to 50
// add = 0;
// for (let i = 0; i <= 50; i += 2) {
//     add = add + i;
// }
// console.log(add);


//  Printing Odd numbers with in range of 1 to 50

// for (let i = 1; i <= 50; i += 2) {
//     console.log(i);
// }


//                    (or)

// for (let i = 0; i <= 50; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }


//  Adding Odd numbers with in the range of 1 to 50


// add = 0;
// for (let i = 0; i <= 50; i++) {
//     if (i % 2 !== 0) {
//         add = add + i;
//     }
// }
// console.log(add);


//                    (or)

// Adding Odd numbers with in the range of 1 to 50

// add = 0;
// for (let i = 1; i <= 50; i += 2) {
//     add = add + i;
// }
// console.log(add);



// Factorial Program

// let a = 10;

// result = 1;

// for (let i = a; i >= 1; i--) {
//     result = result * i;
// }
// console.log(result);



// Multiplication Table Prgram

// let a = 10;

// result = 1;

// for (let i = 1; i <= 10; i++) {
//     result = a + "*" + i + "=" + a * i;
//     console.log(result);
// }



//  Adding Array Numbers

// let a = [10, 20, 73, 92, 50, 300];

// result = 0;

// for (let i = 0; i < a.length; i++) {
//     result = result + a[i];
// }
// console.log(result);


//  Adding Two array numbers

// let a = [10, 20, 73, 92, 50, 300];

// let b = [1, 2, 3, 4, 5, 6];

// result = 0;

// for (let i = 0; i < a.length; i++) {
//     result = result + a[i] + b[i];
// }
// console.log(result);


//  Adding two arrays into one array


// let a = [10, 20, 73, 92, 50, 300];

// let b = [1, 2, 3, 4, 5, 6];

// result = [];

// for (let i = 0; i < a.length; i++) {
//     result[i] = a[i] + b[i];
// }
// console.log(result);




//  Palindrome

// word = "level";
// reverse_word = "";

// for (let i = word.length - 1; i >= 0; i--) {
//     reverse_word = reverse_word + word[i];
// }
// if (reverse_word === word) {
//     console.log("It is a palindrome");
// } else {
//     console.log("It is not a palindrome");
// }


// Prime Number

// let num = 20;
// let isPrime = true;

// for (let i = 2; i < num; i += 1) {
//     if (num % i === 0) {
//         isPrime = false;
//         break;
//     }
// }

// if (num <= 1) {
//     console.log("It is not a prime number");
// } else if (isPrime) {
//     console.log("It is a Prime Number");
// } else {
//     console.log("It is not a prime number");
// }



// let num = 29;
// let isPrime = true;

// for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//         isPrime = false;
//         break;
//     }
// }

// if (num <= 1) {
//     console.log("It is not a prime number");
// } else if (isPrime) {
//     console.log("It is a prime number");
// } else {
//     console.log("It is not a prime number");
// }



// Check the value is exists or not in an array

// let fruits = ["Apple", "Banana", "Sapota", "Orange", "Pine Apple", "Apple", "Banana"];

// for (let i = 0; i <= fruits.length; i++) {
//     if (fruits[i] === "Sapota") {
//         console.log("Sapota is available ")
//     }
// }

//                    (or)
// using array methods

// console.log(fruits.includes("Banana"));

// console.log(fruits.includes("Pine Apple"));




// Replace a value in an array using for loop


// let fruits = ["Apple", "Banana", "Sapota", "Orange", "Pine Apple", "Apple"];

// for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i] === "Pine Apple") {
//         fruits[i] = "Mango";
//     }
// }
// console.log(fruits);


// let city = ["Hyd", "chennai", "Bng", "Lucknow", "Punjab", "Vizag"];

// for (let i = 0; i < city.length; i++) {
//     if (city[i] === "Hyd") {
//         console.log(i);
//     }
// }


//                   (or)
// using array method

// console.log(city.indexOf("Bng"));

// console.log(city.indexOf("Hyd"));




//  To extract some part of an array

// let city = ["Hyd", "chennai", "Bng", "Bng", "Lucknow", "Punjab", "Vizag"];
// let start_index = 0;
// let end_index = 4;

// let extract = [];

// for (let i = 0; i < city.length; i++) {
//     if (i >= start_index && i <= end_index) {
//         extract.push(city[i]);
//     }
// }
// console.log(extract);


//                       (or)
// using array method

// console.log(city.slice(1, 4));
// console.log(city.slice(2, 6));


// let fruits = ["Apple", "Banana", "Sapota", "Orange", "Pine Apple", "Apple", "Banana",];
// let start_index = 1;
// let end_index = 6;

// extract_array = [];

// for (let i = 0; i < fruits.length; i++) {
//     if (i >= start_index && i < end_index) {
//         extract_array.push(fruits[i]);
//     }
// }
// console.log(extract_array);



//  finding Unique values in an array


// let fruits = ["Apple", "Banana", "Sapota", "Orange", "Pine Apple", "Apple", "Banana",];

// unique = [];

// for (let i = 0; i < fruits.length; i++) {
//     let exist = unique.includes(fruits[i]);
//     if (!exist) {
//         unique.push(fruits[i]);
//     }
// }
// console.log(unique);




// To find how many times a value appeared and to know unique values using objects

//  Objects

// let fruits = ["Apple", "Banana", "Sapota", "Orange", "Pine Apple", "Apple", "Banana", "Orange", "Pine Apple"];

// obj = {}

// for (let i = 0; i < fruits.length; i++) {
//     if (obj[fruits[i]]) {
//         obj[fruits[i]] = obj[fruits[i]] + 1;
//     } else {
//         obj[fruits[i]] = 1;
//     }
// }

// console.log(obj);              // To count how many times appear a value  
// console.log(Object.keys(obj));       // It shows the keys and keys are unique values 



// 

//  To add adding a value in object

// let cars = {
//     "Audi": "4",
//     "BMW": "2",
//     "XUV": "6",
// }

// console.log(cars);

// cars.KIA = "10";
// console.log(cars);

// cars["Lamburgini"] = "5";
// console.log(cars);


// To delete the value in an object

// delete cars["XUV"];
// console.log(cars);

// delete cars["Lamburgini"];
// console.log(cars);


// let cars = {
//     "Audi": "4",
//     "BMW": "2",
//     "XUV": "6",
//     "Lamburgini": "10",
//     "KIA": "6"
// }


// console.log(Object.keys(cars));

// console.log(cars);

// let keys = Object.keys(cars);
// console.log(keys);

// for (let i = 0; i < keys.length; i++) {
//     console.log(keys[i]);
//     console.log(cars(keys[i]));
// }


// let cars = {
//     "Audi": "4",
//     "BMW": "2",
//     "XUV": "6",
//     "Lamburgini": "10",
//     "KIA": "6"
// }


// let keys = Object.keys(cars);
// console.log(keys);



// for (let i = 0; i < keys.length; i++) {
//     // console.log(keys[i]);
//     // console.log(cars[keys[i]]);
//     console.log(keys[i] + "=" + cars[keys[i]]);
// }


// Count the vowels in a String

// let str = "Venukumar";

// let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//         count = count + 1;
//     }
// }
// console.log(count);


// let a = "Jagan";
// let vowels = "aeiouAEIOU";

// let count = 0;

// for (let i = 0; i < a.length; i++) {
//     if (vowels.includes(a[i])) {
//         count += 1;
//     }
// }
// console.log(count);


// Fibonacci Series 

// let a = 0;
// let b = 1;
// let num = 10;

// console.log(a);
// console.log(b);

// for (let i = 2; i <= num; i++) {
//     let c = a + b;
//     console.log(c);
//     a = b;
//     b = c;
// }



//  Finding Highest value in an array

// let a = [10, 50, 29, 47, 90, 56];
// let max = a[0];

// for (let i = 1; i < a.length; i++) {
//     if (a[i] > max) {
//         max = a[i];
//     }
// }
// console.log(max);



//  find minimum value of an array

// let a = [90, 70, 38, 48, 109, 22];
// let min = a[0];


// for (let i = 1; i < a.length; i++) {
//     if (a[i] < min) {
//         min = a[i];
//     }
// }
// console.log(min);


//  Removing duplicate values 

let array = ["Venu", "jagan", "sudheer", "Venu", "jagan", 10, 38, 10, 60, 54, 60];

let unique = ["Venu", "jagan"];

for (let i = 0; i < array.length; i++) {
    let exists = unique.includes(array[i]);
    if (!exists) {
        unique.push(array[i]);
    }
}
console.log(unique);



// Extracting some part of an array

// let array = ["Venu", "jagan", "sudheer", "Venu", "jagan", 10, 38, 10, 60, 54, 60];

// let str_index = 1;
// let end_index = 8;

// let extract = [];

// for (let i = 0; i < array.length; i++) {
//     if (i >= str_index && i <= end_index) {
//         extract.push(array[i]);
//     }
// }
// console.log(extract);



//  Find the count of each value appeared and find unique values alsoo

// let array = ["Venu", "jagan", "sudheer", "Venu", "jagan", 10, 38, 10, 60, 54, 60];

// let obj = {};

// for (let i = 0; i < array.length; i++) {
//     if (obj[array[i]]) {
//         obj[array[i]] += 1;
//     } else {
//         obj[array[i]] = 1;
//     }
// }
// console.log(obj);

// console.log(Object.keys(obj));


//  Print keys and values in an object

// let fruits = {
//     "Apple": "4",
//     "Banana": "2",
//     "Orange": "6",
//     "Mango": "10"
// }

// console.log(Object.keys(fruits));

// let keys = Object.keys(fruits);

// for (let i = 0; i < keys.length; i++) {
//     console.log(keys[i]);
//     console.log(fruits[keys[i]]);
//     console.log(keys[i] + "=" + fruits[keys[i]]);
// }


//  Find Palindrome

// let word = "level";
// let rev_word = "";

// for (let i = word.length - 1; i >= 0; i--) {
//     rev_word = rev_word + word[i];
// }
// if (word === rev_word) {
//     console.log("The word is palindrome");
// } else {
//     console.log("The word is not a palindrome");
// }



//  Check if its prime numbe or not

// let num = 11;
// let isPrime = true;

// for (let i = 2; i < num; i++) {
//     // console.log(num[i]);
//     if (num % i === 0) {
//         isPrime = false;
//         break;
//     }
// }

// if (num <= 1) {
//     console.log("The number is not prime");
// } else if (isPrime) {
//     console.log("The number is Prime");
// } else {
//     console.log("The number is not Prime");
// }



//  Reverse a string

// let a = "Jagan";

// let reverse = "";

// for (let i = a.length - 1; i >= 0; i--) {
//     reverse = reverse + a[i];
// }
// console.log(reverse);


// let a = ["Venu", "Jagan", "Sudheer", "Bhargava"];

// let sum = "";

// for (let i = 0; i < a.length; i++) {
//     sum = sum + a[i];
// }
// console.log(sum);



// let a = [10, 203, 30, 50, 28, 49];

// let sum = 0;

// for (let i = 0; i < a.length; i++) {
//     sum = sum + a[i];
// }
// console.log(sum);




