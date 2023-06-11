import React, { useState, useEffect } from 'react';
import './TodoList.css'; // Import the CSS file for styling

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [editedTodos, setEditedTodos] = useState({});

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
    setEditedTodos((prevEditedTodos) => ({
      ...prevEditedTodos,
      [id]: true,
    }));
  };

  const handleSave = async (id, updatedTodo) => {
    try {
      await fetch(`http://localhost:9292/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTodo),
      });
      setEditedTodos((prevEditedTodos) => ({
        ...prevEditedTodos,
        [id]: false,
      }));
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const handleInputChange = (id, event) => {
    const { name, value } = event.target;
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            [name]: value,
          };
        }
        return todo;
      })
    );
  };

  return (
    <div>
      <h2>Todo List</h2>
      {todos.map((todo) => (
        <div key={todo.id}>
          {editedTodos[todo.id] ? (
            <div>
              <input
                type="text"
                name="title"
                value={todo.title}
                onChange={(event) => handleInputChange(todo.id, event)}
              />
              <input
                type="text"
                name="description"
                value={todo.description}
                onChange={(event) => handleInputChange(todo.id, event)}
              />
              <input
                type="date"
                name="date"
                value={todo.date}
                onChange={(event) => handleInputChange(todo.id, event)}
              />
              <input
                type="text"
                name="priority"
                value={todo.priority}
                onChange={(event) => handleInputChange(todo.id, event)}
              />
              <button onClick={() => handleSave(todo.id, todo)}>Save</button>
            </div>
          ) : (
            <div>
              <p>{todo.title}</p>
              <p>{todo.description}</p>
              <p>Date: {todo.date}</p>
              <p>Priority: {todo.priority}</p>
              <button onClick={() => handleEdit(todo.id)}>Edit</button>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
