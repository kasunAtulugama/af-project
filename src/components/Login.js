import React, { Component } from 'react';
import LoginForm from './forms/LoginForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

class Login extends React.Component{

    submit = data =>
        this.props.login(data).then(() => this.props.history.push("/"));

    render(){
        return(
            <div>
                <h1>Login working</h1>

                <LoginForm submit={this.submit}/>
            </div>
        )
    }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
    login: PropTypes.func.isRequired
};

export default connect(null, { login })(Login);