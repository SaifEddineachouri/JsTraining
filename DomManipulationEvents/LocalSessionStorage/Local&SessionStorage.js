// Set local Storage Item
// localStorage.setItem('name','john');
// localStorage.setItem('age','30');

// // Set Session Storage Item
// sessionStorage.setItem('name','Beth');

// // remove from localStorage
// localStorage.removeItem('name');

// get from LocalStorage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');


// Clear local Storage
// localStorage.clear();

console.log(name,age);

document.querySelector('form').addEventListener('submit',function(e) {
    const task = document.getElementById('task').value;

    let tasks ;
    if(localStorage.getItem('tasks') === null){
        tasks = [] ;
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks',JSON.stringify(tasks));
    
    alert('Task Added');

    e.preventDefault();
});

tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(task => {
    console.log(task);
});