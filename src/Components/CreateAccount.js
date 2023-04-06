import React, {useState} from 'react'
import { Container, Col, Row, Button, Form  } from 'react-bootstrap'
import { createAccount } from '../Services/DataService';

export default function CreateAccount() {

 const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  const handleSubmit = () => {
    let userData = {

      Id: 0,

     Username,
     Password 
    }
    console.log(userData)
    createAccount(userData);
  }



  return (
    <Container>
      <Row>
        <Col className='mt-5' style={{backgroundColor: 'grey', borderRadius: 5, padding:50}} >
          <h1>Create Account</h1>
          <Form>
            <Form.Group className='mb-3' controlId='Username'>
              <Form.Label>Username</Form.Label>
              <Form.Control 
              type='text' 
              placeholder='Enter Username'
              onChange={({target: {value}}) => setUsername(value)}
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
            onClick={handleSubmit}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
