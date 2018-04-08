// // Type conversion 

// let val;

// // number to sting 

// val = String(32); // 2
// val = String(2+2); // 1
// // Date to string
// val = String(new Date()); // number of characters in date

// // to string
// val = (5).toString(); // '5'
// val = (true).toString(); // 'true'

// // String to number
// val = Number(6);
// val = Number(true);  // 1
// val = Number(false); // 0
// val = Number (null); // 0
// val = Number('hello') // NaN

// val = parseInt('300'); // 300
// val = parseFloat('300.40'); // 300.2

// // Output 
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// console.log(val.toFixed(2));


const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2

//Math Objects

val = Math.PI;          // 3.14...
val = Math.E;           // 2.718..
val = Math.round(2.5);  // 3
val = Math.ceil(5.6)    // 6
val = Math.floor(5.6)   // 5
val = Math.sqrt(64)     // 8
val = Math.abs(-9)      // 9
val = Math.pow(8,2)     // 64
val = Math.min(2,78,54) // Return the lowest number, 2
val = Math.max(45,3,23) // 45 
val = Math.random()     // return a random number between 0.9 and 0.1

val = Math.floor(Math.random() * 20 + 1) // return a random number between 1 and 20


console.log(val);