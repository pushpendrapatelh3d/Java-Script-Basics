//data types

// primitive data types 

// number ,string ,boolean ,undefined ,null ,bigint ,symbol

// number 
let a = 10;
let b = 20.34;
console.log(a,b);

// string 
let c = "Monster is coming";
let d = "Nalon";
console.log(c,d);

// boolean 
let login = true;
let f = false;
console.log(login, f);

//undefined;
let user;
console.log(user);
//undefined variable cannot be defined using const keyword because in undefined a variable has no specific value during declaration and const keyword based variables are iniatilized once during declaration 

//bigint
let num = 146461465757158n;
console.log(num);

//null

let weather = null;
console.log(weather);

// Symbol - used for unique value creation
const ide = Symbol("id");
console.log(ide);


// Non primitive data types

// array , object , fuction


//array 
let arr = [50,90,"ram",true];
console.log(arr);

//object 
let obj = {
    name: "Rohan",
    account:12345,
    age:22,
    category:'obc' 
}
console.log(obj);

function add(){
    console.log("Hello");
}
add();

//in javascript we can store a function in a variable
// in javascript we can also store a function in an array or object

let s = function sub(){
    console.log(Bye);
};
console.log(s);

//in javascript typeof operator is used to find the data type of a variable or value
console.log(typeof s);


let neo = null;
console.log(typeof neo); // it will return object because in javascript null is considered as an object but it is actually a primitive data type and it is a bug in javascript which is not fixed yet as it considered as an object because of legacy reasons and it is not recommended to use null as an object in javascript.



