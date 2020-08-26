import React, { Component } from "react";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class Home extends Component {
    render() {
        return (
            <Jumbotron className="home-jumbo">
            <Row>
                <Col md={6}>
                    <h1>Home Page for Mobile Application</h1>
                    <hr  style={{
                        color: '#000000',
                        backgroundColor: '#000000',
                        height: 0,
                        borderColor : '#F8F8FF'
                        }}>
                    </hr>
                    <p>
                        Supplemental text to header, further providing app info
                    </p>
                </Col>
                <Col md={{ span: 5, offset: 1 }}>
                    <p className="jumbo-sup-text">
                        Here is some text to further describe this section of the app.
                        Outlining what the about is about, the poeple that built in, and 
                        houw in can improve the users life.
                        <br></br>
                        <br></br>
                        The hook, to really pull them in.
                        <br></br>
                        <br></br>
                        <Button className="jumbo-btn">Get Started</Button>
                    </p>
                </Col>
            </Row>
            </Jumbotron>
        )
    }
}
// ========================================
export default Home;