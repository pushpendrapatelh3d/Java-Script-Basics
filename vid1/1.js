//variable creation 
// variable created using this method can be updated
let name = "Rohan";
let age = 45;

console.log(name,age);

const  tag = "neo";
// variable created using this method cannot be updated
//tag = "leo";

console.log(tag);

//old method of variable creation 
//same variable can be created more than 1 time thats why this method of variable creation was replace but it still works 
 
var n = 40;
var n = 50;
console.log(n);

//another  problem was it does  not respects the scope

if(true){
    var m = 15;
}

console.log(m);

