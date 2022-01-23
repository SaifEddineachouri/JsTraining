// Replace Element

// Create Element 
const newHeading =  document.createElement('h2');

// Add Id
newHeading.id='task-title';

// New text Node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old Heading
const oldHeading = document.getElementById('task-title');

// Parent 
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading,oldHeading);

// Remove Element
const lis =  document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child Element
list.removeChild(lis[2]);

// Classes & Attributes
const firstLi = document.querySelector('li:first-child');
const link =  firstLi.children[0];

let val ;
// Classes
val = link.className;
val = link.classList;
link.classList.add('test');
link.classList.remove('test');

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href','http://google.com');
link.setAttribute('title','google');
// val = link.hasAttribute('title');
// link.removeAttribute('title');

val = link ;
console.log(val);

