// Get references to the text area and button elements
const textArea = document.getElementById('myTextarea');
const button = document.getElementById('myButton');

// Define a function to execute when the button is clicked
function handleClick() {
  // Get the value from the text area
  const color = textArea.value;

  // Change the background color of the webpage
  document.body.style.backgroundColor = color;
}

// Add an event listener to the button that triggers the handleClick function
button.addEventListener('click', handleClick);