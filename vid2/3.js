//in javascript array is a non primitive data type and it is used to store multiple values in a single variable. It is an ordered collection of values and it can contain values of different data types. The typeof operator returns "object" for arrays because in JavaScript, arrays are a type of object and it is not any bug  like null

let arr = [50,90,"ram",true];
console.log(typeof arr);

let s = function sub(){
    console.log(Bye);
};

//
console.log( typeof sub);
//typeof the s is object but in output it shows function
console.log( typeof s);



//primitive data type is immutable means that their value cannot be changed once created . Operations that appear to modify a primitive actually create a new one . A variable holding a primitive stores the primitive's value directly 

//demonstration 

//once a was assingned value 10 it is assingned a memory in which 10 is stored 
let a = 10;
//when 20 was assigned as the value of a it is stored at new space in memory 
a = 20 ;
console.log(a);




//proof

let str = "Rohan";
str[0] = 'M';

//output is still Rohan as str is  immutable if you want to change you have to reassign the memory location of str 
console.log(str);


//non primitive data types are mutable 

let arr1 = [20,23,"Rohan"];
console.log(arr1);


arr1[0] = 14;
arr1[3] = 24;
console.log(arr1);


//members of the object can be accessed using following method 
let obj = {
    name:"Mohan",
    age:40
}
console.log(obj.name);

obj.age = 50;
console.log(obj);



let b = 10;
let c =b ;
c = 20;
console.log(b,c);// O/P : 10 20 

//but when same thing is done for an object we will observe both objects will point to the same memory location and using both objects we will be able to manipulate the  object' values
let obj1 = {
    name:"Rohan",
    age: 7
}

let obj2 = obj1;

obj2.name = "Ram";
console.log(obj1);//{ name: 'Ram', age: 7 }

//this was done because if the size of object is large the if we copy same ammount of the data which is large it can lead to memory overflow so instead of copying the data we just copy the reference of the object which is pointing to the same memory location and we can manipulate the data using both objects.

