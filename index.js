"use strict";//treat all code as a newer version
"We are using node.js";
"J.S is a dynamically typed language."

"Data types and ECMA standards";

// console.log(typeof "Satya")
// console.log(typeof null)
// console.log(typeof 25)
// number-> 2 to power 53
// bigint
// string->""
// boolean->true/false, null->standalone
// undefined-> 
// Symbol-> unique

// let acEmail="mybotcodes@gmail.com"
// let acPass="Satya1234"
// let acCity="Angul"
// const name="Satya"
// console.log(acEmail)
// console.log(name)


// console.log(5
//     +
//     7
// ) //code readability;

"table formation";

// let name="satya"
// let age=18
// let city="angul"
// console.table([name,age,city])

"obj Declaration";

// let student={
//     acEmail:"mybotcodes@gmail.com",
//     acPass:"Satya1234",
//     acCity:"Angul",
//     name:"Satya",
// }
// console.log(student)

"Data Type Conversion";

// let score= 46
// console.log(typeof score)
// console.log(typeof(score))

// let newScore=String(score)
// console.log(typeof newScore)
// console.log(newScore)

// let new1score=Number(newScore)
// console.log(typeof new1score)
// console.log(new1score)


// let value= "03BSC2509"
// let loginvalue=Boolean(value)
// console.log(loginvalue);
//1->true,0->false,"03bsc"->String

"Why string to number convesion is confusing ?";

// let num=5
// let negnum=-num
// console.log(num)
// console.log(negnum)
// console.log(2+5)

// let str1="Satyabrata"
// let str2="Pradhan"
// console.log(str1+" "+str2)

// let year=2025
// console.log("22-12-"+year)
// console.log("Satya"+" "+1*4+5)
// console.log(+"")
// console.log(+1)

"prefix or postfix";
// let value=5
// console.log(value++)
// console.log(value)
// console.log(++value)

"comparison of data types in js";

// console.log("02">1);
// console.log("2">1);
//automaticaly converted into number

// console.log(null>=0);
// console.log(null==0);
// console.log(null<0);
// console.log(undefined==0);
// console.log(undefined>0);
// console.log(undefined<0);

"strict check of data type";
// console.log("2"==2)  //converts data type 
// console.log("2"===2)  //checks data type also

"Data types in java script";

//PRIMITIVE DATA TYPE (7 Types):-

//1.String (ex-"Satya")
//2.Number (1,2,3,...) (ex- const value=100)
//3.Boolean (True/false) (ex-1>0 o.p= true)
//4.null (Empty Value)
//5.undefined (not defined)
//6.Symbol (ex-const id=Symbol('1'); const newid=Symbol('1'); console.log(id===newid); O.P= false)
//7.Bigint (used in case of large value) (ex- 231563547898n)

//REFERENCE DATA TYPE (Non-Primitive):-

//1.Array
//2.Object
//3.Functions

//Js is dynamically or statically typed ?

"function creation";

// const satya= function() {
//     console.log("SATYABRATA PRADHAN");
// }
// satya()

"stack and heap memory";

//Stack Memory:-primitive type
//This memory gives copy of a variable

//Heap Memory- non-primitive  type
//This memory gives reference of a variable

// ex1-
// let myName= "Pinku"
// let Name= myName
// Name="Satya"
// console.log(Name)

// ex2-
// let user1={
//     Name: "Satyabrata",
//     Roll: "03BSC2509",
//     Age: 18
// }

// let user2=user1
// user2.Name= "Sudhanshu" (object access)
// console.log(user1)
// console.log(user2)

"Strings in Java Script."

//string is written in single/double coutes (" ").

//String concatination methods
// const name="Satya"
// const middleName="brata"
// const surName=" Pradhan"

// "METHOD-1";
// console.log(name+middleName+surName)

// "METHOD-2";
// console.log(`Hello My Name Is ${name}${middleName} ${surName}`)
// syntax:(`${variable_name}`)

//String declaration methods

// const uid= new String('03BSC2509')
// console.log(typeof uid)
// console.log(uid)

//String Methods
// const uid= new String('03BSC2509')
// console.log(uid.length)
// console.log(uid.toLowerCase()) makes small letter
// console.log(uid.toUpperCase()) makes capital
// console.log(uid.charAt(2)) checks which value is present at index 2
// console.log(uid.indexOf('B')) checks index number of element
// console.log(uid.trim()) removes whitespace from first or last
// console.log(uid.includes('2509')) checks whether the element is present or not and returns boolean value
// console.log(uid.split('S')) splits the string at the given element and returns array
// console.log(uid.replace('03','09')) replaces the old value with new value
// console.log(uid.concat(' is my roll no.')) adds the new string at last
// console.log(uid.startsWith('0')) checks whether string starts with given element or not and returns boolean value
// console.log(uid.endsWith('9')) checks whether string ends with given element or not and returns boolean value
// console.log(uid.repeat(3)) repeats the string for given number of times
// console.log(uid.valueOf()) returns primitive value of string object
// console.log(typeof uid.valueOf()) checks the data type of primitive value
// console.log(uid.lastIndexOf('S')) checks the last index number of given element
// console.log(uid.search('B')) checks the index number of given element
// const newUid= uid.substring(1,4) //slicing to make substring
// console.log(newUid)
// const newUid1= uid.slice(3,5) //slicing
// const newUid2= uid.slice(-5,-1) //slicing using negative index
// console.log()

// let value="Satya"
// value[0]="P" // trying to change string element
// console.log(value)


// Here value of variable doesn't changed because string does not changed. 
// Strings are immutable.
// The functions are returns new value in case of string but does not changes the original value.
// String elements are stored index number wise.

"Number and maths in javascript"; 

//-----------Numbers--------------\\

// const score=new Number(58)
// console.log(score.toFixed(2))  //toFixed() function adds number of values after decimal like 50.00

// const number= 523.326789
// console.log(number.toPrecision(4)) //Gives precision to the given number of values like here 523.

// const hundreds= 5000000
// console.log(hundreds.toLocaleString('en-IN')); //adds cymbols to count numbers unde local language like here the output is 50,00,000.

//there are many number properties, like
//MAX_VALUE
//MIN_VALUE
//POSITIVE_INFINITY
//NEGATIVE_INFINITY
//NaN
//we can check them in console by typing Number. and then we will get all properties.

//--------------Maths----------------\\

// console.log(Math.abs(-4)) //provides absolute value
// console.log(Math.round(1.7)); //round up math values
// console.log(Math.ceil(4.3)); //gives highest absolute value
// console.log(Math.floor(4.3)); //gives lowest absolute value
// console.log(Math.min(4,5,6,9)); //gives minmum value in an array
// console.log(Math.max(4,5,6,9)); //gives max value in an  array
// console.log(Math.random()); //gives random value betwen 0-1.00
// console.log(Math.floor(Math.random()*10)+1); 

// //ex-
// let Max=50
// let Min=30
// console.log(Math.floor(Math.random()*(Max-Min+1)+Min))

"Date and time in depth Java Script";

// Dates
// months are 0 based index(0-11)
// months in year are 1 based index(1-12)
// days are 1 based index(1-31)
// days in week are 0 based index(0-6)

// let date=new Date()
// console.log(date) //current date and time
// console.log(date.toString()) //date in string format
// console.log(date.toDateString()) //only date
// console.log(date.toTimeString()) //only time
// console.log(date.toISOString()) //date in ISO format
// console.log(date.toLocaleString()) //date in local format
// console.log(date.toLocaleDateString()) //date in local date format
// console.log(date.toLocaleTimeString()) //time in local format
// date.toLocaleDateString('en-IN') //date in Indian format
// console.log(date.toUTCString()) //date in UTC format

// GET METHODS

// console.log(date.getFullYear()) //current year
// console.log(date.getMonth()) //current month(0-11)
// console.log(date.getDate()) //current date(1-31)
// console.log(date.getDay()) //current day(0-6)
// console.log(date.getHours()) //current hours(0-23)
// console.log(date.getMinutes()) //current minutes(0-59)
// console.log(date.getSeconds()) //current seconds(0-59)
// console.log(date.getMilliseconds()) //current milliseconds(0-999)
// console.log(date.getTime()) //time in milliseconds since 1 Jan 1970
// console.log(typeof date) //object

//we can also create date object by passing date string or date components
// let date1=new Date('2023-12-25')
// let date2=new Date(2023,11,25,10,30,0,0) //year,month(0-11),date,hours,minutes,seconds,milliseconds
// console.log(date1)
// console.log(date1.toString())

// let mytimestamp= Date.now() //gives current timestamp in milliseconds
// console.log(mytimestamp)
// console.log(date1.getTime()) //gives timestamp of date1 in milliseconds
// console.log(Math.floor(mytimestamp/1000)) //gives timestamp in seconds
// `${Math.floor(mytimestamp/1000)}` //gives timestamp in string format

"Arrays in Java Script";

//  const myarray= ["Satya","Pinku","Pradhan"]
//  myarray.push("Brata") //used to add value
//  myarray.pop() //used to delete last value 
//  myarray.unshift("03BSC2509") //adds value at starting of an array
//  myarray.shift()  //removes first value
// console.log(myarray.includes("Brata"))
// console.log(myarray.indexOf("Pinku"))

// const array= myarray.join() //makes a array into a string
// console.log(myarray)
// console.log(array)
// console.log(typeof array)

//slice and splice

const fruits= ["Banana","Orange","Apple","Mango","Pineapple"]

// const citrus= fruits.slice(1,4) //slicing an array(start index, end index)
// console.log(citrus) //does not change the original array

// fruits.splice(2,1,"Grapes","Watermelon") //splice(start index, number of elements to delete, elements to add)
// console.log(fruits) //chnages the original array

// console.log(fruits.length) //length of an array
// console.log(Array.isArray(fruits)) //checks whether it is array or not

// const newfruits= fruits.concat(["Kiwi","Papaya"]) //merging two arrays
// console.log(newfruits)
// console.log(fruits) //original array remains same

// const students= ["Satya","Pinku","Pradhan"]
// const scores= [85,90,95]
// console.log(...students,...scores) //spread operator

// const reversedfruits= fruits.reverse() //reverses the array
// console.log(reversedfruits)

// const sortedfruits= fruits.sort() //sorts the array in ascending order
// console.log(sortedfruits)

// const numarray= [5,2,8,1,4]
// numarray.sort((a,b)=>a-b) //sorts the array in ascending order
// console.log(numarray)

// numarray.sort((a,b)=>b-a) //sorts the array in descending order
// console.log(numarray)

// const fruitstring= "Banana,Orange,Apple,Mango,Pineapple"
// const fruitarray= fruitstring.split(",") //splits the string into an array
// console.log(fruitarray)

// const numbers= [1,2,[3,4,5],88,99,[6,7,8]]
// const flatnumbers= numbers.flat(Infinity) //flattens the array
// console.log(flatnumbers)

// console.log(Array.from("SATYA,PINKU")) //creates an array from a string

// console.log(Array.from({name:"Satya",age:18})) //creates an array from an object;
// output will be an array of undefined values with length equal to number of properties in object
// keys of object are not considered in array creation.

// let a=9
// let b=4
// console.log(Array.of(a,b)) //creates an array from given values

"Object";

//single ton
//object literals

// const jsuser={
//     name: "Satyabrata",
//     age: 18,
//     adress: "Nuakheta",
//     email: "satyabratapradhan88438@gmail.com",
//     isLoggedIn: false,
//     lastloginday: ["Monday","Tuesday"],
//     [Symbol]: "$"
// }

// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser[Symbol])
// Object.freeze(jsuser) //now the obj cannot be changed
// console.log(jsuser)

// jsuser.greeting= function(){
//     console.log("Hey Js User! How are you.")
// }
// console.log(jsuser.greeting); //wrong method
// console.log(jsuser.greeting()) //right method

// jsuser.greeting2 = function() {
//     console.log(`${this.name}, what are you doing now ?`)
// }
// console.log(jsuser.greeting2())

// const tinderUser= new Object()
// console.log(tinderUser)

// const tinderUser={}
// tinderUser.id="03BSC2509"
// tinderUser.name="SATYA"
// tinderUser.isloggedIn= false
//console.log(tinderUser);

// const regularUser= {
//     email:"satyabratapradhan88438@gmail.com",
//     name:{
//         firstName:"Satya",
//         middleName:"brata",
//         surname:"Pradhan"
//     }
// }
// console.log(regularUser.name.firstName);

// const obj1={1:"A",2:"B"}
// const obj2={1:"a",2:"b"}
//const obj3={obj1,obj2}
//const obj3= Object.assign({},obj1,obj2);
//const obj3={...obj1,...obj2}
//console.log(obj3);

//console.log(Object.entries(obj1)) //Gives separated Datas
//console.log(Object.keys(obj1));   //Gives Keys of Object
//console.log(Object.values(obj1)); //Gives Values of object
//console.log(jsuser.hasOwnProperty('name')); //Tells the value is present or not in the object

"Object de-structure and JSON API intro "; //18

// const Creative={
//     name:"Creative Techno College",
//     Courses:"B.Sc.C,BCA,BBA",
//     place: "Baluakata,Angul",
//     pincode:759122
// }

// console.log(Creative.name); //prints indirects

// const {name}=Creative       //brings the value into front so that we can print it easily
// console.log(name)
// const {name:n}=Creative        //changes the key value to use it shortly but originalyy it was not changed
// console.log(n);

"Function In JS";

//function declaration

"Ex:-1";
// function satya(){
//     console.log("Name:Satyabrata Pradhan,Age:18,Adress:Nuakheta");
// }
// satya() //Function Call

"Ex:-2";
// function sum(Num1,Num2){     //Here Num1 and Num2 are the parameters
//     console.log(Num1+Num2);
// }
// const result=sum(1,2)
// console.log(result) //Output= Undefined because it only prints but doesn't returns the result
"Ex:-3";
// function sum(Num1,Num2){     //Here Num1 and Num2 are the parameters
//     let result=Num1+Num2
//     return result
// }
// const result=sum(5,6)
// console.log(result);
"Ex:-4";
// function sum(Num1,Num2){     //Here Num1 and Num2 are the parameters
//     return Num1+Num2
// }
// const result=sum(5,6)
// console.log(result);
"Ex:-5";
// function login(username){
//     return `${username} logged in succesfuly`
// }
// console.log(login("satya"));
"Ex:-6";
// function loginUserMessage(username ){
//     if(username==="undefined"){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Satya"))

"function with object";

"Ex:1";
// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,300,400,600))


"Ex:2";
// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,400,600))

"Ex:3";
// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
// }
// handleObject({
//     username: "Satya",
//     prices: 199
// })

"Ex:4";
// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));

"Global and local scope in javascript ";

//var c = 300
// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     console.log("INNER: ", a);
// }

// console.log(a);
// console.log(b);
// console.log(c);


// function one(){
//     const username = "Satya"
//     function two(){
//         const website = "study"
//         console.log(username);
//     }
//     //console.log(website);
//     two()
// }
// one()

// if (true) {
//     const username = "Satya"
//     if (username === "Satya") {
//         const website = " Insta"
//         //console.log(username + website);
//     }
//     //console.log(username);
// }
//console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))

// function addone(num){
//     return num + 1
// }
// addone(5)


// addTwo(5)
// const addTwo = function(num){
//     return num + 2
// }

"THIS and arrow function";

"Ex:1";
// const user = {
//     username: "Satya",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         //console.log(this);
//     }

// }
// user.username = "sam"
// user.welcomeMessage()

// user.welcomeMessage()

// console.log(this);

// function sk(){
//     let username = "SATYA"
//     console.log(this.username);
// }
// sk()

"Arrow Function";

//Syntax: (Parameters/Arguments)=>{}
"Ex:"
// const name=(fname)=>{
//     return `${fname},Your full name is Satyabrata Pradhan`;
// }
// console.log(name("satya"));
 
// const chai = ()=> {
//     let username = "SATYA"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }
// chai()

"Type:1";
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

"Type:2";
// const addTwo = (num1, num2) => ( num1 + num2 )
// console.log(addTwo(5,6));


// const addTwo = (num1, num2) => ({username: "hitesh"})
// console.log(addTwo());
// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

"Immediately Invoked Function Expressions IIFE";

// (function chai(){
//     console.log(`DB CONNECTED`);
// })();

// ( (name) => {
//     console.log(`DB CONNECTED TO ${name}`);
// } )('SATYA')

"How does javascript execute code + call stack?";

// What is an Execution Context?
// Answer:-
// Imagine an Execution Context as a box or a container where your JavaScript code runs. Whenever you write code, it doesn't just run in a vacuum; it runs inside one of these boxes.
// The box contains two specific things:
// Memory (Variable Environment): Where variables and functions are stored.
// Code (Thread of Execution): Where code is executed line-by-line.

// The Two Types of "Boxes"
"1.Global Execution Context (GEC):-";

// This is the default box. As soon as you run a JS file, this box is created.
// It creates the window object (in browsers) and the this keyword.
// There is only one Global Execution Context in your entire program.

"2.Function Execution Context (FEC):-";
// Whenever you call (invoke) a function, a new box is created specifically for that function.
// If you call a function 3 times, you get 3 different Function Execution Contexts.

// How It Works (The 2 Phases)
// When an Execution Context is created, it happens in two phases. Let's look at this code:

// var x = 10;
// function sayHi() {
//     console.log("Hi");
// }

// Phase 1: Memory Creation (The "Skimming" Phase)

// Before running a single line of code, JavaScript skims through your code to allocate memory.
// It finds var x and stores it in memory as undefined. (This is why Hoisting exists!).
// It finds function sayHi and stores the entire function code in memory.

// "Phase 2: Code Execution (The Running Phase)"

// Now, JavaScript runs through the code line-by-line.
// It sees var x = 10; and updates the memory for x from undefined to 10.
// It executes function calls if it finds them.

"Visual Diagram: The Call Stack";

// JavaScript uses a Call Stack to manage these boxes. It stacks them on top of each other.
// Step 1: The Global Context is at the bottom.
// Step 2: When you call a function, a Function Context is stacked on top.
// Step 3: When the function finishes, its box is removed (popped) from the stack.

//                    {Summary Table}
// Term:-                                   Meaning:-
// Global Context                           The main environment created when your script starts.
// Function Context                         temporary environment created whenever a function is called.
// Call Stack                               The system that keeps track of which "Context" is currently running.

"Control Flow";

// if
// const isUserloggedIn = true
// const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }
// console.log("Execute");

// <, >, <=, >=, ==,!=
// ===(Checks value and data type also), !==(Checks if value and data type both are not equal)

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`); //error due to local scope

"Ex:-1";
// const balance = 1000
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");
// }

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2==2) {
//     console.log("Allow to buy course");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged in");
// }

"switch case";

//SYNTAX:

// switch (key) {
//     case value1:
//         break;
//     case value2:
//         break;
//     default:
//         break;
// }

"Ex:-1";

// const month = "march"
// switch (month) {
//     case "jan":
//         console.log("January");
//         break;
//     case "feb":
//         console.log("feb");
//         break;
//     case "march":
//         console.log("march");
//         break;
//     case "april":
//         console.log("april");
//         break;
//     case "may":
//         console.log("may");
//         break;
//     case "june":
//         console.log("june");
//         break;
//     case "july":
//         console.log("july");
//         break;
//     case "august":
//         console.log("august");;
//         break;
//     case "september":
//         console.log("september");
//         break;
//     case "october":
//         console.log("october");
//         break;
//     case "november":
//         console.log("november");
//         break;
//     case "december":
//         console.log("december");
//         break;
//     default:
//         console.log("default case match");
//         break;
// }

"Truthy and Falsy values in Java Script";

// const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
//  "0", 'false', " ", [], {}, function(){}

"Ex:-";
// let userEmail = []
// if (userEmail.length > 0) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }
"Ex:-";
// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null,undefined

// let val1;
// val1 = 5 ?? 10 //Answer=5
// val1 = 0 ?? 15 //Answer=0
// val1 = "" ?? "Hello" //Answer=""
// val1 = false ?? true //Answer=false
// val1 = null ?? 10 //Answer=10
// val1 = null ?? 10 ?? 20 //Answer=10
// val1 = undefined ?? 15 //Answer=15
// console.log(val1);
"Ternary Operator";

// Syntax:
// condition ? true : false

"Ex:-"
// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

"Ex:-"
// const age = 18
// age >= 18 ? console.log("You can vote") : console.log("You cannot vote")


"Loops in Java Script";

"for loop";
"Ex:-1";
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best number");
//     }
//     console.log(element);
// }
"Ex:-2";
// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//    for (let j = 1; j <= 10; j++) {
//     console.log(`Inner loop value ${j} and outr loop ${i}`);
//     console.log(i + '*' + j + ' = ' + i*j );
//    } 
// }
"Ex:-3";
//let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//        console.log(element);
// }


"break and continue";
"Ex:-1";
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
// }
"Ex:-2";
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         continue
//     }
//    console.log(`Value of i is ${index}`);
// }


"while loop";
"Ex:-1";
// let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

"Ex:-2";
// let myArray = ['flash', "batman", "superman"]
// let arr = 0
// while (arr < myArray.length) {
//     console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1
// }


"do while loop";
"Ex:-1";
// let score = 11
// do {
//     console.log(`Score is ${score}`);
//     score++
// } while (score <= 10);

"Ex:-2";
// let arrindex = 0
// do {
//     console.log(`Value is ${myArray[arrindex]}`);
//     arrindex++
// } while (arrindex < myArray.length);

"High Order Array loops";

// for of

// ["", "", ""]
// [{}, {}, {}]
"Ex:-1";
// const arr = [1, 2, 3, 4, 5]
// for (const i of arr) {
//     console.log(i);
// }
"Ex:-2";
// const myString = "Hello World"
// for (const char of myString) {
//     console.log(char);
// }
"Ex:-3";
// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }


"Maps";
//sequential data structure stores data in key value pair and duplicates are not allowed in keys.

"Ex:-1";
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")
// console.log(map);
// for (const [key, value] of map) {
//       console.log(key, ':-', value);
// }
"Ex:-2";
// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }
//shows error because object is not iterable directly.
//we have to convert object into map to make it iterable.
"Ex:-3";
// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }
// const myObjectMap = new Map(Object.entries(myObject))
// for (const [key, value] of myObjectMap) {
//     console.log(key, ':-', value);
// }

"for in loop";

"Ex:-1";
// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }
// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

"Ex:-2";
// const programming = ["js", "rb", "py", "java", "cpp"]
// for (const key in programming) {
//     console.log(programming[key]);
// }

"Ex:-3";
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")  

//error cannot use for in loop directly on map
// for (const key in map) {
//     console.log(key);
// }

//correct method
// for (const key of map.keys()) {
//     console.log(key);
// }

"forEach loop";

"Ex:-1";
// const myArray = ['flash', "batman", "superman"]
// myArray.forEach( (element, index) => {
//     console.log(`Element is ${element} and index is ${index}`);
// } )
"Ex:-2";
// const coding = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach( function (val){
//     console.log(val);
// } )
"Ex:-3";
// coding.forEach( (item) => {
//     console.log(item);
// } )
"Ex:-4";
// const coding = ["js", "ruby", "java", "python", "cpp"]
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)
"Ex:-5";
// const coding = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )
"Ex:-6";
// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
// ]

// myCoding.forEach( (item) => {  
//     console.log(item.languageName);
// } )

"Filter map and reduce in Java Script";

// const coding = ["js", "ruby", "java", "python", "cpp"]

"Ex:-1";
// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// } )
// console.log(values);
"Ex:-2";
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )
// console.log(newNums);
"Ex:-3";
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )
// console.log(newNums);

"Ex:-4";
// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];
//let userBooks = books.filter( (bk) => bk.genre === 'History')
//   userBooks = books.filter( (bk) => { 
//     return bk.publish >= 1995 && bk.genre === "History"
// })

//let userBooks= books.filter( (books) => books.publish === 1987 && books.genre === "Fiction" )
//console.log(userBooks);

"Ex:-5";
// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10})

// const newNums = myNumbers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)

// console.log(newNums);

"Ex:-6";
const myNums = [1, 2, 3]
//1
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

//2
// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
// console.log(myTotal);

//4
// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     },
// ]
// const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
// console.log(priceToPay);

"DOM introduction in javascript";

//DOM= Document Object Model
//Dom.html file is attached separately.
