let names=[ "sudher","Liam", "Olivia",  "venu", "Noah", "Emma","sudher","venu"];
// console.log(names.indexOf("bhargava"));

// console.log([...new Set(names)]);
let uniqueArray=[]

for(let i=0; i<names.length; i++){

    let exsits = uniqueArray.includes(names[i]);

    if(!exsits){
    uniqueArray.push(names[i]);
    }

}

console.log("uniqueArray----",uniqueArray);