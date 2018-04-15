// Define UI Vards

const form = document.querySelector('#task-form');
const taskList  = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners

loadEventListeners();

function loadEventListeners() {
  // add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear All tasks
  clearBtn.addEventListener('click', clearTasks);
  // Filter Tasks
  filter.addEventListener('keyup', filterTasks);
}

// Add Task

function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create li elemet
  const li = document.createElement('li');
  // add Class
  li.className = 'collection-item';
  // Create text node and append to the li
  li.appendChild(document.createTextNode(taskInput.value))
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>'
  // append the link
  li.appendChild(link);

  // append the Li to the UL
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';
  e.preventDefault();
}

// Remove Task
function removeTask (e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    e.target.parentElement.parentElement.remove();
  }
}


// Clear Tasks 
function clearTasks() {
  // 2 solutions here 
  // Either :
  //taskList.innerHTML = '';
  // OR this faster option
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild)
  }
}


// Filter tasks 
function filterTasks (e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach
  (function (task) {
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  })
 
}