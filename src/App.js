import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Link to your CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import NavBar from './components/NavBar';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => setTodos([...todos, newTodo]);

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <Router>
        <NavBar />
        <div className="container">
          <h1>My To-Do List</h1>
          <Routes>
            <Route
              path="/"
              element={
                <TodoList 
                  todos={todos} 
                  toggleComplete={toggleComplete} // Ensure this is passed correctly
                  deleteTodo={deleteTodo} 
                />
              }
            />
            <Route
              path="/add"
              element={<AddTodo addTodo={addTodo} />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
