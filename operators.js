// 1. Arithmetic Operators

// Addition Program

var a = 10, b = 20, c = 40;
var add = a + b + c;
console.log("line ---> 7", add);

// Substraction program

var a = 60, b = 20, c = 30;
var sub = a - b - c;
console.log("line --->13", sub);

// Multiplication program

var a = 60, b = 20, c = 30;
var mul = a * b * c;
console.log("line --->19", mul);


// Division Program

var a = 60, b = 20, c = 30;
var div = a / b / c;
console.log("line ---> 26", div);

// Modulus program (It give remainder only)

var a = 60, b = 20, c = 30;
var add = a + b + c;
var remainder = add % 3;
console.log("line--->33", add);
console.log("line--->34", remainder);




// 2. Comparison Operators

// Assignment Operator
var a = 60, b = 20, c = 30;                // "=" ---> Assignment Operator ( Assign a value into variable)
console.log("line--->43", a, b, c);

// "==" ---> Equal to ( only values should match, then it shows result is "True")

var a = 60, b = "60";
console.log("line--->48", a == b);

//"===" ---> strict comparision ( not only values and data type also match ,then it shows the result is "True")

var a = "60", b = "60";
console.log("line --->53", a === b);


// "!=" ---> not equal to 

var a = 60, b = 60;
console.log("line--->59", a != b);


// "!==" ---> Strict not equal to

var a = 60, b = "60";        // not only checks the value and also checks the data type 
console.log("line --->65", a !== b);


// Lessthan(<)

var a = 60, b = 20, c = 30;
console.log("line--->71", a < b < c);

// Greaterthan(>)

var a = 60, b = 20, c = 30;
console.log("line--->76", a > b > c);

// Lessthan or equal to
var a = 60, b = 20;
console.log("line--->80", a <= b);

// Greaterthan or equal to
var a = 60, b = 20;
console.log("line --->84", a >= b);


// 3. Increment and Decrement Operators

// Increment and decremnt by 1 value of a variable

// Increment operator
var a = 20;
var increment = a++;
console.log("line--->94", increment);
console.log("line--->95", a);

// Decrement Operator

var a = 20;
var decrement = a--;
console.log("line ---> 101", decrement);
console.log("line ---> 102", a);

// Pre -Increment Operator

var a = 20;
var pre_increment = ++a;
console.log("line--->108", pre_increment);
console.log("line--->109", a);

// Post - Increment Operator

var a = 20;
var post_increment = a++;
console.log("line--->115", post_increment);
console.log("line--->116", a);



// Null Operators

console.log("line ---> 122", 0 / 0);
console.log("line--->123", "venu" / 10);
console.log("line ---> 1124", 10 / "venu");
console.log("line --->125", NaN === NaN);
console.log("line--->126", 10 * "venu");



console.log("line ---->127", 10 + "venu");        // only "+" operator will work and it is the concatenation(adding)


console.log(parseInt("abc"));
console.log(Number.isNaN(NaN));
console.log(isNaN("abc"));




// Logical Operators
//// It is used to combine multiple conditions 

//   && ---> Logical AND ( if any one conditin is false then it passes the result is false)
//                         (or)
//  ( If All conditions are true then it passes the result is true)


//   || ---> Logical OR (if any one consition is true then it passes the result is true)
//                           (or)
//    (If All consitions are false then it passes the result is false)                      

var a = 150, b = 50, c = 100;
console.log("line--->144", (a > b) && (a > c));

console.log("line--->146", (a < b) && (b < c));

console.log("line--->148", (a > b) || (b > c));

console.log("line---->150", (a < c) || (c > b));

console.log("line--->152", (a > c) && (a > b) || (c > b));

console.log("line--->154", (a < c) && (a < b) || (c > b));

console.log("line--->156", (a < c) && (a < b) || (c < b));

console.log("line--->158", (a < c) || (a < b) || (c > b));

console.log("line--->160", (a < c) && (a < b) && (c > b));

console.log("line--->162", (a < c) || (a < b) && (c > b));


// ! ---> Not

console.log("line--->176", !true);
console.log("line--->177", !false);
console.log("line--->178", !150);
console.log("line--->179", !(-150))




