import React, { Component } from "react";
import './BottomLinks.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
import data from "../data";

import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function BottomLink(props) {
    return (
        <a className="bottomLink" href={props.handel}>
            {props.linkName}
        </a>
    )
} 

class BottomLinksFooter extends Component {

    renderBottomLink(i) {
        return (
          <BottomLink
            handel={i.url}
            linkName={i.label}
          />
        );
      }

    render() {

        return (
            <div>
            <Container className="bottomLinksCont" fluid>
                <Row>
                    <Col sm>{this.renderBottomLink(data[0][0])}</Col>
                    <Col sm>{this.renderBottomLink(data[0][1])}</Col>
                    <Col sm>{this.renderBottomLink(data[0][2])}</Col>
                </Row>
                <Row>
                    <Col sm>{this.renderBottomLink(data[0][3])}</Col>
                    <Col sm>{this.renderBottomLink(data[0][4])}</Col>
                    <Col sm>{this.renderBottomLink(data[0][5])}</Col>
                </Row>
                <Row>
                    <Col sm>{this.renderBottomLink(data[0][6])}</Col>
                    <Col sm>{this.renderBottomLink(data[0][7])}</Col>
                    <Col sm>{this.renderBottomLink(data[0][8])}</Col>
                </Row>
            </Container>
            <Footer />
            </div>
        )
    }
}

// ========================================
export default BottomLinksFooter;

BottomLinksFooter.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

BottomLinksFooter.defaultProps = {
    href: '#404',
    label: 'LinkNotFound'
}

