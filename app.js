// Wait until the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', (event) => {

    // Select DOM elements: the add button, the input field, and the list container
    const addButton = document.querySelector(".todo__add");
    const inputField = document.querySelector('.todo__input input');
    const list = document.querySelector('.list');
  
    // Attach event listeners
    // When the add button is clicked, execute handleAddEvent
    addButton.addEventListener('click', handleAddEvent);
    // Use event delegation for delete buttons in the list
    list.addEventListener('click', handleDeleteEvent);
  
    // Define a function to add a new todo item to the list
    function addTodoItem(todoText) {
      // Create a new list item (li) element
      const newTodo = document.createElement('li');
      // Set its HTML content including the todo text and a delete button
      newTodo.innerHTML = `
        ${todoText} 
        <button class="todo__delete" aria-label="Delete task">x</button>`;
      // Append the newly created list item to the list
      list.appendChild(newTodo);
    }
  
    // Define a function to handle the add event
    function handleAddEvent() {
      // Get the input text and remove any leading/trailing whitespace
      const todoText = inputField.value.trim();
      // Check if the input text is not empty
      if (todoText) {
        // Add the todo item to the list
        addTodoItem(todoText);
        // Clear the input field after adding the item
        inputField.value = '';
      }
    }
  
    // Define a function to handle delete events
    function handleDeleteEvent(event) {
      // Check if the clicked element is a delete button
      if (event.target.classList.contains('todo__delete')) {
        // Remove the parent list item of the delete button
        event.target.parentElement.remove();
      }
    }
});
