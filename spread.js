
// var salary = 10000;

// var bouns = salary;

// bouns = 20000;
// console.log("salary----",salary);

// console.log("bouns---",bouns);


// let salary = [10000, 20000, 30000];

// let bouns = salary;

// let bouns=[...salary]
// bouns.push(40000);

// console.log("salary----",salary);

// console.log("bouns---",bouns);

// let familyName= ["a","b","c","d"];

// let students = ["g","h","i","j"];

// let employees = ["j","k","l","m"];
// let result = ["a","b","c","d", "g","h","i","j"];

// let result=[...familyName, ...students, ...employees];



// for(let i=0; i < familyName.length;i++){
//     result.push(familyName[i])
// }

// for(let i=0; i < students.length;i++){
//     result.push(students[i])
// }

// for(let i=0; i < employees.length;i++){
//     result.push(employees[i])
// }

// function merge(array){

//     for(let i=0; i < array.length;i++){
//       result.push(array[i])
//     }   
//     // return true;
// }

// console.log(merge(familyName));
// console.log(merge(students));
// console.log(merge(employees));
// result.push(familyName[0]);
// result.push(familyName[1])
// result.push(familyName[2])
// result.push(familyName[3])
// result.push(students[0]);
// result.push(students[1])
// result.push(students[2])
// result.push(students[3])
// console.log("result-----",result);
// console.log("familyName-----",familyName);

// const studentName = "venu";
// studentName="sudheer";

// const studentNames=["venu","sudheer"];

// studentNames.push("zaiba");
// studentNames.push("bhargava");
// studentNames.pop();
// studentNames=[1,2,3];

// const empoloyeeNames=studentNames;

// console.log(studentNames);
// console.log(empoloyeeNames);



// let studentDetails={
// "name":"venu",
// "id":1,
// "collage":"jntu-v"
// }

// // "group"
// // "mca"
// studentDetails.group="mca";

// // total Marks = 365
// studentDetails["total Marks"]=365;



// let empoloyeeDetails={};

// empoloyeeDetails.name="venu";
// empoloyeeDetails.id=1;
// empoloyeeDetails.collage="jntu-v";
// empoloyeeDetails.group="mca";
// empoloyeeDetails["salary"]=100000;
// const keys = Object.keys(studentDetails);

// for(let i=0;i<keys.length;i++){

//     // console.log(keys[i]);
//     // console.log(studentDetails[keys[i]]);
//     empoloyeeDetails[keys[i]] = studentDetails[keys[i]];
// }

// empoloyeeDetails["age"]=23;

// let empoloyeeDetails = {...studentDetails}

// console.log("studentDetails----",studentDetails);
// console.log("empoloyeeDetails---",empoloyeeDetails);



// JSON.stringify()
// JSON.parse()

// let studentDetails={
// "name":"venu",
// "id":1,
// "collage":"jntu-v"
// }
// let studentDetails2 = JSON.parse(JSON.stringify(studentDetails));
// console.log("studentDetails----------",typeof studentDetails);
// console.log("studentDetails2=========",typeof studentDetails2);

// console.log(JSON.parse(studentDetails2));
// console.log("studentDetails2=========", studentDetails2);

// let salary = [10000, 20000, 30000];

// let salary2 = JSON.stringify(salary);

// array --> String

// string --> array (JSON.parse)

// console.log("salary----------",salary);
// console.log("salary2=========",salary2);

// console.log("parse---------",JSON.parse(salary2));

let studentDetails = {
    "name": "venu",
    "id": 1,
    "collage": "jntu-v",
    "marks": {
        "maths":40,
        "english":41
    }
}

let studentDetails2= JSON.parse(JSON.stringify({...studentDetails}));

studentDetails2["total marks"]=300;

studentDetails.marks.java="50";
studentDetails.marks.sql="60";

studentDetails2.marks.javascript= 70;

// console.log(studentDetails.marks);
console.log("studentDetails------",studentDetails);
console.log("studentDetails2---------",studentDetails2);