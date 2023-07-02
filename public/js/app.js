document.addEventListener('DOMContentLoaded', () => {
    // Get a reference to the elements in the DOM
    const form = document.querySelector('#myForm');
    const input = document.querySelector('#myInput');
    const output = document.querySelector('#myOutput');
  
    // Attach an event listener to the form submit event
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Get the value from the input field
      const value = input.value;
  
      // Perform some processing or make API requests
      const processedValue = processValue(value);
  
      // Update the output element with the processed value
      output.textContent = processedValue;
    });
  
    // Function to process the value
    function processValue(value) {
      // Perform your custom logic here
      // ...
  
      // Return the processed value
      return value;
    }
  });
  