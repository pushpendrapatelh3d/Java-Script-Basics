//operators 
//arithmetic operators
// console.log(2+5);
// console.log(2-5);
// console.log(2*5);
// console.log(2/5);
// console.log(2%5);//returns remainder
// console.log(5**3);//returns 5*5*5


//assignment operators 
 
let x = 10;
let y = 20;
//x = x+y;
//x = x-y;
//x = x*y;
//x += y;
//x -= y;
//x %= y;


//comparison operators 
//console.log(x>y);
//console.log(x>=y);
//console.log(x<y);
//console.log(x<=y);
//console.log(x==y);
//console.log(x===y);//=== bolta ha ki pahle dono ka type check hoga or agar type same ha toh dono ki value check hogi


let z = '20';
let a = Number(z);
//console.log(typeof a); //output is "number"
//console.log(a); //output is "20";

//console.log(a==Z);
//when we compare a string with a number then first that 'string is converted into a number' and then that comparison is done 

let p = "123acc";
let b = Number(p);
console.log(b);//o/p is "NaN"(not a number)
console.log(typeof b);//O/P is "number" because typeof the NaN is number
console.log(0/0);//o/p  is "NaN"

let q = 10;
let c = String(q);
console.log(c);//O/P is 10(but it of type string)
console.log(typeof c);//O/P is "string"

console.log(Number(true));//O/P is 1
console.log(Number(false));//O/P is 0


console.log(Number(null));//O/P is 0
console.log(Number(undefined));//O/P is NaN

//who defines above given rules ??
//ECMAScript (ES) is the official specification or standard for a general-purpose scripting language, while JavaScript (JS) is the most popular implementation of that standard. The two terms are often used interchangeably in practice


console.log(String(null));//O/P is "null"
console.log(String(undefined));//O/P is "undefined"
console.log(String(true));//O/P is "true"
console.log(String(false));//O/P is "false"

console.log(typeof String(null));//O/P is "string"
console.log(typeof String(undefined));//O/P is "string"
console.log(typeof String(true));//O/P is "string"
console.log(typeof String(false));//O/P is "string"

console.log(Boolean(0));//O/P is false and for any value other than 0 it will be true



console.log(0.1+0.2);//O/P is  0.30000000000000004 why ?

//Why 0.+0.2 = 0.30000000000000004

//The computer thinks in Base 2 (binary), but we are giving it a problem in Base 10 (decimal). The translation is not perfect.


//Important rules

console.log(null==undefined);//O/P is "true"
//1:null is loosely equal to null

console.log(null===undefined);//O/P is faLSE BECAUSE THERE TYPES ARE DIFFERENT 


//>,<,>=,<= (null --> number , undefined --> NaN)

console.log(null==0);//ture
console.log(undefined<=null);//false

console.log("Rohit">"mohit");//O/P false
//every charater is compared to its corresponding charater

console.log(null==null);//true
console.log(NaN==NaN);//false
console.log(null=="");//false