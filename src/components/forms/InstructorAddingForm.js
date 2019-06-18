import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import InlineError from '../messages/InlineError';
import isEmail from 'validator/lib/isEmail';

class InstructorAddingForm extends React.Component{
    state = {
        data: {
            role: 'instructor',
            instructor_name: '',
            instructor_email: '',
            instructor_password: '',
            instructor_phone_number: '',
            instructor_address: ''
        },
        loading: false,
        errors: {}
    };

    onChange = e => this.setState
    ({
        data: {...this.state.data, [e.target.name]: e.target.value }
    });

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0){
            this.props.submit(this.state.data);
        }
    };

    validate = (data) => {
        const errors = {};
        if(!isEmail(data.instructor_email)) errors.instructor_email = "Invalid email";
        if (!data.instructor_email) errors.instructor_email = "Can't be empty";
        if (!data.instructor_name) errors.instructor_name = "Can't be empty";
        if (!data.instructor_password) errors.instructor_password = "Can't be empty";
        if (!data.instructor_phone_number) errors.instructor_phone_number = "Can't be empty";
        if (!data.instructor_address) errors.instructor_address = "Can't be empty";
        return errors;
    };

    render() {
        const { data, errors } = this.state;

        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Field error={!!errors.instructor_name}>
                    <label htmlFor="text">Name </label>
                    <input
                        type="text"
                        id = "instructor_name"
                        name = "instructor_name"
                        placeholder="Instructor name"
                        value = {data.instructor_name}
                        onChange={this.onChange}
                    />
                    {errors.instructor_name && <InlineError text={errors.instructor_name}/>}
                </Form.Field>
                <Form.Field error={!!errors.instructor_address}>
                    <label htmlFor="text">Address </label>
                    <input
                        type="text"
                        id = "instructor_address"
                        name = "instructor_address"
                        placeholder="Permanent address"
                        value = {data.instructor_address}
                        onChange={this.onChange}
                    />
                    {errors.instructor_address && <InlineError text={errors.instructor_address}/>}
                </Form.Field>
                <Form.Field error={!!errors.instructor_phone_number}>
                    <label htmlFor="text">Mobile Phone Number </label>
                    <input
                        type="text"
                        id = "instructor_phone_number"
                        name = "instructor_phone_number"
                        placeholder="+947XXXXXXXX"
                        value = {data.instructor_phone_number}
                        onChange={this.onChange}
                    />
                    {errors.instructor_phone_number && <InlineError text={errors.instructor_phone_number}/>}
                </Form.Field>
                <Form.Field  error={!!errors.instructor_email}>
                    <label htmlFor="text">Email</label>
                    <input
                        id = "instructor_email"
                        name = "instructor_email"
                        placeholder="Email"
                        value = {data.instructor_email}
                        onChange={this.onChange}
                    />
                    {errors.instructor_email && <InlineError text={errors.instructor_email}/>}
                </Form.Field>
                <Form.Field error={!!errors.instructor_password}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="instructor_password"
                        name="instructor_password"
                        value={data.instructor_password}
                        onChange={this.onChange}
                    />
                    {errors.instructor_password && <InlineError text={errors.instructor_password}/>}
                </Form.Field>
                <Button primary>Sign up</Button>
            </Form>
        );
    }
}

InstructorAddingForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default InstructorAddingForm;