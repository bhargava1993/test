// Array Methods
// 1. length -----> To find how many values in an array
// 2. push -----> To add one element at the end of an array
// 3. pop ------> To remove one element at the end of an array
// 4. shift -----> To remove one element at the starting of an array
// 5. unshift ----> To add one element at the starting of an array
// 6. indexOf ------> It uses the find the index number of element in an array
//                    If the element is found it prints the index number of an element else it will print -1
//
// 7.includes -------> It uses  wheather the element is exist or not
//                     If the element is exist it prints true else false

// 8. slice ------> It is used to copy some part of an array
//                  It doesn't changes the original array
//                  It returns the new array
// syntax : array.slice(start,end)-----> end index is not included
//          arra.slice(2,6)
//
// 9.splice -------> It is used to add,remove and replace the elements of an array
//                   It changes the original array
//                   It returns the removed elements of an array
// syntax : array.splice(startIndex, deleteCount, item_1,item_2.....)
//
// 10.reverse ---- > It is used to reverse an array
//                   It changes the original array
//



// let fruits = ["Apple", "Banana", "Grapes", "Mango", "Orange", "Straw_berry"];

// console.log(fruits.length);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[5]);

// fruits.push("Cherry");
// console.log(fruits);

// fruits.push("Guava", "Water_melon", "Pine_aple");
// console.log(fruits);
// console.log(fruits.length);



// fruits.pop();
// fruits.pop();
// console.log(fruits);



// fruits.pop();
// console.log(fruits.length);


// fruits.shift();
// fruits.shift();
// console.log(fruits);
// console.log(fruits.length);



// fruits.unshift()
// console.log(fruits);
// console.log(fruits.length);


// fruits.unshift("Pomogranite", "Sapota");
// console.log(fruits);
// console.log(fruits.length);


//  Replace  a fruit into another fruit using index positions
// let fruits = ["Apple", "Banana", "Grapes", "Mango", "Orange", "Straw_berry"];

// fruits[3] = "Sapota";
// console.log(fruits);
// fruits[5] = "PineApple";
// console.log(fruits);
// fruits[1] = "Jack_Fruit";
// console.log(fruits);

// using for loop to print the array values
// for (i = 0; i <= 5; i += 1) {
//     console.log(fruits[i]);
// }


// to print the array values in reverse order
// for (i = 5; i > 0; i -= 1) {
//     console.log(fruits[i]);
// }


//  To check an array has Grapes or not using for loop

// let fruits = ["Apple", "Banana", "Grapes", "Mango", "Orange", "Straw_berry"];

// for (i = 0; i < fruits.length; i += 1) {
//     if (fruits[i] === "Grapes") {
//         console.log("Grapes are available in this array");
//         // } else {
//         //     console.log("Grapes are not available in this array");
//     }
// }


//  To check an array has Banana or not using for loop

// for (i = 0; i < fruits.length; i += 1) {
//     if (fruits[i] === "Banana") {
//         console.log("Banana is available");
//     }
// }



//  TO replace a fruit into an array using for loop

// let fruits = ["Apple", "Banana", "Grapes", "Mango", "Orange", "Straw_berry"];


// for (i = 0; i < fruits.length; i += 1) {
//     if (fruits[i] === "Orange") {
//         console.log("Orange is available");
//         fruits[i] = "Pine apple";
//     }
// }

// console.log(fruits);



//  Replace a particular value using for loop

// let animals = ["Tiger", "Lion", "Deer", "Elephant", "Dog", "Cat", "Zirafee", "Zebra", "Monkey"];

// for (i = 0; i < animals.length; i += 1) {
//     if (animals[i] === "Zirafee") {
//         console.log("Zirafee is available in this array");
//         animals[i] = "Donkey";
//     }
// }
// console.log(animals);

// for (i = 0; i < animals.length; i += 1) {
//     if (animals[i] === "Deer") {
//         console.log("Deer is availble");
//         animals.push("Camel");
//     }
// }
// console.log(animals);


// for (i = 0; i < animals.length; i += 1) {
//     if (animals[i] === "Deer") {
//         console.log("Deer is available");
//         animals.pop();
//     }
// }
// console.log(animals);



// let animals = ["Tiger", "Lion", "Deer", "Elephant", "Dog", "Cat", "Zirafee"];

// animals.push("Monkey", "Donkey");
// console.log(animals);

// console.log(animals.length);


// // animals.pop();
// animals.pop("Cat");   // we can't remove particular element of an array by using pop
// console.log(animals);


// animals.shift();
// console.log(animals);


// animals.unshift("Bear");
// console.log(animals);

// let animals = ["Tiger", "Lion", "Deer", "Elephant", "Dog", "Cat", "Zirafee"];

// console.log(animals.indexOf("Cat"));
// console.log(animals.indexOf("Lion"));
// // console.log(animals)
// console.log(animals.includes("Tiger"));
// console.log(animals.includes("Elephant"));
// console.log(animals.includes("Bear"));

// console.log(animals.slice(3));   // [ 'Elephant', 'Dog', 'Cat', 'Zirafee' ]
// console.log(animals);
// ----output----
// [
//   'Tiger',   'Lion',
//   'Deer',    'Elephant',
//   'Dog',     'Cat',
//   'Zirafee'
// ]

// console.log(animals.slice(2, 5));
// console.log(animals);

// console.log(animals.slice(3, 6));
// console.log(animals);


// let animals = ["Tiger", "Lion", "Deer", "Elephant", "Dog", "Cat", "Zirafee"];

// animals.splice(2, 3);
// console.log(animals);   // [ 'Tiger', 'Lion', 'Cat', 'Zirafee' ]


// let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// numbers.splice(2, 3);
// console.log(numbers);   //[ 10, 20, 60, 70, 80, 90 ]



// numbers.splice(3, 6, "Venu", "Jagan");
// console.log(numbers);


// numbers.splice(2, 4, "Apple", "Banana", "Orange");
// console.log(numbers);


//  Replacing a value

// numbers.splice(5, 1, "Car");
// console.log(numbers);


// numbers.splice(2, 1, "Apple");
// console.log(numbers);


// numbers.splice(7, 2, "Hyderabad", "Bengaluru");
// console.log(numbers);


// let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// console.log(numbers.reverse());

// reverese = [];

// for (let i = numbers.length - 1; i >= 0; i--) {

//     reverese.push(numbers[i]);
// }
// console.log(reverese);



