import React, { useState } from "react";

function Mycomponent() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [text, setText] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState(''); 

  const handleInputChange = (e) => {
    setText(e.target.value);
  }

  const handleComment = (e) => {
    setComment(e.target.value);
  }

  function handleNameChange(event) {
    setName(event.target.value)
  }

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  }

  const addTodoItem = () => {
    if (comment.trim() !== '') {
      setTodoList([...todoList, comment]);
      setComment('');
    }
  }

  const deleteTodoItem = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1);
    setTodoList(updatedTodoList);
  }

  const handleColorChange = (e) => {
    setBackgroundColor(e.target.value);
  }

  return (
    <div>
      <p>COUNTER</p>
      <p>{quantity}</p>
      <button onClick={incrementQuantity}>Increment +</button>

      <p>CONTROLLED INPUT FIELD</p>
      <input value={name} onChange={handleNameChange} placeholder="Enter Characters" />
      <p>CHARACTER COUNTER</p>
      <textarea value={text} onChange={handleInputChange} placeholder="Enter Text"></textarea>
      <p>Number of Characters: {text.length}</p>
      <p>TODO LIST</p>
      <textarea value={comment} onChange={handleComment} placeholder="Enter Text"></textarea>
      <ul>
      <button onClick={addTodoItem}>Add Todo List</button>
        {todoList.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTodoItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
      
      <p>COLOR SWITCHER</p>
      <p>Select Background Color: </p>
      <select value={backgroundColor} onChange={handleColorChange}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
      <div
        style={{
          width: "200px",
          height: "50px",
          backgroundColor: backgroundColor,
          margin: "10px",
        }}
      >
        {/* Your content goes here */}
      </div>
    </div>
  );
}

export default Mycomponent
