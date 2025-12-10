// Arrays : An array is a special variable that can store multiple values in a single variable.

// let array = [1,"Sudheer","Sam","Shiv",54,23];

// console.log(array);

// How to access elements by using Index numbers 

// In arrays index number starts with only zero

// let array = [1,2,3,4,5,6];

// console.log(array[0]);
// console.log(array[3]);
// console.log(array[7]);



// Reading elements in array

// let array = ["Sam","John","Elizabeth","Putin"];

// for (let i=0;i<4;i++){
//     // console.log(i);
//     console.log(array[i]);
// }


// Reverse array elements


// for (let i=3;i>=0;i--){
//     // console.log(i);
//     console.log(array[i]);
// }


// METHODS IN ARRAY 
// 1. Length: it finds length of the array 

// let studentNames=[ "Liam", "Olivia", "Noah", "Emma", "Oliver", "Ava", "Elijah", "Sophia", "William", "Isabella", "James", "Mia", "Benjamin", "Charlotte", "Lucas", "Amelia", "Henry", "Harper", "Alexander", "Evelyn", "Michael", "Abigail", "Ethan", "Ella", "Daniel", "Avery", "Jacob", "Scarlett", "Logan", "Grace", "Jackson", "Chloe", "Levi", "Victoria", "Sebastian", "Riley", "Mateo", "Aria", "Jack", "Lily", "Owen", "Hannah", "Theodore", "Layla", "Aiden", "Zoey", "Samuel", "Nora", "Joseph", "Mila", "John", "Aubrey", "David", "Camila", "Wyatt", "Penelope", "Matthew", "Luna", "Luke", "Ella", "Asher", "Stella", "Carter", "Paisley", "Julian", "Savannah", "Grayson", "Skylar", "Leo", "Nova", "Jayden", "Isla", "Gabriel", "Ellie", "Isaac", "Hazel", "Lincoln", "Violet", "Anthony", "Aurora", "Hudson", "Genesis", "Dylan" ,"Emilia", "Ezra", "Everly", "Thomas", "Leah", "Charles", "Madison", "Christopher", "Willow", "Jaxon", "Lucy", "Maverick", "Brooklyn", "Josiah", "Claire"];

// console.log(studentNames.length);

// for (let i = 0; i<studentNames.length;i++){
//     // console.log(i);
//     console.log(studentNames[i]);
// }



/*
// 2.push: It adds elements at end of the array

let studentName = ["Sam","Shiv","John","Kochatil"];

studentName.push("Janak");

console.log(studentName);

studentName.push("AMCA");

console.log(studentName);

studentName.push("Basha");
console.log(studentName);

studentName.push("Karna");
console.log(studentName);
*/


/*
// 3.pop(): It removes one element from array 

let fighterJets = ["Mig 21","Mig 29","Sukhoi 30MKI","LCA Tejas","AMCA","F-35"];

fighterJets.pop();
console.log(fighterJets);

fighterJets.pop();
console.log(fighterJets);

fighterJets.pop();
console.log(fighterJets);
*/


/*
// 3. unshift: It add elements from start of array 

let socialMedia = ["Youtube","Instagram","Facebook"];

socialMedia.unshift("Whatsapp");
console.log(socialMedia);

socialMedia.unshift("Telegram");
console.log(socialMedia);

socialMedia.unshift("X")
console.log(socialMedia);
*/


/*
// 4. shift(): It removes elements from starts of the array 

let elements = ["O2","H2O","H2","CH3","HOOH"];

elements.shift();
console.log(elements);

elements.shift();
console.log(elements);

elements.shift();
console.log(elements);
*/



/*
INDEXOF

indexOf: it find index number of elements


// find the index number of element


let arr = [1,2,5,2,3,4,5,"Sam","John"];

console.log(arr.indexOf(2));

console.log(arr.indexOf("Sam"));

console.log(arr.indexOf(9));


console.log(arr.lastIndexOf(2));
*/

/*
INCLUDES
// includes: It is if elements present in array it returns TRUE, if not returns FALSE 

let bigbossContestants = ["Suman","Bharani","Tanuja","Rithu","Demon Pavan"]

console.log(bigbossContestants.includes("Demon Pavan"));
console.log(bigbossContestants.includes("Kalyan"));
*/


/*

// SLICE METHOD

let cricketBoards = ["BCCI","ACB","ECB","BCB","SCB","SACB"];

console.log(cricketBoards.slice());

console.log(cricketBoards.slice(2,5));

console.log(cricketBoards.slice());


console.log(cricketBoards.slice(4,5));
console.log(cricketBoards.slice());

*/

/*

// SPLICE METHOD

let animals=["tiger","lion","horse","bear","cow"];

console.log(animals.splice());

console.log(animals.splice(4,5));

console.log(animals);

console.log(animals.splice(3));

*/


/*

// Adding & REPLACING elements

let laps = ["Lenovo","HP","MAC book"];
laps.splice(3,2,"Dell");
console.log(laps);

let mobiles = ["Motorola","Iqoo","Realme","Redmi"];

mobiles.splice(1,1,"Oppo");

console.log(mobiles);
*/



/*
// REVERSE METHOD

let a = [10,20,30];

a.reverse();
console.log(a);

*/


/*

// flat method ----> It merges inside arrays into single array

let animals = ["Dog","Cow","Cat",["Tiger","Lion","Cheetah"],["Elephant","Deer","Ziraffe"]];

console.log(animals.flat());

*/

