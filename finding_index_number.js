let fruits = ["Apple", "Banana", "Orange", "pomogranite", "Pine Apple", "Jack Fruit"];

for (let i = 0; i < fruits.length; i += 1) {
    // console.log(fruits[i]);
    if (fruits[i] === "Pine Apple") {
        console.log(i)
    }
}


// output ---> 4



for (let i = 0; i < fruits.length; i += 1) {
    // console.log(fruits[i]);

    if (fruits[i] === "pomogranite") {
        console.log(i);
    }
}

// output -----> 3

// Finding Index Numbers

console.log(fruits.indexOf("Apple"));

// output ----> 0


console.log(fruits.indexOf("Jack Fruit"));