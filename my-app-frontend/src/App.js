import React from 'react';
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';
import './App.css'

const App = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <CreateTodo />
      <TodoList />
    </div>
  );
};

export default App;


