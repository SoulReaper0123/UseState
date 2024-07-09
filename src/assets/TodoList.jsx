import React, { useState } from 'react';

function TodoList() {
  // State ang variables
  const [textarea, setTextarea] = useState(''); // kung asa mag input og text
  const [todoList, setTodoList] = useState([]); // array kay e store ang gipang add na todolist
  const [editText, setEditText] = useState(null); // null kay wa pata kahibaw unsa e edit

  // Function to input a text in the textarea
  const handleText = (event) => {
    setTextarea(event.target.value);
  }

  // Function to add or update a todo item
  const addTodo = () => {
    if (editText !== null) {
      // If editText naay content or not equal to null means way sud
      const updatedTodoList = [...todoList]; // mag create a copy element sa existing todoList
      updatedTodoList[editText] = textarea; // Update the item sa editText with the new textarea value
      setTodoList(updatedTodoList); // Set the state to the updated copy
      setEditText(null); // Reset or clear the content sa editText after update, e set to null
    } else if (textarea.trim() !== '') {
      // If adding a new item and the trimmed textarea is not empty
      setTodoList([...todoList, textarea]); // Add the new item to the todoList
    }

    setTextarea(''); // e clear the input after adding or updating
  }

  // Function to edit the textarea na set na
  const editTodo = (index) => {
    setTextarea(todoList[index]); // Set the textarea value to the content of the item being edited
    setEditText(index); // Set the edit index to the index of the item being edited
  }

  // Function to delete a todo item
  const deleteTodoItem = (index) => {
    const updatedTodoList = [...todoList]; //  Create a copy or spreads the element sa existing todoList
    updatedTodoList.splice(index, 1); // Remove the item at the specified index
    setTodoList(updatedTodoList); // Set the state to the updated copy
    setEditText(null); // Reset or clear the content sa editText after update, e set to null
  }

  // Render method
  return (
    <div>
      <p>TODO LIST</p>
      {/* Textarea for input */}
      <textarea value={textarea} onChange={handleText} placeholder="Enter Text"></textarea>
      <br></br>
      {/* Button for adding or updating todo item */}
      <button onClick={addTodo}>{editText !== null ? 'Update Todo List' : 'Add Todo List'}</button>
      {/* List of todo items */}
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>
            {item}
            {/* Button to edit todo item */}
            <button onClick={() => editTodo(index)}>Edit</button>
            {/* Button to delete todo item */}
            <button onClick={() => deleteTodoItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
