import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');
  const navigate = useNavigate();

    const handleSubmit = (element) => {
        element.preventDefault();
        if (text.trim() !== '') {
        addTodo({ id: Date.now(), text, completed: false });
        setText('');
        navigate('/');
        }
    };

  return (
    <div className="container mt-5">
      <h3>Add a New Todo</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Todo</Form.Label>
          <Form.Control
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your todo"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Todo
        </Button>
      </Form>
    </div>
  );
};

export default AddTodo;
