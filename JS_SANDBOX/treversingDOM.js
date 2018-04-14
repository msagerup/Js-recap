let val;

val = document;
val = document.all[2];
val = document.all.length;

console.log(val)



// let lis = document.getElementsByTagName('li');
// lis = Array.from(lis)
// console.log(lis)

// lis.forEach(function(li, index){
//     li.textContent = `${index} : hello`
// })

// Document selectorAll

// const items = document.querySelectorAll('ul.collection li.collection-item');
// console.log(items)

// items.forEach(function(li, index) {
//     li.innerHTML = 'hello'
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function (li, index) {
//     li.style.background = '#ccc'
// })
// liEven.forEach(function (li, index) {
//     li.style.background = '#ffc'
// 

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child Node
val = list.childNodes;

// Get Childre element nodes
val = list.children;
val = list.children[1].textContent = ' hello';
// Get Children of Children

val = list.children[3].children[0].innerHTML = 'link'; //  Changes the grand child of UL.

// First and last child

val = list.firstChild;
val = list.firstElementChild;

val = list.lastChild;
val = list.lastElementChild;

// Count child elements 
val = list.childElementCount;


// Get parent Node

val = listItem.parentNode;  // Ul
val = listItem.parentElement;  // Ul
val = listItem.parentElement.parentElement;  // Ul

// Get next sibling

val = listItem.nextSibling;     // return text
val = listItem.nextElementSibling.nextElementSibling;   // Moves down


// Get prev sibling

val = listItem.previousElementSibling;      // returns null because you're are the top

console.log(val)


