let num = 153;
let copy = num;
let sum = 0;

let digits = num.toString().length           // to find the length of the number means how many digits in that number.

for (let i = 0; i < digits; i++) {
    let last_digit = copy % 10;           // To gets the last digit
    sum = sum + last_digit ** digits;
    copy = Math.floor(copy / 10);          // To removes the last digit
}
// we can use Math.floor or not 
// we use Math.floor ,it is a method it always removes the decimal part and it returns the lowest integer value.


if (sum = num) {
    console.log(num, "is an armstrong number");
} else {
    console.log(num, "Is nota an armstrong number");
}