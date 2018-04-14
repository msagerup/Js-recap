//Replace Element

const newHeadeing = document.createElement('h2');
// Add ID
newHeadeing.id = 'task-title';
// Add textNode
newHeadeing.appendChild(document.createTextNode('Task List'));

// Get the old heading 
const oldHeading = document.querySelector('#task-title');
// Parent
const cardAction = document.querySelector('.card-action');

// Replace

cardAction.replaceChild(newHeadeing, oldHeading) // Replaced the old child of Card-action wih the new heading replace must be placed on the parent
// console.log(oldHeading)
// console.log(newHeadeing)





// Remove element

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item

lis[0].remove()     // removes the first li element

// Remove child element 

list.removeChild(lis[3]) // Removes the 4 list

// Class and ATTR

const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0]

let val;

// Classes
val = link.className;
val = link.classList;           // return a DOMTokenList
val = link.classList[0]         // return the first class in  a DOMTokenList prototype
link.classList.add('test');     // adds class to a Node
link.classList.remove('test')   // Removed class 
val = link;

// Attributes
val = link.getAttribute('href') // return #
val = link.setAttribute('href', 'http://www.google.com')    // sets link to www.google.com
val = link.hasAttribute('href') // checks if it has this attribute, false or true
link.setAttribute('title', 'google') // set attribute
val = link;
link.removeAttribute('title');  // removes Attribute
val = link;


console.log(val)
