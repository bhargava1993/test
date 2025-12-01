// destructuring
// It is the process of extracting values of an arrays and objects





// let array = ["Apple", "Red", "Hyd", "BMW"];

// let fruitName = array[0];
// let color = array[1];
// let city = array[2];
// let carType = array[3];

// console.log(fruitName);
// console.log(color);
// console.log(city);
// console.log(carType)


//  Array destructing


// let [fruitName, color, city, carType] = ["Apple", "Red", "Hyd", "BMW"];

// console.log(fruitName);
// console.log(color);
// console.log(city);
// console.log(carType);


// Object destructuring

// let { fruitName, color, city, carType } = {
//     "fruitName": "Banana",
//     "color": "White",
//     "city": "Bng",
//     "carType": "Audi"
// }

// let fruitName_ = obj.fruitName;
// let color_ = obj.color;
// let city_ = obj.city;
// let carType_ = obj.carType;

// console.log(fruitName);
// console.log(color);
// console.log(city);
// console.log(carType);


// let { id, name, occupation } = {
//     "id": 1,
//     "name": "bhargava",
//     "occupation": "se"
// }

// let id = obj.id;
// let name = obj["name"];
// let occupation = obj["occupation"];

// console.log(id);
// console.log(name);
// console.log(occupation);


// let obj = { student: "Venu", student1: "Sudhher", student3: "Bhargava" };
// console.log(obj);

// let { student, student1, student2 } = { "student": "Venu", "student1": "Sudhher", "student2": "Bhargava" };

// // let { student, student1, student2 } = { "Venu", "Jagan", "Anji"};
// console.log(student);
// console.log(student1);
// console.log(student2);


// let obj = { "student": "Venu", "student1": "Sudhher", "student2": "Bhargava" };

// let student = obj["student"];
// let student1 = obj["student1"];
// let student2 = obj["student2"];

// console.log(student);
// console.log(student1);
// console.log(student2);


// let { city1, city2, city3, city4 } = { city1: "Hyd", city2: "Bng", city3: "Chennai", city4: "Vizag" };

// console.log(city1);
// console.log(city2);
// console.log(city3);
// console.log(city4);



// rest operators

// // It is denoed in ...
// // rest operator collects all remaining values into an array.

// let names = ["Apple", "Red", "Hyd", "BMW", "Grapes", "White", "Bng", "Audi"]
// let [fruitName, color, city, carType, ...remainingValues] = names;
// console.log(fruitName);
// // console.log(color);
// console.log(city);
// console.log(remainingValues);
// console.log(carType);

// let groupOfNames = ["Venu", "Bhargva", "Sudheer", "zaiba", "shruthi"];

// let [studentName, , lawys, ...groupOfNames] = ["Venu", "Bhargva", "Sudheer", "zaiba", "shruthi"];

// console.log(studentName);
// console.log(lawys);
// console.log(groupOfNames)



// let names = { fruitName: "Apple", color: "Red", city: "Hyd", carType: "BMW", fruitName2: "Grapes", color2: "White", city2: "Bng", carType2: "Audi" }

// let { fruitName, color, city, carType, ...remainingValues } = names;


// console.log(fruitName);
// console.log(color);
// console.log(city);
// console.log(remainingValues);


// function occupationFn(...occupation) {
//     let [b_occupation, v_occupation] = occupation;
//     console.log(occupation);
//     console.log(b_occupation);
//     // console.log(v_occupation);
//     // console.log(s_occupation);
//     // console.log(z_occupation);
//     return;
// }

// let arrayOfocupation = ["softwareEngeneer", "mern-developer", "backend", "softwareArchitect"];
// occupationFn(arrayOfocupation);


// function fruits(...fruitsNames) {
//     let [A_fruitsNames, B_fruitsNames] = fruitsNames;
//     // console.log(fruitsNames);
//     console.log(A_fruitsNames);
//     console.log(B_fruitsNames);
//     console.log(fruitsNames);
//     return;
// }

// let fruitsNames = ["Apple", "Banana", "Grapes", "Pomoganite", "Guava"];
// console.log(fruitsNames);



// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// let i = 0;
// function recursive(i) {

//     recursive(i);

//     i++;
//     console.log(i);
//     if (i < 10) {
//         recursive(i);
//         return;
//     }


// }

// console.log(recursive(i));

// let i = 0;
// function recursive(i) {

//     recursive(i);
//     i++;
//     console.log(i);
//     return;
// }
// console.log(recursive(i));


// let i=0;
// function printNumberFn(){
//     console.log(i);
//     i++;

//     if(i<=10){
//         printNumberFn();
//         return;
//     }
// }

// printNumberFn();

// let i = 0;
// function recursive() {
//     console.log(i);
//     i++;

//     if (i <= 10) {
//         recursive()
//         return;
//     }
// }
// console.log(recursive(i));



// let i = 0;

// function recursive() {
//     console.log(i);
//     i++;

//     if (i <= 10) {
//         recursive();
//         // return;
//     }
//     // recursive();
//     return true;

// }
// console.log(recursive());



// let array = ["Venu", "jagan", "Anji", "Sudheer", "Murali", "Ganesh", "Bhargav", "Hari"];


// let i = 0;
// function array1(array,index =0) {
//     console.log(i);
//     i++;

//     if (i <= array[5]) {
//         array1(i);
//     }
//     return true;
// }
// console.log(array1())



// function printArray(arr, index = 0) {
//     // Stop condition
//     if (index === arr.length) {
//         return;
//     }

//     // Print current element
//     console.log(arr[index]);

//     // Call the function again for next index
//     printArray(arr, index + 1);
// }

// let numbers = [10, 20, 30, 40];
// printArray(numbers);
// printArray(array);


// let i = 0;
// function array1(array) {
//     console.log(array[i]);
//     i++;
//     if (i === array.length) {
//         return;
//     }

//     console.log(array[i]);

//     array1(array, i + 1);
// }

// let num = [10, 29, "Venu", 53, 64];
// console.log(array1(num));





// let num = 5;
// let fact = 1;
// for (let i = 1; i <= num; i++) {
//     fact = fact * i;
// }
// console.log(fact);


// let num = 10;
// let a = -1;
// let b = 1;

// for (let i = 0; i <= num; i++) {
//     let c = a + b;
//     console.log(c);
//     a = b;
//     b = c;
// }
// console.log(num);