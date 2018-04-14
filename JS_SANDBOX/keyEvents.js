// TEXT EVENTS

const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const heading = document.querySelector('h5');

//  taskInput.value = '';
 console.log(taskInput)
//form.addEventListener('submit', runEvent);

taskInput.addEventListener('keydown', runEvent);

function runEvent(e) {
    
    
    // heading.innerText = e.target.value;
    console.log(e.target.value);
    console.log(`Event Type: ${e.type}`)
    // console.log(taskInput.value);

     e.preventDefault();
}