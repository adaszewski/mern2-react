import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

function LoginView(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputData = (e) => {
    const { target } = e;
    const { name } = target;

    setFormData((data) => ({ ...data, [name]: target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axios.post('http://localhost:5000/api/users/login', formData).then((res) => {
      if (!res.data.error) {
        localStorage.setItem('user', JSON.stringify(res.data));
        props.setUser(res.data);
      }
    });
  };

  return (
    <Form className="w-60" onSubmit={handleSubmit}>
      {props.user && <Navigate to="/termcare/users" />}
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Login</Form.Label>
        <Form.Control
          name="username"
          type="text"
          placeholder="Login"
          value={formData.username}
          onChange={handleInputData}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Hasło</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Hasło"
          value={formData.password}
          onChange={handleInputData}
        />
      </Form.Group>
      <Button type="submit">Zaloguj</Button>
    </Form>
  );
}

export default LoginView;
