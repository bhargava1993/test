// destructing: de-structure
// --------------

// let studentName="venu";

// let groupOfNames=["Venu","Bhargva","Sudheer"];

// let [studentName,,mcaStudentName]= ["Venu","Bhargva","Sudheer"];

// let [,employeeName,]= ["Venu","Bhargva","Sudheer"];

// let {id, name, occupation }={
//     "id":1,
//     "name":"bhargava",
//     "occupation":"se"
// }

// let id = obj.id;
// let name = obj["name"];
// let occupation = obj["occupation"];

// console.log(id);
// console.log(name);
// console.log(occupation);

// let studentName=groupOfNames[0];
// let employeeName= groupOfNames[1];
// let mcaStudentName = groupOfNames[2];

// console.log(studentName);
// console.log(employeeName);
// console.log(mcaStudentName);


// // var studentName=[];
//  let studentName;
//     let employeeName;
//     let mcaStudentName;

// for(let i=0; i<groupOfNames.length;i++){

//     console.log(i);
//         // console.log("i--------------",studentName.push(groupOfNames[i]));
//     // groupOfNames[i];

//     // let studentName;
//     // let employeeName;
//     // let mcaStudentName;

//     //Block scope
//     if(i == 0){
//      studentName=groupOfNames[i];
//     // console.log(studentName);
//     }else if( i == 1){
//      employeeName= groupOfNames[i];
//     // console.log(employeeName);
//     }else if(i == 2){
//      mcaStudentName = groupOfNames[i];
//     //  console.log(mcaStudentName);
//     }




//     // console.log(studentName); //venu           //venu
//     // console.log(employeeName); //bhargava     // venu
//     // console.log(mcaStudentName); // sudheer  //venu


// }



//rest operator: ...

//  let groupOfNames=["Venu","Bhargva","Sudheer","zaiba","shruthi"];

//  let [studentName,, lawys, ...groupOfNames] =["Venu","Bhargva","Sudheer","zaiba","shruthi"];

//  console.log(studentName);
//  console.log(lawys);
//  console.log(groupOfNames)

//  let [employeeName, ...remaningValues] = groupOfNames;
// console.log(employeeName);
// console.log(remaningValues);


// let {id, name, occupation }={
//     "id":1,
//     "name":"bhargava",
//     "occupation":"se"
// }

// let {id , ...remaningObjValues} = {
//     "id":1,
//     "name":"bhargava",
//     "occupation":"se"
// }


//  console.log(id);
//  console.log(remaningObjValues);



function occupationFn(...occupation) {
    // let [b_occupation,v_occupation] = occupation;
    console.log(occupation);
    // console.log(b_occupation);
    // console.log(v_occupation);
    // console.log(s_occupation);
    // console.log(z_occupation);
    return;
}

let arrayOfocupation=["softwareEngeneer", "mern-developer","backend","softwareArchitect"];
occupationFn(arrayOfocupation);