// set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// set session storage item
// sessionStorage.setItem('name', 'Beth');

// remove from storage
// localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // clear local storage
// localStorage.clear();

// console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;                 // Input field
  
    let tasks;                                                          // declare value
  
    if(localStorage.getItem('tasks') === null) {                        // if there is nothing in the input field, or entered before , create an array
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));                // put entry into array tasks with JSON format.
    }
  
    tasks.push(task);                                                   // Push it into array
  
    localStorage.setItem('tasks', JSON.stringify(tasks));               // Set it to local storage. 
  
    alert('Task saved');
  
    e.preventDefault();
  });
  
  const tasks = JSON.parse(localStorage.getItem('tasks'));              // Gets the data from local storage in JSON format.
  
  tasks.forEach(function(task){
    console.log(task);                                                  // Logs all the taks, has to be JSON format to use forEach on this. 
  });