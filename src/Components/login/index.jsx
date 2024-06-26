import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-top: 60px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #666;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const Message = styled.p`
  text-align: center;
  color: red;
  margin-top: 10px;
`;

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch('http://localhost:3002/users');
      const users = await response.json();

      const user = users.find(user => user.username === username && user.password === password);
      
      if (user) {
        setMessage('Login successful');
      } else {
        setMessage('Invalid username or password');
      }
    } catch (error) {
      setMessage('An error occurred');
      console.error('Fetch error:', error);
    }
  };

  return (
    <Container>
      <Title>Login</Title>
      <form onSubmit={handleLogin}>
        <div>
          <Label>
            Username:
            <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Label>
        </div>
        <div>
          <Label>
            Password:
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Label>
        </div>
        <Button type="submit">Login</Button>
      </form>
      {message && <Message>{message}</Message>}
    </Container>
  );
}

export default Login;
