import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import '../Styles/Login.css';
import raytheontechnologieslogo1 from '../assets/raytheontechnologieslogo1.png';
import checkCircle from '../Feather Icons/checkCircle.svg';

function LoginFunction() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

function validateForm() {
    return username.length > 0 && password.length > 0;
  }

function handleSubmit(event) {
    event.preventDefault();

    fetch('http://localhost:5555', {
    method: "POST",
    body: JSON.stringify(this.state),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
}).then(
    (response) => (response.json())
    ).then((response) => {
        if (response.status === 'success'){
            alert("Login successful.");
            this.resetForm()
        }
        else if(response.status === 'fail'){
            alert("Login failed.")
        }
    })
  }

  return (
    <div className="Login">
      < br /> 

      <Container fluid>
          <div class="login-container">
        <br/>    
        
      <br/>
      <br/>
      
      <Form onSubmit={handleSubmit}>
      <Container>
        <Form.Group size="lg" controlId="username">
          <Form.Control
            autoFocus
            type="username"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br/>
        </Form.Group>
        </Container>
        <Container>
        <Form.Group size="lg" controlId="password">
          <Form.Control
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        </Container>
        <br/> 
        <Button block size="lg" 
        type="submit" 
        disabled={!validateForm()}>
          <img className="img-responsive" src={checkCircle} alt="Responsive image"/> Login with AD
        </Button>
      </Form>
      <br/>
      <br/>
        <div class="row">
          <p style={{textAlign: 'center'}}>
            Contact <a href = "tel:+123-456-7890">(123) 456-7890 </a> for assistance.
            </p>
        </div>
        </div>
        </Container>
        <br/>
    <p style={{textAlign: 'center'}}>
    Copyright 2021</p>
            <br />
            <br />
            <br /> 
            <br /> 
            <br />
    </div>
  );
}

export default LoginFunction; 
