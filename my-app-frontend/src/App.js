import React, { useState } from 'react';
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Todo 1', description: 'Description 1', date: '2023-06-08', priority: 'High' },
    { id: 2, title: 'Todo 2', description: 'Description 2', date: '2023-06-09', priority: 'Medium' },
    // Add more todo items here
  ]);

  const handleEdit = (id) => {
    // Logic to handle editing a todo item
    console.log('Edit', id);
  };

  const handleDelete = (id) => {
    // Logic to handle deleting a todo item
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (newTodo) => {
    // Logic to add a new todo item
    const updatedTodo = { ...newTodo, id: todos.length + 1 };
    setTodos([...todos, updatedTodo]);
  };

  return (
    <div>
      <h1>TASKMASTER</h1>
      <CreateTodo addTodo={addTodo} />
      <TodoList todos={todos} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
