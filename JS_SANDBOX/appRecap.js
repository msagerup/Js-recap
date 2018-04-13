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


// const name = 'John';
// const age = '31';
// const job = 'Web developer';
// const city = 'Oslo';

// let html;
//  // Without Template strings es5

// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>'


// // With templateStrings es6. Can use this to f.eks import dynamic data into Tables.

// function hello () {
//    return 'hello';
// }

// html = `
//    <ul>
//       <li>Name: ${name}</li>
//       <li>Job: ${job}</li>
//       <li>City: ${city}</li>
//       <li>Age: ${age}</li>
//       <li>${2+5}</li>
//       <li>${hello()}</li>
//       <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
//    </ul>
// `

// document.body.innerHTML = html


// // ARRAYS


// const numbers = [43, 456, 3, 5, 7, 7];
// const numbers2 = new Array(22,34,56,78);
// const fruit = ['Appple', 'Bannane', 'Orange'];
// const mixed = [22, 'String', true, undefined, null, {a:1, b:2}, new Date()];

// let val;

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

// // Find 
// function under50(num){
//    return num < 40;
// }

// val = numbers.find(under50)


// console.log(numbers)
// console.log(val)



// const person = {
//    firstName: 'Magnus',
//    lastName: 'Smith',
//    age: 37,
//    email: 'msagerup@kjdf.no',
//    hobbies: ['music', 'sports'],
//    address: {
//       city: 'Sarpsborg',
//       county: 'Oestfold'
//    },
//    getBirthYear: function() {
//       return 2018 - this.age;
//    }
// }

// let val;
// val = person;
// // Get spesific value
// val = person.age;             //30
// val = person.hobbies[0]       // music
// val = person.address.city     // Sarpsborg
// val = person.getBirthYear()   // 1981

// console.log(val)

// // Array of object
// const people = [
//    {
//       name: 'Arne',
//       age: 35
//    },
//    {
//       name: 'Petter',
//       age: 55
//    },
//    {
//       name: 'Hans',
//       age: 84
//    }
// ]
// // Loop trough Object.
// for(let i = 0; i < people.length; i++) {
//    console.log(people[i].name)               // Arne, Petter, Hans
// }

// Time

// let val;
// const today = new Date();
// let birthday = new Date('9/10/1981')

// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getMilliseconds();
// val = today.getTime();

// // Change dates

// birthday.setMonth(2);
// birthday.setDate(22);
// birthday.setFullYear(1948);
// birthday.setHours(3);
// // etc...

// console.log(birthday)
// console.log(val)

 const id = 100;
// if(id == 100) {
//    console.log('correct')
// } else {
//    console.log('not true')
// }

// if(id != 101) {
//    console.log('correct')
// } else {
//    console.log('not true')
// }

// // Equal to value and type, do this. ===
// if(id === 100) {
//    console.log('correct')
// } else {
//    console.log('not true')
// }

// Test if undefined


// if(typeof id !== 'undefined') {
//    console.log(`the ID is ${id}`)
// }else {
//    console.log('No ID')
// }

// Greater than or Less than
// if(id >= 200) {
//    console.log('correct')
// } else {
//    console.log('incorrect')
// // }

// const color = 'redd';

// // Else if

// if(color === 'red') {
//    console.log('color is red')
// } else if (color === 'blue') {
//    console.log('color is blue')
// } else {
//    console.log('color is not red or blue')
// }

// // Logical Operators
// const name = 'Magnus';
// const age = 17;
// // AND &&
// if (age > 0 && age < 12) {
//    console.log(`${name} is a child`)
// } else if (age >= 13 && age <= 19) {
//    console.log(`${name} is a teenager`)
// } else {
//    console.log(`${name} is an adult`)
// }
// // OR
// if(age < 16 || age > 65){
//    console.log(`${name} cannot run in race`)
// } else {
//    console.log('Race away')
// }


// // Ternary Operator 
// console.log(id === 100 ? 'correct' : 'incorrect');


// // SWITCES

// const color = 'redf';

// switch(color) {
//    case 'red':
//       console.log('color is red');
//       break;
//    case 'blue':
//       console.log('color is blue');
//       break;
//    default:
//       console.log('color is not red or blue')
// } 

// let day;

// switch(new Date().getDay()) {
//    case 0:
//       day = 'Sunday';
//       break;
//    case 1:
//       day = 'Monday';
//       break;
//    case 2:
//       day = 'Tuesday';
//       break;
//    case 3:
//       day = 'Wednesday';
//       break;
//    case 4:
//       day = 'Thursday';
//       break;
//    case 5:
//       day = 'Friday';
//       break;
//    case 6:
//       day = 'Saturday';
//       break;
//    default:
//       day = 'Huh? What day is this??'   
// }

// console.log(`Today is ${day}`)



// FUNCTIONS 
// This is with defaults

function greet(firstname = 'John', lastName = 'Doe') {
   //console.log('hello')
   return `Hello ${firstname} ${lastName}`
}

console.log(greet('Magnus'));

// Function Declorations

const square = function(x) {
   return x*x
}
console.log(square(4));

// IIFEs

// (function(name) {
//    console.log(`hello ${name}`)
// })('Brad');

// // Property Methods

// const todo = {
//    add: function(){
//       console.log('add to do')
//    },
//    edit: function(id = 'nothing') {
//       console.log(`Edit todo ${id}`)
//    }
// }

// todo.delete = function(){
//    console.log('Delete todo')
// }

// todo.add();
// todo.edit();
// todo.delete();

// console.log(todo)


// FOR LOOP
// for (let i = 0; i < 10; i++) {
//    if(i === 2) {
//       console.log('2 is my favorite number');
//       continue;
//    }
//    if(i === 5) {
//       console.log(i + ' is 5');
//       break;
//    }

//    console.log(i)
// }

// While Loop

// let i = 0;
// while(i < 10) {
//    console.log(`${i} is number`);
//    i++;
// }

// DO While

// let i = 100;

// do {
//    console.log(`number ${i}`);
//    i++;
// }

// while(i < 10);

// LOOP TROUGH ARRAY
const cars = ['Ford', 'Honda', 'Tesla'];
for (let i = 0; i < cars.length; i++) {
   console.log(cars[i])
}

// cars.forEach( function(car, index) {
//    console.log(car, index)
// });

// MAP

const users = [
   {id: 1, name: 'magnus'},
   {id: 2, name: 'Eimear'},
   {id: 3, name: 'Tore'}
];
// Maps returns a new array
const ids = users.map(function(user) {
   return user.name
})

console.log(ids)

// FOR IN LOOP
const user = {
   firstName: 'John',
   lastName: 'Doe',
   age: 40
}
// For IN loop
// Key is x , value is user[x]
for(let x in user) {
   console.log(`${x}: ${user[x]}`)
}

console.log(window)