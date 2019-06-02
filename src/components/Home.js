import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

const Home = () => (
    <div>
        <h1>Home working</h1>
        <Link to="/login">Login</Link>
    </div>
);

export default Home;