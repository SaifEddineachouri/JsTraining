let val ;
const  list =  document.querySelector('ul.collection');
const listItem =  document.querySelector('li.collection-item:first-child');

val = listItem;
val = list ;


// Get Child Nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node 
// 8 - Comment
// 9 - Document itself
// 10 - Doctype 

// Get Children element Nodes
val = list.children;
val = list.children[0];
val = list.children[1].textContent='Hello';


// children of children
val = list.children[3].children[0];
list.children[3].children[0].id = "test-link";

// first child
val = list.firstChild ;
val = list.firstElementChild;
// last child
val = list.lastChild ;
val = list.lastElementChild;
// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;


// Get Next Sibling 
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;

// Get Previous Sibling 
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);