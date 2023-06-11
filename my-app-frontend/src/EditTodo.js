import React, { useState } from 'react';

const EditTodo = ({ todo }) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a PUT request to update the todo using the updated title and description values
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditTodo;
