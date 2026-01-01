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


// //  Removing duplicate values

// let array = ["Venu", "jagan", "sudheer", "Venu", "jagan", 10, 38, 10, 60, 54, 60];

// let unique = ["Venu", "jagan"];

// for (let i = 0; i < array.length; i++) {
//     let exists = unique.includes(array[i]);
//     if (!exists) {
//         unique.push(array[i]);
//     }
// }
// console.log(unique);



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



// for (let i = 0; i <= 100; i++) {
//     console.log(i);
// }

// for (let i = 10; i >= 0; i--) {
//     console.log(i)
// }


// let a = ["Venu", "sudher", "Jagan"];

// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }
// for (let i = a.length - 1; i >= 0; i--) {
//     console.log(a[i]);
// }

// let array = [];

// for (let i = 0; i < a.length; i++) {
//     array.push(a[i]);
//     // console.log(a[i]);
// }
// console.log(array);

// for (let i = a.length - 1; i >= 0; i--) {
//     array.push(a[i]);
//     // console.log(a[i]);
// }
// console.log(array);


// let fruits = ["Apple", "Banana", "Grapes", "pomogranite", "Orange", "watermelon", "Guava"];
// let extract = [];

// for (let i = 0; i < fruits.length; i++) {
//     str_index = fruits[1];
//     end_index = fruits[5];
//     if (fruits[i] >= str_index && fruits[i] <= end_index) {
//         extract.push(fruits[i]);
//     }
// }


// for (let i = 0; i < fruits.length; i++) {
//     if (i >= 2 && i <= 5) {
//         extract.push(fruits[i])
//     }
// }
// console.log(extract);

// for (let i = fruits.length - 1; i >= 0; i--) {
//     if (i >= 2 && i <= 5) {
//         extract.push(fruits[i])
//     }
// }
// console.log(extract);

// let array = [10, 20, 30, 40, 50, 60];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum = sum + array[i];
// }

// console.log(sum);

// for (let i = 0; i <= 20; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }


// let array = [10, 20, 30, 40, 50, 60];
// let array1 = [20, 30, 40, 50, 60, 70];
// let sum = [];

// for (let i = 0; i < array.length; i++) {
//     sum[i] = array[i] + array1[i];
// }
// console.log(sum);

// let num = 5;
// let fact = 1;
// for (let i = 1; i <= num; i++) {
//     fact = fact * i;

// }
// console.log(fact);
// let num = 4
// let table = 1;
// for (let i = 1; i <= 10; i++) {
//     table = num + "*" + i + "=" + num * i;
//     console.log(table);
// }
// console.log(table);


// let num = 121;
// let reverse = "";

// number = num.toString();
// console.log(number);
// console.log(typeof number);

// for (let i = number.length - 1; i >= 0; i--) {
//     reverse = reverse + number[i];
// }
// console.log(reverse);
// if (reverse === number) {
//     console.log("It is a palindrome");
// } else {
//     console.log("It is not a palindrome");
// }


// let num = 49;
// let isPrime = true;

// for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//         isPrime = false;
//         break;
//     }
// }
// if (num <= 1) {
//     console.log("It is not a Prime number");
// } else if (isPrime) {
//     console.log("It is a prime number");
// } else {
//     console.log("It is not a prime number");
// }


// let fruits = ["Apple", "Banana", "Grapes", "pomogranite", "Orange", "watermelon", "Guava"];

// for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i] === "Banana") {
//         console.log("It is availabe in fruits ");
//         console.log(i);

//     }
// }

// for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i] === "Banana") {
//         console.log("It is availabe in fruits ");
//         fruits[i] = "Sapota";
//         // console.log(i);

//     }
// }
// console.log(fruits);

// let fruits = ["Apple", "Banana", "Grapes", "Guava", "Grapes", "Banana", "Guava"];
// let unique = [];

// for (let i = 0; i < fruits.length; i++) {
//     let exists = unique.includes(fruits[i]);
//     if (!exists) {
//         unique.push(fruits[i]);
//     }
// }
// console.log(unique);

// let unique = [];
// for (let i = 0; i < fruits.length; i++) {
//     let exist = unique.includes(fruits[i]);
//     if (!exist) {
//         unique.push(fruits[i]);
//     }
// }
// console.log(unique);


// let obj = {};
// for (let i = 0; i < fruits.length; i++) {
//     if (obj[fruits[i]]) {
//         obj[fruits[i]] = obj[fruits[i]] + 1;
//     } else {
//         obj[fruits[i]] = 1;
//     }
// }
// console.log(obj);
// console.log(Object.keys(obj));



// let cars = {
//     "Audi": "White",
//     "BMW": "Black",
//     "Toyota": "White",
//     "Kia": "Brown"
// }
// let keys = Object.keys(cars);
// console.log(keys);
// console.log(cars[Object.keys(cars)]);

// for (let i = 0; i < keys.length; i++) {
//     // console.log(keys[i]);
//     // console.log(cars[keys[i]]);
//     console.log(keys[i] + "=" + cars[keys[i]]);
// }


// cars["Wagnor"] = "Silver";
// console.log(cars);
// cars["Suzuki"] = "Silver";
// console.log(cars);

// delete cars["Suzuki"];
// console.log(cars);
// delete cars["Kia"];
// console.log(cars);


// console.log(cars);

// console.log(Object.keys(cars));

// let keys = Object.keys(cars);

// for (let i = 0; i < keys.length; i++) {
//     // console.log(keys[i]);
//     // console.log(cars[keys[i]]);

//     console.log(keys[i] + "=" + cars[keys[i]]);
// }



// let city = ["Hyd", "Bng", "Chennai", "Vizag", "Pune", "Ahmadabad", "Kolkatta"];
// let extract = [];
// let str_index = 1;
// let end_inex = 5;

// for (let i = 0; i < city.length; i++) {
//     if (i >= str_index && i < end_inex) {
//         extract.push(city[i]);
//     }
// }
// console.log(extract);



// let city = ["Hyd", "Bng", "Chennai", "Vizag", "Pune", "Ahmadabad", "Kolkatta"];

// for (let i = 0; i < city.length; i++) {
//     if (city[i] === "Bng") {
//         console.log("index number--------", i);
//         console.log("The value is exist");
//         city[i] = "Delhi";
//     }
// }
// console.log(city);

// console.log(city.indexOf("Vizag"));
// console.log(city.indexOf("Pune"));
// console.log(city.indexOf("delhi"));

// console.log(city.includes("Pune"));
// console.log(city.includes("Delhi"));

// console.log(city.reverse());

// let city = ["Hyd", "Bng", "Chennai", "Vizag", "Pune", "Ahmadabad", "Kolkatta"];

// console.log(city.length);

// city.sort()
// console.log(city);

// console.log(city.slice(2, 3));
// console.log(city.slice(1, 6));
// console.log(city.slice(4));


// console.log(city.splice(1, 3));
// console.log(city.splice(3));

// console.log(city.splice(1, 2, "Venu", "Jagan", "Sudheer"));
// console.log(city);
// city.splice(3, 0, "Viratkohli");
// console.log(city);


// let num = 1221;
// let number = num.toString()
// console.log(typeof number)

// let reverse = ""
// for (let i = number.length - 1; i >= 0; i--) {
//     console.log(number[i]);
//     reverse = reverse + number[i];
// }
// console.log(reverse);

// if (number === reverse) {
//     console.log("It is a palindrome ");
// } else {
//     console.log("It is not a palindrome");
// }



// let names = "Virat kohli and King Venukumar";
// let count = 0;

// let vowels = "aeiou";
// let lowerNames = names.toLowerCase();
// console.log(lowerNames);

// for (let i = 0; i < lowerNames.length; i++) {
//     // if (vowels.includes(lowerNames[i])) {
//     //     count = count + 1;
//     // }

//     let includes = vowels.includes(lowerNames[i]);
//     if (includes) {
//         count = count + 1;
//     }



// }
// console.log(count);


// let arr = [10, 304, 29, 502, 82];
// let max = arr[0];


// for (let i = 0; i < arr.length; i += 1) {
//     if (max < arr[i]) {
//         max = arr[i]
//     }

// }
// console.log(max);

// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//         min = arr[i];
//     }
// }
// console.log(min);


// let a = -1;
// let b = 1;
// let num = 10;

// for (let i = 0; i < num; i++) {
//     let c = a + b;
//     if (c < num) {
//         console.log(c);
//         a = b;
//         b = c;

//     }
//     // console.log(c);
//     // a = b;
//     // b = c;
// }




// let word = "RaceCar";
// let word2 = "Carrace";


// sortedWord1 = word.toLowerCase().split("").sort().join("");
// sortedWord2 = word2.toLowerCase().split("").sort().join("");


// if (sortedWord1 === sortedWord2) {
//     console.log("It is a anagram word ");
// } else {
//     console.log("It is not a anagram word");
// }

// // console.log(sortedWord1);
// // console.log(sortedWord2);


// let num = 153;
// let temp = num;
// let sum = 0;
// let digits = num.toString()
// // console.log(digits);

// for (let i = 0; i < digits.length; i++) {
//     let digit = temp % 10;
//     sum = sum + digit ** digits;
//     temp = Math.floor(temp / 10);
// }
// // console.log(sum);
// // console.log(num);

// if (sum === temp) {
//     console.log("It is an armstrong number")
// } else {
//     console.log("It is not an armstrong number");
// }


// let number = 153;

// let temp = number;

// let digits = temp.toString().length;

// let sum = 0;

// for (let i = 0; i < digits; i++) {
//     let digit = temp % 10;     // to identify the last digit
//     sum = sum + digit ** digits;        // to square the elements length
//     temp = Math.floor(temp / 10);                   // to remove last element
// }

// console.log(sum);

// if (sum === number) {
//     console.log("It is an armstrong number ");
// } else {
//     console.log("It is not an armstrog number");
// }



// function checkPrime(num) {
//     let isPrime = true
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;

//         }

//     }
//     if (num <= 1) {
//         console.log("It is not a pime number");
//     } else if (isPrime) {
//         console.log("It is a prime number");
//     } else {
//         console.log("It is not a prime number");
//     }
//     return num;

// }
// console.log(checkPrime(12));


// function checkPrime(num) {
//     let isPrime = true;
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (num < 2) {
//         console.log("It is not a prime number");
//     } else if (isPrime) {
//         console.log("It is a prime number")
//     } else {
//         console.log("It is not a prime number")
//     }
// }
// checkPrime(11);



// let str = "Venukumar";
// function reverse(str) {
//     let reverseString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverseString = reverseString + str[i];
//     }
//     return reverseString;
// }
// console.log(reverse("Venukumar"));



// function countVowels(str) {
//     let count = 0;
//     let vowels = "aeiou";
//     let string = str.toLowerCase();

//     for (let i = 0; i < string.length; i++) {
//         if (vowels.includes(string[i])) {
//             count = count + 1;
//         }
//     }
//     return count;

// }
// console.log(countVowels("Venukumar"));


// let arr = [12, 24, 6, 94, 23, 93, 32, 42];

// function largestNum(array) {
//     let max = array[0];
//     for (i = 0; i < array.length; i++) {
//         if (max < array[i]) {
//             max = array[i];

//         }
//     }
//     return max;
// }
// console.log(largestNum(arr));



// function evenSum(num) {
//     let sum = 0;
//     for (let i = 0; i <= num; i++) {
//         if (i % 2 === 0) {
//             sum = sum + i;
//         }
//     }
//     return sum;
// }
// console.log(evenSum(10));



// let array = ["apple", "banana", "pomogranite", "pine apple", "banana", "grapes", "apple", "pine apple"];


// function occurance(arr) {
//     let obj = {};
//     for (let i = 0; i < array.length; i++) {
//         if (obj[array[i]]) {
//             obj[array[i]] = obj[array[i]] + 1;

//         } else {
//             obj[array[i]] = 1;
//         }
//     }

//     console.log(obj);
//     let keys = Object.keys(obj);
//     return keys;

// }
// console.log(occurance(array))



// let a = "hello,ello"

// function occurance(str) {
//     let obj = {};
//     for (let i = 0; i < str.length; i++) {
//         if (obj[str[i]]) {
//             obj[str[i]] = obj[str[i]] + 1;

//         } else {
//             obj[str[i]] = 1;
//         }
//     }

//     console.log(obj);
//     let keys = Object.keys(obj);
//     return keys;

// }
// console.log(occurance(a))





// let array = ["apple", "banana", "pomogranite", "pine apple", "banana", "grapes", "apple", "pine apple"];


// function uniqueValues(arr) {
//     let unique = [];
//     for (let i = 0; i < arr.length; i++) {
//         let exist = unique.includes(arr[i]);
//         if (!exist) {
//             unique.push(arr[i]);


//         }
//     }
//     return unique;
// }
// console.log(uniqueValues(array));



// let array = [10, 23, 43, 32, 82, 9, 2, 4, 28, 35, 53];


// function sorting(arr) {
//     // let sort = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[i]) {
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(sorting(array));

// let arr = [12, 23, 42, 53, 1, 2, 90, 79, 32];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr);



// let array = [12, 24, [24, 53, 63], 72, [34, 56, [345, 74]]];
// let flat = [];

// for (let i = 0; i < array.length; i++) {
//     let item = array[i];
//     if (Array.isArray(item)) {
//         for (let j = 0; j < item.length; j++) {
//             flat.push(item[j]);

//         }
//     } else {
//         flat.push(array[i])
//     }

// }
// console.log(flat);

// let array = [12, 24, [24, [45, 23, 53], 63], 72, [34, 56, [345, 74]]];

// function flatten(arr) {
//     let flat = [];
//     for (let i = 0; i < arr.length; i++) {
//         let item = arr[i];
//         if (Array.isArray(item)) {
//             let flattenItem = flatten(item);
//             flat = flat.concat(flattenItem);
//         } else {
//             flat.push(arr[i]);
//         }
//     }
//     return flat;
// }
// console.log(flatten(array));





// let flat = [];

// for (let i = 0; i < array.length; i++) {
//     let item = array[i];
//     if (Array.isArray(item)) {
//         for (let j = 0; j < item.length; j++) {
//             flat.push(item[j]);
//         }
//     } else {
//         flat.push(array[i]);
//     }
// }
// console.log(flat);




// let sentence = "Madam and Hannah saw level, rotor, and racecar on the road."
// let words = sentence.toLowerCase().split(" ");
// let palindromes = [];
// let longest = "";


// for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     let rev_word = "";
//     for (let j = word.length - 1; j >= 0; j--) {
//         rev_word = rev_word + word[j];
//     }

//     if (rev_word === word) {
//         palindromes.push(words);
//         if (word.length > longest.length) {
//             longest = word;
//         }
//     }
// }
// console.log(palindromes);
// console.log(longest);



// let sentence = "madam level racecar apple rotor refer";
// let words = sentence.split(" ");

// let palindromes = [];
// let longest = "";

// for (let j = 0; j < words.length; j++) {
//     let word = words[j];
//     let rev_word = "";

//     // reverse each word using for loop
//     for (let i = word.length - 1; i >= 0; i--) {
//         rev_word = rev_word + word[i];
//     }

//     // check palindrome
//     if (rev_word === word) {
//         palindromes.push(word);

//         // find longest palindrome
//         if (word.length > longest.length) {
//             longest = word;
//         }
//     }
// }

// console.log("Palindromes:", palindromes);
// console.log("Longest Palindrome:", longest);



// function printNum(n) {
//     if (n === 0) {
//         return 0;
//     }
//     printNum(n - 1);
//     console.log(n);
// }
// (printNum(5));


// function factorial(num) {
//     if (num === 1) {
//         return 1;
//     }
//     return num * factorial(num - 1);

// }
// console.log(factorial(5));


// function factorial(n) {
//     if (n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }
// console.log(factorial(10));


// let i = 0;
// function printNumbers() {
//     console.log(i);
//     i++;
//     if (i <= 10) {
//         printNumbers()
//     }
//     return;
// }
// // console.log(printNumbers());
// printNumbers();

// function num(n) {
//     if (n === 0) {
//         return 0;
//     }
//     num(n - 1);
//     console.log(n)
// }
// num(10);

// function num(n) {
//     if (n === 0) {
//         return 0;
//     }
//     console.log(n);
//     num(n - 1);
// }

// num(10);

// function fact(n) {
//     if (n === 1) {
//         return 1;
//     }
//     return n * fact(n - 1);
//     // console.log(n)
// }
// console.log(fact(5));


// function sum(n) {
//     if (n === 0) {
//         return 0;
//     }
//     return (n % 10) + sum(Math.floor(n / 10));
// }
// console.log(sum(1234));

// function sum(n) {
//     if (n === 0) {
//         return 0;
//     }
//     return (n % 10) + sum(Math.floor(n / 10));
// }
// console.log(sum(12345));

// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(10));


// let array = [10, 20, 30, 40, 50];

// array.forEach(function (ele) {
//     console.log(ele);
// })

// array.map(function (ele) {
//     console.log(ele);
// })

// array.filter(function (ele) {
//     console.log(ele);
// })

// console.log(array.filter((ele) => {
//     return ele === 20;
// }));

// console.log(array.filter((ele) => {
//     return ele === 50;
// }))


// let array = ["Venu", "Adinarayana"];

// let [MyName, FatherName] = ["Venu", "Adinarayana"];
// console.log(MyName);
// console.log(FatherName);
// console.log(array);

// let obj = {
//     fruit: "Apple",
//     city: "Hyd",
//     car: "BMW"
// }

// let { fruit, car, city, ...remainingValues } = {
//     fruit: "Apple",
//     city: "Hyd",
//     car: "BMW",
//     color: "White",
//     food: "Biryani",
//     friend: "Jagan"
// }


// console.log(fruit);
// console.log(city);
// console.log(remainingValues);



// let array = ["apple", "banana", "pomogranite", "grapes", "Sapota"];
// let array2 = ["Hyd", "Bng", "Chennai", "Vizag"];

// // let fruits = [...array];
// let arr = [...array, ...array2]

// // fruits.push("PineApple");
// // console.log(fruits);
// // console.log(array);
// console.log(arr);


// setTimeout(() => {
//     console.log("task1");
// }, 2000)

// setInterval(() => {
//     console.log("Task 2");
//     clearInerval()
// }, 3000)

// let id = setTimeout(() => {
//     console.log("Venukumar");
// }, 1000)

// clearInterval(id);


// function greet(name, callback) {
//     console.log("Hello" + name);
//     callback();
// }
// function sayBye() {
//     console.log("Bye");

// }
// greet("Venukumar", sayBye);


// function add(a, b, callback) {
//     let result = a + b;
//     callback(result);
// }
// function display(result) {
//     console.log("result---", result);
// }
// add(10, 40, display);

// function mul(a, b, callback) {
//     let result = a * b;
//     callback(result);
// }
// function display(result) {
//     console.log("result -----", result)
// }
// mul(10, 20, display);


// function morning(callback) {
//     console.log("Good Morning");
//     callback(evening);
// }
// function afternoon(callback) {
//     console.log("Good Afternoon");
//     callback(night);
// }
// function evening(callback) {
//     console.log("Good Evening");
//     callback(afternoon);
// }
// function night(callback) {
//     console.log("Good night");
// }

// morning(evening);
// afternoon();
// evening();
// night();


// function add(a, b, callback) {
//     console.log(a, b, callback);
//     callback(a, b);
// }
// function logicAdd() {
//     return a + b;

// }
// console.log(10, 20, logicAdd);


// function divide(a, b, callback) {
//     console.log(a, b, callback);
//     if (a === 0 || b === 0) {
//         callback("input is not valid", null);
//         return;
//     } else if (a === 10) {
//         let division = a / b;
//         callback(null, division);
//     } else {
//         console.log("else-----");
//     }

// }
// divide(10, 2, (error, result) => {
//     if (error) {
//         console.log("error-----", error);
//     } else {
//         console.log("result -----", result);
//     }
// })



// payment details by using callback chain;

// function getUser(id, next) {
//     console.log(id, next);
//     console.log(" fetching user information-----");
//     next({ id, name: "Venukumar" });
// }
// function ordersDetails(user, res) {
//     console.log(" fetching orders details ");
//     res({ user, orders: ["laptop", "moblie", "charger"] });

// }
// function processOrders(processingOrders, next) {
//     console.log("processing -----", processingOrders);
//     next({ processingOrders, "payment": "done" });
// }
// function payment(paymentDetails) {
//     if (paymentDetails.payment === "done") {
//         console.log("sucessfully Order placed", paymentDetails);
//     } else {
//         console.log("Order is cancelled", paymentDetails);
//     }
// }


// getUser(1, (user) => {
//     console.log("result -----", user);
//     ordersDetails(user, (orderinfo) => {
//         console.log("result1 ------", orderinfo);
//         processOrders(orderinfo, (processinfo) => {
//             console.log("result2 ------", processinfo);
//             payment(processinfo);

//         });
//     });
// });



// function userId(id,callback){
//     console.log(id,callback);
//     console.log("fetching the information");
//     callback({"id":1,"name":"Venukumar"});
// }

// function orderDetails(user,callback){
//     let orders=["Mobile","Laptop","Charger"]
//     callback({user,orders});

// }

// function processingOrders(orders,next){
//     console.log("Processing Orders");
//     next({orders,"payment":"done"});

// }
// function payment(paymentDetails){
//     if(paymentDetails.payment==="done"){
//         console.log("Your order is successfully placed");
//     }else{
//         console.log("Your order is cancelled");
//     }

// }


// userId(1,(user)=>{
//     console.log("result--------",user);
//     orderDetails(user,(orderinfo)=>{
//         console.log("result2--------",orderinfo);
//         processingOrders(orderinfo,(paymentDetails)=>{
//             console.log("result3-------",paymentDetails)
//             payment(paymentDetails)
//         })
//     })
// })

// getUser(1, (user) => {
//     console.log("result -----", user);
//     ordersDetails(user, (orderinfo) => {
//         console.log("result1 ------", orderinfo);
//         processOrders(orderinfo, (processinfo) => {
//             console.log("result2 ------", processinfo);
//             payment(processinfo);

//         });
//     });
// });





// function getUser(id,next){
//     console.log(id,next);
//     console.log("Fetching the user information");
//     next({"id":1,"name":"Venukumar"});
// }

// function orderDetails(user,next){
//     let orders=["Apples","Bananas","Oranges"];
//     console.log("Order Details");
//     next({user,orders});
// }

// function processingOrders(order,next){
//     console.log("Processing order");
//     next({order,"payment":"done"});
// }

// function paymentDetails(payment){
//     if(payment.payment==="done"){
//         console.log("Your order is placed",payment);
//     }else{
//         console.log("Your order is cancelled");
//     }
// }




// getUser(1,(result)=>{
//     console.log("result-------",result);
//     orderDetails(result,(result2)=>{
//         console.log("result2--------",result2);
//         processingOrders(result2,(result3)=>{
//             console.log("result3------",result3);
//             paymentDetails(result3);
//         })

//     })
// })



// function getUser(id){
//     return new Promise((resolve,reject)=>{
//         if(id){
//             resolve({id,"name":"Venukumar"});
//         }
//     })
// }

// function orderDetails(orders){
//     return new Promise((resolve,reject)=>{
//         if(orders){
//             resolve({orders,"order":["Mobile","Laptop","Charger"]})
//         }
//     })

// }
// function processcingDetails(process){
//     return new Promise((resolve,reject)=>{
//         if(process){
//             resolve({process,"payment":"done"});
//         }
//     })
// }

// function paymentDetails(payment){
//     return new Promise((resolve,reject)=>{
//         if(payment.payment==="done"){
//             resolve("Your order is placed");
//         }
//     })
// }


// getUser(1).then((user)=>{
//     console.log("result------",user);
//     return orderDetails(user);
// }).then((orderDetails)=>{
//     console.log("result2-------",orderDetails)
//     return processcingDetails(orderDetails);
// }).then((processcingDetails)=>{
//     console.log("result3---------",processcingDetails);
//     return paymentDetails(processcingDetails);
// }).then((paymentDetails)=>{
//     console.log("result4-------",paymentDetails)
// })





// function getUser(id) {
//     return new Promise((resolve, reject) => {
//         // console.log("user info -----")
//         if (id) {

//             resolve({ id, name: "Venukumar" });
//         } else {
//             reject("user info is not correct",)
//         };
//     });
// };

// function orderdetails(ordersDetails) {
//     return new Promise((resolve, reject) => {
//         if (ordersDetails) {
//             resolve({ ordersDetails, "orders": ["Laptop", "MobilePhone", "MobileCharger"] });
//         } else {
//             reject("orederDetails is not correct");
//         };

//     });
// };
// function processOrders(process) {
//     return new Promise((resolve, reject) => {
//         if (process) {
//             resolve({ process, "payment": "done" })
//         } else {
//             reject("process the details is not corect");
//         };
//     });
// };

// function payments(paymentDetails) {
//     return new Promise((resolve, reject) => {
//         if (paymentDetails.payment === "done") {
//             resolve("Your order placed Successfully");
//         } else {
//             reject("Your order is cancelled");
//         };
//     });
// };

// getUser(1)
//     .then((user) => {
//         console.log("user infoo ---- ", user);
//         return orderdetails(user);
//     }).then((ordersDetails) => {
//         console.log("orderDetails ------", ordersDetails);
//         return processOrders(ordersDetails);
//     }).then((processOrders) => {
//         console.log("process the orders -----", processOrders);
//         return payments(processOrders);
//     }).then((paymentDetails) => {
//         console.log("result ----", paymentDetails);
//     }).catch((err) => {
//         console.log(err);
//     });


// function add(a, b, next) {
//     console.log("Addition");
//     next(a + b);
// }

// function sub(a, b, next) {
//     console.log("subtraction");
//     next(b-a);
// }

// function mul(a, b, next) {
//     console.log("multiplication");
//     next(a * b);
// }


// add(5,10,(addResult)=>{
//     console.log("addResult---------",addResult);
//     sub(20,50,(subResult)=>{
//         console.log("subResult----------",subResult);
//         mul(20,4,(mulResult)=>{
//             console.log("mulResult---------",mulResult);
//         })
//     })
// })



// function add(a,b){
//     return new Promise((resolve,reject)=>{

//         if(true){
//             let add=a+b;
//             resolve(add);
//         }else{
//             reject("error");
//         }
//     })
// }


// function sub(a,b){
//     return new Promise((resolve,reject)=>{
//         if(true){
//             let subtraction=a-b;
//             resolve(subtraction);
//         }else{
//             reject("error");
//         }
//     })
// }


// function mul(a,b){
//     return new Promise((resolve,reject)=>{
//         if(true){
//             let multiplication=a*b;
//             resolve(multiplication);
//         }else{
//             reject("error");
//         }
//     })
// }



// add(10,20).then((result)=>{
//     console.log("result----------",result);
// })

// sub(10,20).then((subResult)=>{
//     console.log("subResult-------",subResult);
// })

// mul(10,20).then((mulResult)=>{
//     console.log("mulResult-------",mulResult);
// })



// function multiply(num,callback){
//     callback(num*2);
// }

// function add(num,callback){
//     callback(num+5);
// }

// function sub(num,callback){
//     callback(num-4);
// }


// multiply(10,(mul)=>{
//     console.log("multiply--------",mul);
//     add(mul,(adding)=>{
//         console.log("adding-------",adding);
//         sub(adding,(subResult)=>{
//             console.log("subResult--------",subResult)
//         });
//     })
// })


// function mul(num){
//     return new Promise((resolve)=>{
//         if(num){
//             let multiply=num*10;
//             resolve(multiply)
//         }
//     })
// }


// function add(num){
//     return new Promise((resolve)=>{
//         if(num){
//             let adding=num+10
//             resolve(adding);
//         }
//     })
// }


// function sub(num){
//     return new Promise((resolve)=>{
//         if(num){
//             let subtraction=num-40
//             resolve(subtraction);
//         }
//     })
// }


// mul(5).then((mulResult)=>{
//     return(add(mulResult));
// }).then((addResult)=>{
//     console.log (sub(addResult));
// }).then((subResult)=>{
//     console.log (subResult);
// })


// mul(5).then((mulResult)=>{
//     console.log("mulResult--------",(mulResult));
// })
// add(5).then((addResult)=>{
//     console.log("addResult---------",(addResult));
// })
// sub(5).then((subResult)=>{
//     console.log("subResult-----------",subResult);
// })



// async function calculate(){
//     let mul1= await mul(5);
//     let add1=await add(mul1);
//     let sub1= await sub(add1);

//     console.log("Final Result--",sub1)
// }

// calculate();



// function getUser(id,callback){
//     callback({id,"id":1 , "name": "Venukumar"});
// }

// function posts(user,callback){
//     callback({user,"posts":50, "followers" : "5K"});
// }

// function comments (com,callback){
//     callback({com,"comments": ["Nice","Good","Excellent"]});
// }

// getUser(1,(result)=>{
//     console.log("User details-------",result);
//     posts(result,(userPosts)=>{
//         console.log("User Posts and followers-------",userPosts);
//         comments(userPosts,(postComments)=>{
//             console.log("Comments--------",postComments)
//         })
//     })
// })


function getUser(id) {
    return new Promise((resolve) => {
        resolve({ id, "name": "Venukumar" });
    })
}

function posts(user) {
    return new Promise((resolve) => {
        resolve({ user, "posts": 50, "followers": "5K" });
    })
}

function comments(data) {
    return new Promise((resolve) => {
        resolve({ data, "comments": ["Nice", "Good", "Excellent"] });
    })
}

// getUser(1).then((userinfo)=>{
//     console.log("user information-------",userinfo);
//     return posts(userinfo)
// }).then((postInfo)=>{
//     console.log("posts and followers-------",postInfo)
//     return comments(postInfo)
// }).then((commentinfo)=>{
//     console.log("comments--------",commentinfo);
// }).catch((error)=>{
//     console.log("error---------",error);
// }).finally((final)=>{
//     console.log("finally--------",final)
// })


// async function calculate(){
//     let getUser1=await getUser(1);
//     let posts1= await posts(getUser1);
//     let comments1=await comments(posts1);

//     console.log("comments---",comments1);
// }
// calculate();



// let a = 1020.9;
// console.log(Math.ceil(a));

// console.log(Math.round(a));

// console.log(Math.floor(a));

// let b="Venukumar";
// console.log(b.toUpperCase());


// console.log(b.toLowerCase());

// let c= "         Venukumar     ";

// console.log(c.trim());


// let d= "V"
// console.log(d.charAt());

// console.log(d.charCodeAt());

// console.log(b.indexOf("k"));

// console.log(b.includes("r"));


// console.log(b.startsWith("V"));

// console.log(b.startsWith("t"));

// console.log(b.endsWith("K"));
// console.log(b.endsWith("r"));

// console.log(b.length);


// for(let i=0;i<=100;i++){
//     console.log(i);
// }

// for(let i=100;i>=0;i--){
//     console.log(i);
// }


// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// for(let i=0;i<=100;i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }


// let add=0;
// for(let i=0;i<=20;i++){
//     add= add+i;

// }
// console.log(add);


// let array=[1,2,3,4];

// for(let i=0;i<array.length;i++){
//     console.log(array[i]);
// }




// let array=[10,20,30,40,50];
// let add=0;

// for (let i=0;i<array.length;i++){
//     add=add+array[i];

// }
// console.log(add);


// let array=[10,20,30,40,50];
// let array1=[10,20,30,40,50];

// let total=[];
// for(let i=0;i<array.length;i++){
//     total[i]= array[i] + array1[i];
// }

// console.log(total);



// let num=5;

// let result=1;
// for(let i=1;i<=num;i++){
//     result=result*i
// }
// console.log(result);

// for(let i=1;i<=10;i++){
//     let result=1;
//     // result=num*i;
//     result= num + "*" + i + "=" + num*i;
//     console.log(result);
// }

// let word = "Level";

// let lower_word=word.toLowerCase();


// let rev_word="";
// for(let i=lower_word.length-1;i>=0;i--){
//     rev_word=rev_word + lower_word[i];

// }
// console.log(rev_word);

// if(rev_word===lower_word){
//     console.log("It is a palindrome");
// }




// let num=151;

// let numbers=num.toString();
// console.log(numbers);
// console.log(typeof numbers);

// rev_num="";
// for (let i=numbers.length-1;i>=0;i--){
//     rev_num=rev_num + numbers[i];
// }
// console.log(rev_num);

// if(rev_num===numbers){
//     console.log("It is a palindrome");
// }


// let num=11;

// let isPrime=true;

// for(let i=2;i<num;i++){
//     if(num%i==0){
//         isPrime=false;
//         break;
//     }
// }

// if(num<2){
//     console.log("It is not a prime number");
// }else if(isPrime){
//     console.log("It is a prime number");
// }else{
//     console.log("It is not a prime number")
// }


// let fruits=["Apple","Banana","PineApple","Grapes"];

// for (let i=0;i<fruits.length;i++){
//     if(fruits[i]==="Banana"){
//         console.log("Value is exists");
//     }
// }

// console.log(fruits.includes("Grapes"));

// for (let i=0;i<fruits.length;i++){
//     if(fruits[i]==="Banana"){
//         console.log(i);
//     }
// }

// console.log(fruits.indexOf("Grapes"));



// for (let i=0;i<fruits.length;i++){
//     if(fruits[i]==="Banana"){
//         fruits[i]="Oranges";
//     }
// }
// console.log(fruits);



// let fruits=["Apple","Banana","PineApple","Grapes","Oranges","Pomogranites","Mangos"];

// extracted_fruits=[];

// for(let i=0;i<fruits.length;i++){
//     if(i>1 && i<6){

//     extracted_fruits.push(fruits[i]);
//     }

// }

// console.log(extracted_fruits);


// let fruits=["Apple","Banana","PineApple","Grapes","Oranges","Pomogranites","Mangos","Apple","Oranges","Grapes","Oranges","Banana"];

// let unique=[];

// for (let i=0;i<fruits.length;i++){
//     exists= unique.includes(fruits[i]);

//     if(!exists){
//         unique.push(fruits[i]);
//     }
// }

// console.log(unique);

// obj={};

// for(let i=0;i<fruits.length;i++){
//     if(obj[fruits[i]]){
//         obj[fruits[i]] = obj[fruits[i]] +1;
//     }else{
//         obj[fruits[i]] =1;
//     }
// }

// console.log(obj);

// console.log(Object.keys(obj));


// let fruits={
//     "Mangos":3,
//     "Grapes":5,
//     "Apple":4,

// }

// fruits.Oranges=4;
// console.log(fruits);
// fruits["Pomogranites"] =10;
// console.log(fruits);

// console.log(Object.keys(fruits));
// console.log(Object.values(fruits));


// delete fruits.Oranges;
// console.log(fruits);


// delete fruits["Pomogranites"];
// console.log(fruits);


// console.log(fruits);
// console.log(Object.keys(fruits));
// console.log(Object.values(fruits));

// let keys=Object.keys(fruits);
// // console.log(keys)

// for(let i=0;i<keys.length;i++){
//     console.log(keys[i]);
//     console.log(fruits[keys[i]]);
//     console.log(keys[i] + "=" + fruits[keys[i]]);
// }


// let array=["Venukumar","Apples","Hyd","Bng"];

// let reverse_arr=[];

// for (let i=array.length-1;i>=0;i--){
//     reverse_arr.push(array[i]);
// }
// console.log(reverse_arr);


// console.log(array.reverse());


// let a="Venukumar and Venukumar and Venukumae";

// let lower = a.toLowerCase();

// console.log(lower);

// let vowels="aeiou";
// let count=0;

// for(let i=0;i<lower.length;i++){
//     if(vowels.includes(lower[i])){
//         count=count+1;
//     }

// }
// console.log(count);


// let a=[10,302,42,429,112,4];

// let max=a[0];
// for(let i=0;i<a.length;i++){
//     if(max < a[i] ){
//         max = a[i];
//     }
// }
// console.log("Maximum value of an arry---",max);


// let min=a[0];
// for(let i=0;i<a.length;i++){
//     if(min > a[i] ){
//         min = a[i];
//     }
// }
// console.log("Minimum value of an array----",min);

// let num = 10;

// let a = -1;
// let b = 1;

// for (let i = 2; i <= num; i++) {

//     let c = a + b;
//     console.log(c);
//     // if (c <= num) {
//         a = b;
//         b = c;
//     // }
// }


// let a= "EArth";
// let b="HearT";


// let sortedWord1= a.toLowerCase().split("").sort().join("");
// let sortedWord2= b.toLowerCase().split("").sort().join("");

// console.log(sortedWord1);
// console.log(sortedWord2);

// if(sortedWord1===sortedWord2){
//     console.log("It is a angram word");
// }



// let num = 153;

// let temp=num;
// let sum=0;

// let digits =num.toString().length;
// console.log(digits);

// for (let i=0;i<digits;i++){
//     let digit = temp %10;
//     sum = sum+ digit ** digits;
//     temp= Math.floor(temp/10);
// }

// if(num===sum){
//     console.log("The number is an armstrong");
// }






// let num =8208;
// let temp= num;

// let sum=0;

// let digits = temp.toString().length;

// for(let i=0;i<num;i++){
//     let digit= temp%10;
//     sum = sum + digit ** digits ;
//     temp= Math.floor(temp/10);


// }
// console.log(sum);

// if(num=== sum){
//     console.log("It is an armstrong number");
// }else{
//     console.log("It is not an armstrong number");
// }



// function sample(){
//     console.log("It is a function")
// }

// sample();


// function add(a,b,c){
//     return a+b+c;
// }

// console.log(add(1,2,3));


// function divide (a,b){
//     if(typeof a === "number" && typeof b === "number"){
//         return a/b;
//     }else{
//         console.log("It is not valid input");
//     }
// }

// console.log(divide(10,5));


// function student(student1 = "Present", student2 = "Absent", student3="Absent") {
    
//     console.log(student1, student2, student3)
//     return true;
// }
// let student1= "Present";
// let student2 ="Present";
// let student3="Present";
// // console.log(student(student1, student2, student3));
// // console.log(student(student1, null, student3))
// // console.log(student(student1,null,student3))
// // console.log(student(student1, student2))
// // console.log(student(student1,student3))
// // console.log(student(null,student2,student3))
// // console.log(student(student1, student3, null))
// // console.log(student(student3));
// console.log(student(student2));
// console.log(student(student1));



// let multiply=function mul(a,b){
//     console.log(a*b)
//     return true;
// }

// console.log(multiply(4,6));


// let array = [1,2,3,4,5,6,7,8];

// array.forEach(function (ele){
//     console.log(ele)
// });


// array.forEach(function (ele){
//     console.log(ele);
// })

// array.map(function (ele){
//     console.log(ele);
// })

// array.map((ele)=>{
//     console.log(ele)
// })

// array.filter((ele)=>{
//     if(ele===2){
//         console.log(ele)
//     }
// })


// const sample= (a,b)=>{
//     return a+b;
// }

// console.log(sample(8,4));


// let result = (ele)=>{
//     console.log(ele);
//     if(typeof ele==="number"){
//         console.log("It is a number");
//     }else{
//         console.log("It is not a number");
//     }
//     return true;
// }
// console.log(result("Venu"));
// console.log(result(24));

// console.log(result(24));



// let array = [2,3,42,14,21,34,23,53,64];
// console.log(array.filter((ele)=>ele===34));
    

// console.log(array.map((ele)=>ele===21));



// function prime(num){
//     isPrime=true;
//     for(let i=2;i<num;i++){
//         if(num%i===0){
//             isPrime=false;
//             break
//         }
//     }

//    if(num<2){
//         console.log("It is not a prime number");
//     }else if(isPrime){
//         console.log("It is a prime number");
//     }else{
//         console.log("It is not a prime number");
//     }
//     return true;
// }

// console.log(prime(11));
// console.log(prime(24));
// console.log(prime(49));
// console.log(prime(89));
// console.log(prime(111));




// let a = [ 12,23,12 ,34,23,54,66]
// function max(array){
//     let maxNum = array[0];
//     for(let i=0;i<array.length;i++){
//         if(array[i]>maxNum){
//             maxNum = array[i];
//         }
//     }
//     return maxNum;
// }

// console.log(max(a));



// let fruits = ["apple","banana","apple","orange","pineapple","orange","grapes","sapota","pineapple"];
// let city = ["hyd","bng","hyd","bng","chennai","Vizag"];

// // function uniqueValues(array){
// //     let unique=[];
    
// //     for(let i=0;i<array.length;i++){
// //         let exists= unique.includes(array[i]);
// //         if(!exists){
// //             unique.push(array[i]);
// //         }
// //     }
// //     return unique;
// // }

// // console.log(uniqueValues(fruits));
// // console.log(uniqueValues(city));


// function unique_values(array){
//     let obj={};

//     for(let i=0;i<array.length;i++){
//         if(obj[array[i]]){
//             obj[array[i]] = obj[array[i]] +1;
//         }else{
//             obj[array[i]] =1
//         }
//     }
//     console.log(obj);
//     console.log(Object.values(obj));
//     return Object.keys(obj);

// }

// console.log(unique_values(fruits));
// console.log(unique_values(city));


