import React, { useState } from 'react';

const CreateTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { title, description };

    fetch('http://localhost:9292/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('New todo created:', data);
        // Reset the input fields
        setTitle('');
        setDescription('');
      })
      .catch((error) => {
        console.error('Error creating todo:', error);
      });
  };

  return (
    <div>
      <h2>Create Todo</h2>
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
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateTodo;

