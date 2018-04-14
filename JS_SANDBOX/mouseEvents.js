// Mouse Events

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click 
//clearBtn.addEventListener('click', runEvent);

// DoubleClick
// clearBtn.addEventListener('dblclick', runEvent);

//Mouse Down, (click and hold)
//clearBtn.addEventListener('mousedown', runEvent);

// Mouse up, fires when mouse press is released
//clearBtn.addEventListener('mouseup', runEvent);

 // Mouse enter and leave

// card.addEventListener('mouseenter', runEvent);
// card.addEventListener('mouseleave', runEvent);

// // Mouse Out
// card.addEventListener('mouseout', runEvent)     // This does not trigger if you hover over a child element of the target. only when leaving the parent

// Mouse Move

card.addEventListener('mousemove', runEvent);

// Event Handler

function runEvent(e) {
    console.log(`Event Type: ${e.type}`);
    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`     // changes the bg color when mouse is moved, tracks x and y 
                                                                                    // and sets in to a rgb value
}
