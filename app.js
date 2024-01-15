document.addEventListener('DOMContentLoaded', (event) => {
    // Selecting elements
    const addButton = document.querySelector(".todo__add");
    const inputField = document.querySelector('.todo__input input');
    const list = document.querySelector('.list');
  
    // Event listeners
    addButton.addEventListener('click', handleAddEvent);
    list.addEventListener('click', handleDeleteEvent);
  
    // Function to add a new todo item
    function addTodoItem(todoText) {
      const newTodo = document.createElement('li');
      newTodo.innerHTML = `
        ${todoText} 
        <button class="todo__delete" aria-label="Delete task">x</button>`;
      list.appendChild(newTodo);
    }
  
    // Function to handle the add event
    function handleAddEvent() {
      const todoText = inputField.value.trim();
      if (todoText) {
        addTodoItem(todoText);
        inputField.value = ''; // Clear the input field
      }
    }
  
    // Function to handle delete event
    function handleDeleteEvent(event) {
      if (event.target.classList.contains('todo__delete')) {
        event.target.parentElement.remove();
      }
    }
  });
  