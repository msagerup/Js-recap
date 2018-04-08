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


// const num1 = 100;
// const num2 = 50;
// let val;

// // Simple math with numbers
// val = num1 + num2

// //Math Objects

// val = Math.PI;          // 3.14...
// val = Math.E;           // 2.718..
// val = Math.round(2.5);  // 3
// val = Math.ceil(5.6)    // 6
// val = Math.floor(5.6)   // 5
// val = Math.sqrt(64)     // 8
// val = Math.abs(-9)      // 9
// val = Math.pow(8,2)     // 64
// val = Math.min(2,78,54) // Return the lowest number, 2
// val = Math.max(45,3,23) // 45 
// val = Math.random()     // return a random number between 0.9 and 0.1

// val = Math.floor(Math.random() * 20 + 1) // return a random number between 1 and 20


// console.log(val);

// const firstName = "Magnus";
// const lastName = "Sagerup";
// const age = 36;

// let val;
// val = `${firstName} ${lastName}`

// // Append

// val = 'Brad ';
// val += 'Travesy'

// val = `Hello, my name is ${firstName} and i am ${age} years old`
// val = firstName.length;

// // concat 

// val = firstName.concat(' ', lastName)

// val = firstName[0]                  //M

// // Index of

// val = firstName.indexOf('a')        // 1
// val = firstName.lastIndexOf('a')
// val = firstName.charAt('2');        //g


const name = 'John';
const age = '31';
const job = 'Web developer';
const city = 'Oslo';

let html;
 // Without Template strings es5

html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>'


// With templateStrings es6. Can use this to f.eks import dynamic data into Tables.

function hello () {
   return 'hello';
}

html = `
   <ul>
      <li>Name: ${name}</li>
      <li>Job: ${job}</li>
      <li>City: ${city}</li>
      <li>Age: ${age}</li>
      <li>${2+5}</li>
      <li>${hello()}</li>
      <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
   </ul>
`

document.body.innerHTML = html


// ARRAYS


const numbers = [43, 456, 3, 5, 7, 7];
const numbers2 = new Array(22,34,56,78);
const fruit = ['Appple', 'Bannane', 'Orange'];
const mixed = [22, 'String', true, undefined, null, {a:1, b:2}, new Date()];

let val;

// Get array lenght

// val = numbers.length;
// val = Array.isArray(numbers)
// // Get single value
// val = numbers[0];       //43
// // Insert into array
// numbers[2] = 100;
// // Find Index of value
// val = numbers.indexOf(36);    //if -1 its not there

// MUTATING ARRAY
// // add to end
// numbers.push(250)
// // Add to beginning
// numbers.unshift(300)
// // Take off from end
// numbers.pop()
// // Take off from front 
// numbers.shift();
// // Splice values
// numbers.splice(1,3)  // Set start and end from where you want to take out from the array
// // Reverse the array
// numbers.reverse();

// Concatenating arrays
// val = numbers.concat(numbers2)

// // Sorting arrays
// val = fruit.sort()
// val = numbers.sort()

// // User the compare function for sort
// val = numbers.sort(function(a, b) {
//    return a - b;
// })

// Reverse sort 

// val = numbers.sort(function(a, b) {
//    return b - a;
// })

// Find 
function under50(num){
   return num < 40;
}

val = numbers.find(under50)


console.log(numbers)
console.log(val)























