import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import Validator from 'validator';
import PropTypes from 'prop-types';
import InlineError from '../messages/InlineError';
import {forEach} from "react-bootstrap/es/utils/ElementChildren";
import {Link} from "react-router-dom";
import {userLoggedIn} from "../../actions/auth";
import axios from 'axios';
const concat = require("concat-stream")

class UploadAssignmentAnswerForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedFile: null,
            dashStudent: this.props.location.state,
            fileName: ""
        }
    }

    handleChanges=event=>{
        console.log(event.target.files[0]);

        this.setState({
            selectedFile:event.target.files[0],
            fileName:event.target.files[0].name,
            loaded: 0,
        });
        console.log(event.target.files[0].name);
    }

    uploadAssignment = () => {
        const data = new FormData();

        let stid = "IT16173064"; // Here you should get the loged in students id and assign it to the studentid variable
        let date = new Date();
        let curdate=date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate();
        let assignName = "DS - EJB";//this.state.dashStudent.assignment_name

        data.append('studentid',stid);
        data.append('assignmentname',assignName);
        data.append('date',curdate);
        data.append('filename',this.state.fileName);
        data.append('ploadFile',this.state.selectedFile);
        const config = { headers: { 'Content-Type': 'multipart/form-data' } };
        axios.post("http://localhost:4000/files/upload",data,{

        },config).then(res =>{
            console.log(res);
        })

    }



    render() {

        return (
          <div>
               <div className="container">
                <div className="offset-md-3 col-md-6">
                    <div className="form-group files">

                        <label>Upload Answer Here</label>
                        <input type="file" id="uploadFile" name="uploadFile" onChange={this.handleChanges} className="form-control-file"/>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.uploadAssignment}> Upload</button>
                </div>

              </div>
          </div>
        );
    }
}

export default UploadAssignmentAnswerForm;