const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const Heading = document.querySelector('h5');
const Select = document.querySelector('select');


// clear Input
taskInput.value='';

// form.addEventListener('submit',runEvent);

// // Key Down
// taskInput.addEventListener('keydown',runEvent);
// Key Up
// taskInput.addEventListener('keyup',runEvent);
// Key Press
// taskInput.addEventListener('keypress',runEvent);
// Focus
// taskInput.addEventListener('focus',runEvent);
// Blur
// taskInput.addEventListener('blur',runEvent);
// Cut
// taskInput.addEventListener('cut',runEvent);
// Paste
// taskInput.addEventListener('paste',runEvent)
// Input
// taskInput.addEventListener('input',runEvent);

// Change
Select.addEventListener('change',runEvent);

function runEvent(event) {
    
    console.log(`Event type ${event.type}`);
    
    console.log(event.target.value);

    // Heading.innerText = event.target.value ;
    // // Get Input Value
    // console.log(taskInput.value);
    
    // event.preventDefault();
}