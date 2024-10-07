/////////////////////////////////////////////////let , var ,const
///////////////////////////////////////// 1- redeclare  ====> var
/*let x = 10;
let x = 4;
console.log(x);*/
//////////////////////////////////////2- reassign  =====> var ,let
 /* var a = 3;
let c = 5;
a = 9;
c = 8;
c = 0;
console.log(c)  
const i=9 ;
i=7;*/

//////////////////////////////////////////////3-hosting =====> var
/*console.log(n);
var n = 8; 
//////////////
 console.log(w);
let w = 8; */
////////////////////////////////////////////3-function scope ===>var
/*function test() {
    var x = 10;
    console.log(x); // 10
}
test()
console.log(x); // ReferenceError: x is not defined*/
//////////////////////////////////////////4-block scope ===>let const
 /* if (true) {
    let a = 20;
    const b = 30;
    console.log(a); // 20
    console.log(b); // 30
}
  console.log(a); // ReferenceError: a is not defined
  console.log(b); // ReferenceError: b is not defined
*/
/*function myFunction() {
    var x = 10; //  
    if (true) {
        var x = 20;
        let y = 30;
        const z = 40;
        console.log(x); // 20
        console.log(y); // 30
        console.log(z); // 40
    }

    console.log(x);
     // console.log(y);  
     //console.log(z);  
}
myFunction();
console.log(x);  
*/
///////////////////////////////////spreated operator ...
//1 
 /*
var arr1=[1,2,3,4];
console.log(...arr1); */
//2 concate
 /* var arr1=[1,2,3,4];
var arr2=[ 5,6];
var resalt=[...arr1, ...arr2 , ...[0,10,11]]
console.log(resalt)  */
////////////get some of nambers
/*function sum(...numbers){
    let result=0;
    for(let i=0; i<numbers.length;i++){
        result += numbers[i]
    }
    console.log(result)
}
sum(2,4 ,5,7,1,1,1)*/
/////////////////////////////////////////destructuring
/* let arr=[1,2,7,4,];
let [x,y,z,w]=arr;
console.log(z); */ 
//in object
  /*var person={
    name:"ahmed",
    age:23 ,
    favColor :"red"
};
const {name ,age ,color}=person;
console.log(name); */
////////////////////////////////////////Default Parameters
/*function calAge(age=0){
    console.log(age*365)
}
calAge(5); */
/////////////////////////////////////////Template Literals
/* const name = 'mona';
const greeting = `Hello, ${name}!`;
console.log(greeting); */
///////////////////////////////////////////Arrow Functions
//function exprestion 
/* const multiply=function(a,b) {
    console.log(a*b);
}
multiply(2, 5); */

/* const multiply = (a, b) =>{ a * b} 
console.log(multiply(2, 5)); */ 
//////////////////////////////////////////////////Array API
//find
const users = [
    { name: 'Rehab', age: 23 },
    { name: 'Ali', age: 30 },
    { name: 'Sara', age: 27 }
];

const user = users.find(user => user.age > 25);

console.log(user);  

//filter
/* const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);  
*/
//map
 /*const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);

console.log(doubled);   
console.log(numbers); 
*/
//some
/*const numbers = [1,3, 5, 7];
const hasEvenNumber = numbers.some(num => num % 2 === 0);

console.log(hasEvenNumber);*/ 

//every
/*const numbers = [2, 4, 6, 8];
const allEven = numbers.every(num => num % 2 === 0);

console.log(allEven);   */

//forEach
/*const numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num * 2));*/



