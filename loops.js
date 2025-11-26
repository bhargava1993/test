// looping statement

// ++
// --

// ++
// 6
// a++

// 6+1= 7
// 7+1 =8
// 8+1= 9
// 9+1=10

// --
// 6
// 6-1 = 5
// 5-1= 4
// 4-1 =3
// 3-1 =2
// 2-1 = 1

// syntax:
// ---------

// for (Declaration/initilization;condition;increment/decrement){
//     logic
// }

// for(let i=0;i<5 ; i++){
// logic
// }

// console.log(i<10)
// 0,1,2,3,4,5,6,7,8,9,    10

// 0+1 =1


// console.log(0)
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)

// console.log(1000)

// starting  -->  1000
// 100      to   1000

// let i=100;
// let finalOutput= 10000;

// let condtion = i < finalOutput;

// 2,4,6,8

// i+=2;

// i%2==0

// 1,3,5,7,9

// 10/2 = 0
// 9/2 = 1

// 2)10 (5
//    10
//  ------------  
//     0

//  2) 9 (4   
//     8
//    ------
//     1


// 10/2 =5 

// console.log(10/2);
// console.log(10%2);

// for(let i=1; i < 10;i++){
    
//    if(i%2 === 2){
//     // console.log(i);
//    }
//    else{
//     console.log(i);
//    }
    
// }

// let array = ["bhargava", "venu", "sudheer", "zaiba"];
                // 0           1       2           3
                    // 0       0+1         1+1    2+1
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);

// for(let i = 0; i<4 ;i++){
//     console.log(array[i])
// }

// 10,9,8,7,6,5,4,3,2,1,0

// -- 
// 10-1 =9
// 9-1 =8

// 10 ---> 0
// let array = "121";

// for(let i=3; i >= 0 ;i--){
//     console.log(array[i]);
// }

// 121


// 1 - 100
// 100 - 1

// 12345
// 1234
// 123
// 12
// 1

// 54321
// 5432
// 543
// 54
// 5

// let studentNames=[
//   "Liam", "Olivia", "Noah", "Emma", "Oliver", "Ava", "Elijah", "Sophia", "William", "Isabella",
//   "James", "Mia", "Benjamin", "Charlotte", "Lucas", "Amelia", "Henry", "Harper", "Alexander", "Evelyn",
//   "Michael", "Abigail", "Ethan", "Ella", "Daniel", "Avery", "Jacob", "Scarlett", "Logan", "Grace",
//   "Jackson", "Chloe", "Levi", "Victoria", "Sebastian", "Riley", "Mateo", "Aria", "Jack", "Lily",
//   "Owen", "Hannah", "Theodore", "Layla", "Aiden", "Zoey", "Samuel", "Nora", "Joseph", "Mila",
//   "John", "Aubrey", "David", "Camila", "Wyatt", "Penelope", "Matthew", "Luna", "Luke", "Ella",
//   "Asher", "Stella", "Carter", "Paisley", "Julian", "Savannah", "Grayson", "Skylar", "Leo", "Nova",
//   "Jayden", "Isla", "Gabriel", "Ellie", "Isaac", "Hazel", "Lincoln", "Violet", "Anthony", "Aurora",
//   "Hudson", "Genesis", "Dylan", "Emilia", "Ezra", "Everly", "Thomas", "Leah", "Charles", "Madison",
//   "Christopher", "Willow", "Jaxon", "Lucy", "Maverick", "Brooklyn", "Josiah", "Claire"
// ]

// console.log(studentNames.length);

// for(let i=0;i<studentNames.length;i++){
//     console.log(studentNames[i]);
// }

 
// console.log(studentNames.length);

// for(let i=0;i<studentNames.length;i++){
//     console.log(studentNames[i])
//     // console.log(i);
// }

//length -- length of an array
//push -- is going to add one new element at the end
//pop -- is going to remove one element at the end
//shift -- is going to remove one element from staring of an array
//unshift -- is going to add one element from staring of an array
// indexOf  -- it will give you index number of an element else it will give you -1
// inclueds -- it will give you true or false (if values is exists then true else false)

//slice
// slice() → copy
// array.slice(start, end);
// start → index where the slice begins (included)
// end → index where the slice stops (excluded)

// Definition- copies part of an array and leaves the original untouched.

// 1.Does NOT change the original array
// 2.Returns a new array
// 3.You choose the start and end (end not included)


//splice
// p = parametres
// p= purge
// p= push

// splice() removes or adds items and changes the original array.

// Syntax:
// array.splice(start, deleteCount, item1, item2, ...);


// start → index to begin

// deleteCount → how many items to remove

// item1, item2... → items to add (optional)

// Examples:

// Remove items
// ----------------------
// let numbers = [1, 2, 3, 4, 5];

// numbers.splice(1, 2);

// console.log(numbers);   // [1, 4, 5]

// Add items
// ----------------------
// let colors = ["red", "blue"];

// colors.splice(1, 0, "green");

// console.log(colors);   // ["red", "green", "blue"]

// Replace items
// ----------------------
// let cars = ["BMW", "Audi", "Ford"];

// cars.splice(1, 1, "Tesla");

// console.log(cars);     // ["BMW", "Tesla", "Ford"]


// "Oliver", "Ava", "Elijah", "Sophia", "William", "Isabella"

// let studentNames=["Liam", "Olivia", "Noah", "Emma"];

// console.log("old one---",studentNames.length);

// studentNames.push("Oliver");
// studentNames.push("Ava");
// studentNames.push("Elijah");
// studentNames.push("Oliver");
// console.log("new one---",studentNames);


// let studentNames=["Liam", "Olivia", "Noah", "Emma"];

// console.log("old one---",studentNames);

// studentNames.pop();
// studentNames.pop();
// studentNames.pop();
// studentNames.pop();
// console.log("new one---",studentNames)

// let studentNames=["Liam", "Olivia", "Noah", "Emma"];

// console.log("old one---",studentNames);

// studentNames.shift();
// studentNames.shift();
// studentNames.shift();
// console.log("new one---",studentNames)

// let studentNames=["Liam", "Olivia", "Noah", "Emma"];

// console.log("old one---",studentNames);

// studentNames.unshift("123");
// studentNames.unshift("bhargava");
// console.log("new one---",studentNames)


// replacing a value
// let studentNames=["Liam", "Olivia", "Noah", "Emma"];

// console.log(studentNames[2]);

// console.log("old one---",studentNames);

// studentNames[3] = "venu";

// console.log("new one---",studentNames)

// let firstClass=["Liam", "Olivia", "Noah", "Emma"];

// let secondClass=["Ava", "Elijah", "Sophia", "William", "Isabella"];

// let thiredClass=[]

// console.log("old one---",thiredClass)

// Class3rd.push(studentNames1st[0]);
// Class3rd.push(studentNames1st[1]);
// Class3rd.push(studentNames1st[2]);
// Class3rd.push(studentNames1st[3]);

// for(let i=0; i< firstClass.length;i++){

//     thiredClass.push(firstClass[i]);
// }

// Class3rd.push(studentNames2nd[0]);
// Class3rd.push(studentNames2nd[1]);
// Class3rd.push(studentNames2nd[2]);
// Class3rd.push(studentNames2nd[3]);
// Class3rd.push(studentNames2nd[4]);

// for(let i=0; i< secondClass.length;i++){

//     thiredClass.push(secondClass[i]);
// }

// console.log("new one---",thiredClass)



// let firstClass=[ "Liam", "Olivia",  "venu", "Noah", "Emma",];

// // console.log(firstClass[2]);

// // console.log(firstClass[4]  === "venu");

// console.log("old one--------",firstClass);

// for(let i=0; i< firstClass.length;i++){

//     if(firstClass[i]  === "venu"){
//         // console.log("venu avaliable");
//         firstClass[i] = "sudher";
//     }

// }

// console.log("old one--------",firstClass);


// let firstClass=[ "Liam", "Olivia",  "venu", "Noah", "Emma",];


// console.log("old one--------",firstClass);

// for(let i=0; i< firstClass.length;i++){

//     if(firstClass[i]  === "venu"){
//         // console.log("venu avaliable");
//         firstClass[i] = "sudher";
//     }

// }

// firstClass.pop();
// console.log("old one--------",firstClass);


// factorial:
// ---------------

// 5!

// 5*4*3*2*1= 120

// let number=5;

// 5 - 1

// 1 to 100;

// 1 ending 100 --> ++

// let i=1; i<=   100;i++

// 100 - 1; --

// let i=100;  1 < i ;i--

// 5!

// 5*4*3*2*1= 120

// 120 *1 = 120
// 5*1 = 5


// let name= "babu";

// name="bhargava";

// let salray = 300000;

// slary= 10000 * 12;



// 10 = sum of 10 numbers;

// 10+9+8+7+6+5+4+3+2+1



// let result=0;

// // console.log(result * 4);

// for(let i=10; i >= 1; i--){

//     result = result + i;   
// }

// console.log(result);

// let array = [100,500,600,1000,3,5,8,9];
// let sum=0;

// for(let i=0; i < array.length; i++){
//     // console.log(array[i]);
//     sum = sum + array[i];
// }
// console.log(sum);

// 2 * 1 = 2
// 2 * 2 =4
// 2 * 3 =6
// 2 * 4 = 8
// 2 * 5 = 10
// 2* 6 = 12
// 2* 7 =14
// 2* 8 =16
// 2* 9 =18
// 2* 10 =20



// let number= 22;
// let result;

// for(let i = 1; i<=10 ;i++){
    
//     // console.log(i);
//     // result = number * i;
//     // console.log(result);

//     console.log(number + "*" +i +"="+ number*i );

//     //  console.log( 6 + "*" +i +"="+ 6*i );
// }


// let names=[ "Liam", "Olivia",  "venu", "Noah", "Emma","sudher","venu"];

// for(let i=0; i< names.length;i++){

//     if(names[i]  === "venu"){
//         console.log("venu index position--",i);
//         // names[i] ="bhargava";
//     }

// }
// console.log(names);

// console.log(names.indexOf("venu"));

// console.log(names.includes("venu"));

// uniques array
// let names=[ "sudher","Liam", "Olivia",  "venu", "Noah", "Emma","sudher","venu"];
// console.log(names.indexOf("bhargava"));

// console.log([...new Set(names)]);
// let uniqueArray=[]

// for(let i=0; i<names.length; i++){
  
//     let exsits = uniqueArray.includes(names[i]);

//     if(!exsits){
//     uniqueArray.push(names[i]);
//     }

// }

// console.log("uniqueArray----",uniqueArray);

// index- 2
// end index - 5

// let startIndex = 2;
// let endIndex=5
// let newArray=[];

// for(let i=0; i<names.length; i++){

//     if((i>=2) && (i<=5)){
//         // console.log(i);
//         newArray.push(names[i]);
//     }
    
// }

// console.log(newArray);

// find unique values using indexof method
// find duplicate values

// let names=[ "sudher","Liam", "Olivia",  "venu", "Noah", "Emma","sudher","venu"];
// let names1="hargava";
// // console.log(typeof names);
// console.log(Array.isArray(names));


// let array = ["a","b","c","d","e","f","g","h"];


// let array = [1,2,3,4,5,6,7,8,9,10]



// 4,5,6
// console.log(array);

// slice()
// splice();

// console.log(array.slice());
// console.log(array.splice());

// console.log(array.slice(3));
// console.log(array.splice(3));

// console.log(array.slice(3));

// ["a","b","c","d","e","f","g","h"]

// console.log(array.splice(2,4,"sudher","venu"));

// p - parameters
// p - purge
// p - push

// deep copy
// show copy

// ["c","d","e"];
// ["a","b","f","g","h"];

// console.log(array);

// let array=["a","b","c","d","e","f","g","h"];
// let result=[]

// for(let i = array.length-1; i >= 0; i--){
//     result.push(array[i]);
// }

// console.log(array.reverse());

// let array=["a","b","c","d",["bhargava","venu",["zaiba","btec",[1000,2000]]],"e","f","g","h"];

// ["a","b","c","d","bhargava","venu","e","f","g","h"];

// console.log(array.flat(Infinity));


































// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(3);
// console.log(citrus);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1,3);
// console.log(citrus);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 2, "Lemon", "Kiwi");
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0, 1);
// console.log(fruits);