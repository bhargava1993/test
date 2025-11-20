let city = ["Hyderabad", "Banglore", "Chennai", "Delhi", "Mumbai", "Kolkatta", "Vizag"];


for (let i = 0; i < city.length; i += 1) {
    // console.log(city[i]);
    if (city[i] === "Kolkatta") {
        console.log("Kolkatta is available");
    }
}



//                                 (or)


//  Using array method

console.log(city.includes("Hyderabad"));


//  output -----> true


console.log(city.includes("Chennai"));


// output -----> true


console.log(city.includes("Punjab"));


// output ----> false