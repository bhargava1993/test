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



let firstClass=[ "Liam", "Olivia",  "venu", "Noah", "Emma",];

// console.log(firstClass[2]);

// console.log(firstClass[4]  === "venu");

// console.log("old one--------",firstClass);

// for(let i=0; i< firstClass.length;i++){

//     if(firstClass[i]  === "venu"){
//         // console.log("venu avaliable");
//         firstClass[i] = "sudher";
//     }

// }

// console.log("old one--------",firstClass);