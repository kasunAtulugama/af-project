import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'react-icons-kit';
import {profile} from 'react-icons-kit/icomoon/profile';
import {pencil2} from 'react-icons-kit/icomoon/pencil2';
import {ic_delete} from 'react-icons-kit/md/ic_delete';
import './Home.css';
import axios from 'axios';


const InstructorDetails = props => (
    <tr className="d-md-table-row" >
            <td>{props.instructor._id}</td>
            <td>{props.instructor.role}</td>
            <td>{props.instructor.instructor_name}</td>
            <td>{props.instructor.instructor_email}</td>
            <td>{props.instructor.instructor_phone_number}</td>
            <td>{props.instructor.instructor_address}</td>
        <td>
            <Link to={"/instructor/view?"+props.instructor._id} ><Icon icon={profile}/> </Link>
            <Link to={"/instructor/add-instructor?"+props.instructor._id} ><Icon icon={pencil2}/> </Link>
            <Link to={"/instructor/add-instructor?"+props.instructor._id} ><Icon icon={ic_delete}/> </Link>
        </td>
    </tr>
);

function deleteOne(id){
    axios.delete('http://localhost:4000/instructor/'+id)
        .then(response=>{console.log("Deleteing " + id)});
}
class Instructor extends React.Component{

    constructor(props) {
        super(props);

        this.state = {instructors:[]};
    }

    componentDidMount(){

        axios.get('http://localhost:4000/instructor').then(response=>{
            console.log(response.data[0]);
            this.setState({instructors:response.data});
        }).catch(err=>{
                console.log(err);
            });
    }

    instructorList(){
        return this.state.instructors.map(function(currentInstructor,x){
            return <InstructorDetails instructor = {currentInstructor} key={x}/>;
        });
    }

    render(){
        return(
            <div>
                <h1>Instructors</h1>

                <Link className="ml-5 text-dark" to="/instructor/add-instructor">Add a new instructor</Link>
                <Link className="ml-5 text-dark" to="/instructor/view">new instructor</Link>

                <h3>Current instructors</h3>

                <table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Role</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone number</th>
                            <th>Address</th>
                            <th>Manage</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.instructorList() }
                    </tbody>

                </table>
            </div>
        )
    }
}

export default Instructor;