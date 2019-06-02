import React, { Component } from 'react';
import LoginForm from './forms/LoginForm';
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

class Login extends React.Component{

    submit = data => {
        console.log(data);
    };

    render(){
        return(
            <div>
                <h1>Login working</h1>

                <LoginForm submit={this.submit}/>
            </div>
        )
    }
}

export default Login;