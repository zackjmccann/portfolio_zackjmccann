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
                    <h1>Welcome to Zack McCann's Portfolio</h1>
                    <hr  style={{
                        color: '#000000',
                        backgroundColor: '#000000',
                        height: 0,
                        borderColor : '#F8F8FF'
                        }}>
                    </hr>
                    <p>
                        This is an introduction to my portfolio, and the work I have taught myself
                    </p>
                </Col>
                <Col md={{ span: 5, offset: 1 }}>
                    <p className="jumbo-sup-text">
                        Almost everything compiled in this application I taught myself over the last
                        several months. I am focused on my continued growth in full stack web development,
                        and building web applications.
                        <br></br>
                        <br></br>
                        The portfolio is constantly growing and under maintence as I continue to learn.
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