const clearBtn = document.querySelector('.clear-tasks');

const card =  document.querySelector('.card');

const Heading = document.querySelector('h5');

// // Click
// clearBtn.addEventListener('click',runEvent);

// // DoubleClick
// clearBtn.addEventListener('dblclick',runEvent);

// // MouseDown
// clearBtn.addEventListener('mousedown',runEvent);

// // MouseUp
// clearBtn.addEventListener('mouseup',runEvent);

// // Mouseenter
// card.addEventListener('mouseenter',runEvent);

// // MouseLeave
// card.addEventListener('mouseleave',runEvent);

// // MouseOver
// card.addEventListener('mouseover',runEvent);

// // MouseOut
// card.addEventListener('mouseout',runEvent);

// Mouse Move
card.addEventListener('mousemove',runEvent);

// Event Handler
function  runEvent(e){
    console.log(`Event type ${e.type}`);

    Heading.textContent = `MouseX : ${e.offsetX} MouseY : ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
}