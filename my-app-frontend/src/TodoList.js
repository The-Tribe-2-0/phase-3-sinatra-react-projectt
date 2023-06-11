import React, { useState, useEffect } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch('http://localhost:9292/todos');
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:9292/todos/${id}`, {
        method: 'DELETE',
      });
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleEdit = (id) => {
    // Implement edit functionality here
    console.log('Edit todo with id:', id);
  };

  return (
    <div>
      <h2>Todo List</h2>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.title}</p>
          <button onClick={() => handleEdit(todo.id)}>Edit</button>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;