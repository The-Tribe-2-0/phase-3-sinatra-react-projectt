import React from 'react';

const TodoItem = ({ todo, onEdit, onDelete }) => {
  const handleEdit = () => {
    onEdit(todo.id);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <p>Date: {todo.date}</p>
      <p>Priority: {todo.priority}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
