// Events

// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//     console.log('clicked');
//     e.preventDefault(); // prevents default behavior
// })

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick (e) {
    e.preventDefault();
    //console.log('clicked')

    let val;
    val = e;

    // Element target element
    val = e.target;
    val = e.target.className;           // Gets Classes of target, when clicked
    val = e.target.classList;           // Gets classes of target , when clicked in DOMTokenList format

    e.target.innerText = 'hello'        // Changes the inner text of what was clicked on , when clicked. 

    // Event type
    val = e.type;

    // Timestamp
    val = e.timeStamp;
    // Cordinates event relative to the window
    val = e.clientY;
    val = e.clientX;

    // Cordinates event relative to the element itself
    val = e.offsetY;
    val = e.offsetX;

    console.log(val)
}