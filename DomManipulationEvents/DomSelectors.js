// // document.getElementById()
// console.log(document.getElementById('task-title'));

// // Get things from the element 
// console.log(document.getElementById('task-title').id);
// // Also
// console.log(document.getElementById('task-title').className);

// const val = document.getElementById('task-title');
// // Change styling 
// val.style.background='#333';
// val.style.color='#fff';
// val.style.padding='5px';
// // document.getElementById('task-title').style.display='none';

// // Change content
// val.textContent = 'Task List';
// val.innerText='My Tasks';
// val.innerHTML ='<span style="color : red">Task List</span>'

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color='red';
document.querySelector('ul li').style.color='blue';

document.querySelector('li:last-child').style.color='orange';
document.querySelector('li:nth-child(3)').style.color='green';
document.querySelector('li:nth-child(4)').textContent='Hello World';
document.querySelector('li:nth-child(odd)').style.background='#ccc';
document.querySelector('li:nth-child(even)').style.background='#ddd';