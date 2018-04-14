// Creating elements.

const li = document.createElement('li');

// Add class 
li.className = 'collection-item';

// Add ID = 
li.id = 'new-id'

// Add Title
li.setAttribute('title', 'New Item');

// Add text node and append
li.appendChild(document.createTextNode('Hello World'));

// Create new link element

const link = document.createElement('a');
link.className = 'delete-item secondary-content';
// Add item HTML 
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link to li
li.appendChild(link);

// append li as child to Ul

document.querySelector('ul.collection').appendChild(li);

console.log(li)
