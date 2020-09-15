import React, { useState } from 'react';
import axios from 'axios';
import { Link, Redirect} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import './login.css';
import { useAuth } from "../../context/auth"

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import NavMenu from '../general/NavMenu';

export default function LogIn() {
    const [validated, setValidated] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setAuthTokens } = useAuth();

    function postLogin() {
        // const form = event.currentTarget;
        // if (form.checkValidity() === false) {
            // console.log("Form invalid");
            // event.preventDefault();
            // event.stopPropagation();
        // }
        // setValidated(true);
        
        const loginInput = {
            login_email: email,
            login_password: password
        };

        axios.post('http://localhost:4040/login', loginInput)
        .then(result => {
            if (result.status === 200) {
                setAuthTokens(result.data);
                setLoggedIn(true);
            } else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        });
    }

    if (isLoggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div>
        <NavMenu />
        <Form noValidate validated={validated} onSubmit={postLogin} >
            <h1> Sign into Reiva</h1>
            <p>Enter your email and password to access your account</p>
            <Form.Row>
                <Form.Group as={Col} controlId="emailValidation">
                    <Form.Control
                        required
                        type="text"
                        className="login-email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">please enter a valid email</Form.Control.Feedback>
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
                    <Form.Control.Feedback type="invalid">please enter a valid password</Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Button onClick={postLogin}>Sign In</Button>
        </Form>
        <Link to="/signup">Don't have an account? Sign Up here</Link>
        { isError &&<div>Incorrect username or password provided</div> }
        </div>
    )
}