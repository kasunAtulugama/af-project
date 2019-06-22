import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import axios from 'axios';


class Instructor extends React.Component{

    constructor(props) {
        super(props);

        this.state = {instructors:[]};
    }

    componentDidMount(){
        let url=window.location.href;
        let cid=(url.split('?')[1]);
        let requestUrl = "http://localhost:4000/instructor";
        if (cid != null){
            requestUrl = "http://localhost:4000/instructor/"+cid;
        }

        console.log(requestUrl);

        axios.get(requestUrl).then(response=>{
            console.log(response.data);
            this.setState({instructors:response.data});
            console.log(this.state.instructors);

        }).catch(err=>{
            console.log(err);
        });
    }

    render(){

        const { instructors } = this.state
        return(

            <div>
                <h1>Instructors</h1>

                <Link className="ml-5 text-dark" to="/instructor/add-instructor">Add a new instructor</Link>

                <h2 className="bg-light h3">{this.state.instructors.instructor_name}</h2>

                <div className="card-body">
                    <table className="table">
                        <tr className="row border-bottom border-bottom-1 border-top border-top-0">
                            <th  className="col-4 ">
                               <h4 className="font-italic">ID:</h4>
                            </th>
                            <td className="col-8">
                               <p className="paragraph">{this.state.instructors._id}</p>
                            </td>
                        </tr>
                        <tr className="row border-bottom border-bottom-1 border-top border-top-0">
                            <th  className="col-4 ">
                               <h4 className="font-italic">Name:</h4>
                            </th>
                            <td className="col-8">
                               <p className="paragraph">{this.state.instructors.instructor_name}</p>
                            </td>
                        </tr>
                        <tr className="row border-bottom border-bottom-1 border-top border-top-0">
                            <th  className="col-4 ">
                               <h4 className="font-italic">Email:</h4>
                            </th>
                            <td className="col-8">
                               <p className="paragraph">{this.state.instructors.instructor_email}</p>
                            </td>
                        </tr>
                        <tr className="row border-bottom border-bottom-1 border-top border-top-0">
                            <th  className="col-4 ">
                               <h4 className="font-italic">Phone number:</h4>
                            </th>
                            <td className="col-8">
                               <p className="paragraph">{this.state.instructors.instructor_phone_number}</p>
                            </td>
                        </tr>
                        <tr className="row border-bottom border-bottom-1 border-top border-top-0">
                            <th  className="col-4 ">
                               <h4 className="font-italic">Address:</h4>
                            </th>
                            <td className="col-8">
                               <p className="paragraph">{this.state.instructors.instructor_address}</p>
                            </td>
                        </tr>
                    </table>
                </div>


            </div>
        )
    }
}

export default Instructor;