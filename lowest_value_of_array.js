let array = [178, 81, 29, 40, 12, 36, 39, 24, 88];

let min = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i];
    }
}
console.log(min);

