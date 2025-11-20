let fruits = ["Apple", "Banana", "Orange", "pomogranite", "Pine Apple", "Jack Fruit"];


for (let i = 0; i < fruits.length; i += 1) {
    // console.log(fruits[i]);

    if (fruits[i] === "Orange") {
        console.log("Orange is available in the array");

        fruits[i] = "Mango";
    }
}
console.log(fruits);



for (let i = 0; i < fruits.length; i += 1) {
    // console.log(fruits[i]);

    if (fruits[i] === "Jack Fruit") {
        console.log("Jack Fruit is available in the array");

        fruits[i] = "Grapes";
    }
}

console.log(fruits);