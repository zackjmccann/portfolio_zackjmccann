import React, { useState } from 'react';
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css";
import './signup.css';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function SignUpForm() {
  const [validated, setValidated] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      console.log('Invalid');
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    if (form.checkValidity() === true) {
      console.log('valid');
      event.preventDefault();
      console.log(`Submitting First Name: ${firstName}`);
      console.log(`Submitting Last Name: ${lastName}`);
      console.log(`Submitting Email: ${email}`);
      console.log(`Submitting Password: ${password}`);

      const newProfile = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
      };

      axios.post('http://localhost:4040/signup', newProfile)
            .then(res => console.log(res.data));
    }
  };
  
  return (
    <Form noValidate method="POST" action="" validated={validated} onSubmit={handleSubmit}>
      <h1>Start Learning about Zack Today</h1>
      <p>Feel free to enter your information below, and reach out to Zack. This portfolio links
        to a MongoDB tier accessible to only Zack. Try and break the app, and provide feeback! It's welcomed.</p>
      <Form.Row>
        <Form.Group as={Col} controlId="firstNameValidation">
            <Form.Control
                required
                type="text"
                className="first-name"
                placeholder="First name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">please enter your first name </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="lastNameValidation">
            <Form.Control
                required
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">please enter your last name </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="emailValidation">
            <Form.Control
                required
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">please enter a valid email address</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="passwordValidation">
            <Form.Control
                required
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">please enter a password</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Button type="submit">Sign Up</Button>
    </Form>
  );
}