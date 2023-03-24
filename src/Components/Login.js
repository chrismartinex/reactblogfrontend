import React, { useState } from "react";
import { Container, Col, Row, Button, Form } from "react-bootstrap";

export default function Login() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = () => {
    let userData = {
      Username,
      Password,
    };
    console.log(userData);
  };

  return (
    <Container>
      <Row>
        <Col
          className='mt-5'
          style={{ backgroundColor: "grey", borderRadius: 5, padding: 50 }}
        >
          <h1>Login</h1>
          <Form>
            <Form.Group className='mb-3' controlId='Username'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Username'
                onChange={({ target: { value } }) => setUsername(value)}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='Password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              variant='primary'
              type='submit'
              onClick={handleSubmit}
            >
              Login
            </Button>
          </Form>
          <h4>Don't Have an account?</h4>
          <Button>Create Account</Button>
        </Col>
      </Row>
    </Container>
  );
}
