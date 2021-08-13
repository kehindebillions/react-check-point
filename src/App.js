import React from 'react'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Col, Row, Button, Form, Card} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Form>
            <Row>
              <Col md>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Example@email.com" />
                <Form.Text className="text-muted">We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="keep me logged in" />
                </Form.Group>
              </Col>
          </Row>
          <Button variant="primary" type="submit">login</Button>
        </Form>
        <Card className='mb-3' style={{color:'#000',margin:"20px"}}>
          <Card.Header style={{color:'red'}}>LATEST NEWS</Card.Header>
          <Card.Body>
            <Card.Title>Special Offer Available</Card.Title>
            <Card.Text>
            Be confident
Your first step is to remain and project confidence throughout the entirety of your appeal. The more confident you are, the more convincing your arguments are going to sound, and the more powerful you’re going to appear. Confidence is easy to fake and hard to distinguish, so don’t be afraid if you don’t feel confident — just act confident, and that will probably be enough.

A study by the University of Leicester found that “the single significant behavioral difference between persuaders and persuadees was in the expression of confidence.”

Confidence subtly implies that you’re already convinced you’re going to get what you want, which subtly influences the other party to give it to you. Just be careful not to overextend your exhibition of confidence, or you’ll run the risk of turning people off with arrogance.
            </Card.Text>
            <Button variant="primary">visit page</Button>
          </Card.Body>
        </Card>
      </Container>
      </header>
    </div>
  );
}

export default App;
