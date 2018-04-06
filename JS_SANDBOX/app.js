// Type conversion 

let val;

// number to sting 

val = String(32); // 2
val = String(2+2); // 1
// Date to string
val = String(new Date()); // number of characters in date

// to string
val = (5).toString(); // '5'
val = (true).toString(); // 'true'

// String to number
val = Number(6);
val = Number(true);  // 1
val = Number(false); // 0
val = Number (null); // 0
val = Number('hello') // NaN

val = parseInt('300'); // 300
val = parseFloat('300.40'); // 300.2

// Output 
console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed(2));
