import React from "react";
import InstructorAddingForm from './forms/InstructorAddingForm'
import axios from 'axios';

class AddInstructer extends React.Component{

    submit = data => {
        console.log(data);
        let url=window.location.href;
        let cid=(url.split('?')[1]);
        if (cid != null){
            axios.put('http://localhost:4000/instructor/'+cid, data)
                .then(res => console.log(res));
        }
        else {

            axios.post('http://localhost:4000/instructor', data)
                .then(res => console.log(res));
        }
            this.setState({
                role: 'instructor',
                instructor_name: "",
                instructor_email: "",
                instructor_password: "",
                instructor_phone_number: "",
                instructor_address: ""
            })

            this.props.history.push('/');

    }

    render() {

        return(
            <div>
                <h2 className="header"> Add a new Instructor </h2>
                <InstructorAddingForm submit={this.submit}/>
            </div>
        )
    }

}

export default AddInstructer;