import React, { useState } from 'react';
import './EditTodo.css';

const EditTodo = ({ todo }) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [date, setDate] = useState(todo.date);
  const [priority, setPriority] = useState(todo.priority);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a PUT request to update the todo using the updated values
  };

  return (
    <div>
      <h2>Edit Todo</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Date:
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          Priority:
          <input
            type="text"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditTodo;
