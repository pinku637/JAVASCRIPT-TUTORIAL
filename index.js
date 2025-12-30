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
// Object.freeze(jsuser)
// console.log(jsuser)

// jsuser.greeting= function(){
//     console.log("Hey Js User! How are you.")
// }
// console.log(jsuser.greeting); //wrong method
// console.log(jsuser.greeting()) //right method

