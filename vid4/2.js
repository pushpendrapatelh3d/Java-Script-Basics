//working of loops in js

//for loop 
// for(let i=0;i<10;i++){
//     console.log(i);
// }

//while loop 

//let i= 0 ;
 
// while(i<10){
//     console.log(i);
//     i++;
// }


//do-while loop
// do{
//     console.log(i);
//     i++;
// }while;

let age=20;
if(age<18){
    console.log("Kid");
}
else if(age>=60){
    console.log("Old");
}
else{
    console.log("Young");
}


//logical operators

//&&(and) , ||(or) , !(not)




let a = "Rohit";
let b = "Mohit";
let c = a&&b;
console.log(c);//Mohit bcz it returns value of second varible if both inputs are true same behavior with the numbers means returns value of second variable


//in or operator it returns first value if  first value and will return second value if first value is false (0)

let d = a||b;
console.log(d);//O/P Rohit

//not  equal to operator "!="
console.log(a!=b);


