let array = [20, 37, 99, 68, 56, 24, 209, 86];

let max = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}
console.log(max);