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
console.log(oldHeading)
console.log(newHeadeing)





// Remove element

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item

lis[0].remove()     // removes the first li element

// Remove child element 

list.removeChild(lis[3]) // Removes the 4 list
