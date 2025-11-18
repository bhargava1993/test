// Looping Statements
// Looping statements are used to repeat the block of code multiple times untill the condition is false


// Syntax

//  for (declaration/intialization ; condition ; Increment /decrement ){
//
// }


// Printing 1 to 10 numbers using for loop

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }


//  printing 1 to 100 numbers using for loop

// for (let i = 1; i < 101; i += 1) {
//     console.log(i);
// }



// printing 100 to 1 numbers using for loop

// for (let i = 100; i > 0; i--) {
//     console.log(i);
// }



// Printing Even Numbers Using For loop

// for (let i = 0; i < 10; i += 2) {
//     console.log(i)
// }


//                (or)

// for (let i = 0; i < 10; i += 1) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }


//  printing Odd Numbers Using for loop

// for (let i = 1; i < 10; i += 2) {
//     console.log(i);
// }


//             (or)


// for (let i = 0; i < 10; i += 1) {
//     if (i % 2 == 1) {
//         console.log(i);
//     }
// }

//               (or)

// for (let i = 0; i < 10; i += 1) {
//     if (i % 2 == 0) {

//     } else {
//         console.log(i);
//     }
// }


// Printing an array using for loop

// let array = ["Venu", "Jagan", "Anji", "Sudheer", "Virat", "Kohli"];

// for (i = 0; i <= 5; i += 1) {
//     console.log(array[i]);
// }



//  printing an array in reverse order using for loop



// let array = ["Venu", "Jagan", "Anji", "Sudheer", "Virat", "Kohli"];
// for (i = 5; i >= 0; i -= 1) {
//     console.log(array[i]);
// }





//  To check the Prime number using for loop

// let num = 17;
// let isPrime = true;

// for (i = 2; i < num; i += 1) {
//     if (num % 2 == 0) {
//         isPrime = false;
//         break;
//     }
// }

// if (num <= 1) {
//     console.log("The number is not a prime number");
// } else if (isPrime) {
//     console.log("The number is a prime number");
// } else {
//     console.log("The number is not prime number");
// }




let num = 18;
let isPrime = true;

for (i = 2; i < num; i += 1) {
    if (num % 2 == 0 || num % 3 == 0 || num % 4 == 0 || num % 5 == 0) {
        isPrime = false;
        break;
    }
}

if (num <= 1) {

    console.log(num, "is not a prime nuber");
} else if (isPrime) {
    console.log(num, "is a prime number");
} else {
    console.log(num, "is not a prime number");
}