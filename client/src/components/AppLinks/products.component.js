import React, { Component } from "react";
// import { Link } from 'react-router-dom';
// import axios from 'axios';

import "./products.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

class Products extends Component {
    render() {
        return (
            <div>
            <Jumbotron>
                <h1>Explore our App</h1>
                <p>
                    We offer a various ways to engage with this app, from
                    one of the links below, to the other one, or even the last link.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
            <CardDeck>
                <Card>
                    <Card.Header>Featured Product</Card.Header>
                    <Card.Body>
                        <Card.Title>Product one</Card.Title>
                        <Card.Text>
                            Here some info on this link/product, and how it works.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Updated today</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Header>Featured Product</Card.Header>
                    <Card.Body>
                        <Card.Title>Product two</Card.Title>
                        <Card.Text>
                        Here some info on this link/product, and how it works. 
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Browse site now</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Header>Featured Product</Card.Header>
                    <Card.Body>
                        <Card.Title>Product three</Card.Title>
                        <Card.Text>
                            Here some info on this link/product, and how it works.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Build your app now</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
            </div>
        )
    }
}
// ========================================
export default Products;