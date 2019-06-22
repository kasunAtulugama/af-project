import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import axios from 'axios';

class InstructorView extends React.Component{

    constructor(props) {
        super(props);

    }

  componentDidMount(){
        let url=window.location.href;
        let cid=(url.split('?')[1]);

        console.log(cid);
        axios.get('http://localhost:4000/instructor/'+cid).then(response=>{
            console.log(response.data);
            //const user = response;
            //this.props.user = response;
            this.droplets = this.setState({ 'droplets': response });
            this.setState({instructors:response.data});
        }).catch(err=>{
                console.log(err);
            });
    }}

    render(){
        return(
            <div>
                <h1>Instructors</h1>

                <Link className="ml-5 text-dark" to="/instructor/add-instructor">Add a new instructor</Link>

                <h3>Current instructors</h3>

                <Table droplets={ this.state.droplets } />

                {/*<table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Role</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone number</th>
                            <th>Address</th>
                        </tr>
                    </thead>

                    <tbody>
                    <div droplets={ this.state.droplets }></div>
                    </tbody>
*/}
              {/*  </table>*/}
            </div>
        )
    }
}

const Table = ({ droplets }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Region</th>
                <th>Memory</th>
                <th>CPUs</th>
                <th>Disk Size</th>
            </tr>
            </thead>
            <tbody>
            {

                (droplets.length > 0) ? droplets.map( (droplet, index) => {
                    console.log(droplet)
                return (
                    <tr key={ index }>
                        <td>{ droplet._id }</td>
                        <td>{ droplet.role }</td>
                        <td>{ droplet.instructor_name }</td>
                        <td>{ droplet.instructor_email}</td>
                        <td>{ droplet.instructor_phone_number }</td>
                        <td>{ droplet.instructor_address }</td>

                    </tr>
                )
            }) : <tr><td colSpan="5">Loading...</td></tr> }
            </tbody>
        </table>
    );
}

export default InstructorView;