import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <button onClick={() => handleEdit(todo.id)}>Edit</button>
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;

