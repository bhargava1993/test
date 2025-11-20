let num = 79;
let isPrime = true;

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

if (num <= 1) {
    console.log("It is not a prime number");
} else if (isPrime) {
    console.log("It is a prime number");
} else {
    console.log("It is not a prime number");
}

