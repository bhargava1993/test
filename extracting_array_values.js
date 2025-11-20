let colours = ["Red", "White", "Black", "Pink", "Orange", "Blue", "Green", "Yellow", "Brown"];

array = [];

for (let i = 0; i < colours.length; i++) {
    if (i > 4 && i < 9) {
        array.push(colours[i]);
    }
}
console.log(array);



// // output ---> [ 'Blue', 'Green', 'Yellow', 'Brown' ]



for (let i = 0; i < colours.length; i += 1) {
    if (i > 1 && i < 7) {
        array.push(colours[i]);
    }
}
console.log(array);


//  output --->  [ 'White', 'Black', 'Blue', 'Brown', 'Orange', 'Pink' ]



