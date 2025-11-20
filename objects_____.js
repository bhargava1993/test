// let details = {
//     "Name": "Venukumar",
//     "Age": "22",
//     "Village": "Kadiri"
// }

// console.log(details);

// console.log(typeof details);


// console.log(Object.keys(details));


// details.fatherName = "Adinarayana";
// details.friend = "Jagan";

// console.log(details);


// delete details.friend;
// console.log(details);


// delete details.fatherName;
// console.log(details);


// details["Father Name"] = "Adinarayana";
// details["Friend Name"] = "Jagan";
// console.log(details);


// delete details["Father Name"];
// delete details["Friend Name"];
// console.log(details);


// console.log(Object.keys(details));

// let keys = Object.keys(details);
// console.log(keys);

// let details = {
//     "Name": "Venukumar",
//     "Age": "22",
//     "Village": "Kadiri"
// }

// //  printing Keys only 

// // console.log(Object.keys(details));



// let keys = Object.keys(details);
// console.log(keys);

// for (let i = 0; i < keys.length; i++) {
//     // console.log(keys[i]);
//     // console.log(details[keys[i]]);
//     console.log(keys[i] + "=" + details[keys[i]]);

// }


// //  Printing Key and values

// for (let i = 0; i < keys.length; i++) {
//     console.log(keys[i]);                      //--- > It prints Keys
//     console.log(details[keys[i]]);             //--- > It prints values
//     console.log(keys[i] + "=" + details[keys[i]]);    // ----> It prints keys and values 
// }






// let names = ["sudher", "Liam", "Olivia", "venu", "Noah", "Emma", "sudher", "venu"];

// let obj = {};

// for (let i = 0; i < names.length; i++) {

//     //    console.log(names[i]);

//     if (obj[names[i]]) {
//         obj[names[i]] = obj[names[i]] + 1;
//     } else {
//         obj[names[i]] = 1;
//     }

// }

// console.log(obj);

// console.log(Object.keys(obj));


//  to count how many times each fruit will appear in an array
//  To print unique fruit names 

// let fruit = ["Mango", "Pomogranite", "custurd apple", "Pineapple", "Banana", "Grapes", "Mango", "Banana", "Pineapple"];

// obj = {};

// //  in objects fruits will bw the keys and counts will be the values

// for (let i = 0; i < fruit.length; i++) {
//     if (obj[fruit[i]]) {
//         obj[fruit[i]] = obj[fruit[i]] + 1;
//     } else {
//         obj[fruit[i]] = 1;
//     }
// }

// console.log(obj);

// console.log(Object.keys(obj));


let city = ["Hyderabad", "Punjab", "Chennai", "Banglore", "Punjab", "Hyderabad", "Chennai", "Chennai", "Hyderabad", "Delhi", "Banglore", "Mumbai"];

obj = {};

for (let i = 0; i < city.length; i++) {
    if (obj[city[i]]) {
        obj[city[i]] = obj[city[i]] + 1;
    } else {
        obj[city[i]] = 1;
    }
}
console.log(obj);

console.log(Object.keys(obj));

