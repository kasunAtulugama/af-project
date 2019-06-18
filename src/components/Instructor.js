import React, { Component } from 'react';
import AddInstructor from './forms/InstructorAddingForm';
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

class Instructor extends React.Component{

    submit = data => {
        console.log(data);
    };

    render(){
        return(
            <div>
                <h1>Manage advisers</h1>
                <Link className="ml-5 text-dark" to="/instructor/add-instructor">Add a new instructor</Link>

            </div>
        )
    }
}

export default Instructor;