/*
Practice Problem---> 1

var x = 5;

function test(){
    var x = 10;
    if (true) {
        var x = 20;
        console.log("Inside Block--->",x);
    }
    console.log("Inside Function---->",x);
}
test();
console.log("Global Scope--->",x);

# OUTPUT

Inside Block---> 20
Inside Function----> 20
Global Scope---> 5
*/

/*

PRACTICE PROBLEM ---> 2

let x = 5;

function test(){
    let x = 10;
    if (true){
        let x = 20;
        console.log("Inside block",x);
    }
    console.log("Inside function",x);
}
test();
console.log("Globalscope",x);

# OUTPUTS

Inside block 20
Inside function 10
Globalscope 5
*/