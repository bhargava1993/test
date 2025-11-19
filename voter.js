// Nested if–else: Checking Login Role

// Age + Citizenship Check

let age = 22;

// console.log( age >= 18);

let citizen = "hyd";

// console.log( citizen  === "bangalore");

   

if(age >= 18){
  console.log("this persion is elegiable to vote");
   if(citizen === "bangalore"){
        console.log("this persion is belongs to "+ citizen);
        console.log("this persion can vote");
    }else{
        console.log("this persion is not belongs to bangalore" );
    }

}else{
    console.log("age is less then 18 years");
}