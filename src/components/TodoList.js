import React from 'react';

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          <span className="todo-text">{todo.text}</span>
          <div className="button-container">
            <button className="btn btn-complete" onClick={() => toggleComplete(todo.id)}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button className="btn btn-delete" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
