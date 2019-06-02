import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component{
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Welcome to Code Life</h2>
                    <p>This is my first website with React Router and React bootstrap</p>
                    <link to="/profile">
                        <Button bsStyle="primary"> Profile </Button>
                    </link>
                </Jumbotron>
            </Grid>
        )
    }
}