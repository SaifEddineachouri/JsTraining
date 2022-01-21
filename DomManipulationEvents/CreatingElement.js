// Create the Element 
const li = document.createElement('li');
// Add Class
li.className="collection-item";
// Add Id
li.id="new-item";
// Add Attribute
li.setAttribute('title','New Item');
// Create text Node and Append
li.appendChild(document.createTextNode('Hello World'));

// Create a new link element
const link = document.createElement('a');

// Add Classes 
link.className="delete-item secondary-content";

// Add an icon
link.innerHTML ='<i class="fa fa-remove"></i>';

// Append link  into  li 
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);



console.log(li);