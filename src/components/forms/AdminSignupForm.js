import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import PropTypes from 'prop-types';
import InlineError from '../messages/InlineError';
import isEmail from 'validator/lib/isEmail';

class AdminSignupForm extends React.Component{
    state = {
        data: {
            role: 'admin',
            permission: "1",
            usr_name: '',
            usr_faculty: '',
            usr_department: '',
            usr_password: ''
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
        if(!isEmail(data.email)) errors.email = "Invalid email";
        if (!data.password) errors.password = "Can't be empty";
        return errors;
    };

    render() {
        const { data, errors } = this.state;

        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Field error={!!errors.usr_faculty}>
                    <label htmlFor="text">Faculty </label>
                    <input
                        type="text"
                        id = "usr_faculty"
                        name = "usr_faculty"
                        placeholder="EN,COM,BUS,MED,HS"
                        value = {data.usr_faculty}
                        onChange={this.onChange}
                    />
                </Form.Field>
                <Form.Field error={!!errors.usr_department}>
                    <label htmlFor="text">Department</label>
                    <input
                        type="text"
                        id = "usr_department"
                        name = "usr_department"
                        placeholder="SE,CS,DS,IM,ISE,EN,QS,AR,BM"
                        value = {data.usr_department}
                        onChange={this.onChange}
                    />
                </Form.Field>
                <Form.Field error={!!errors.usr_name}>
                    <label htmlFor="email">User name</label>
                    <input
                        type="email"
                        id="usr_name"
                        name="usr_name"
                        placeholder="example@example.com"
                        value={data.usr_name}
                        onChange={this.onChange}
                    />
                    {errors.usr_name && <InlineError text={errors.usr_name}/>}
                </Form.Field>
                <Form.Field error={!!errors.password}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="usr_password"
                        name="usr_password"
                        placeholder="Make it secure"
                        value={data.usr_password}
                        onChange={this.onChange}
                    />
                    {errors.usr_password && <InlineError text={errors.usr_password}/>}
                </Form.Field>
                <Button primary>Sign up</Button>
            </Form>
        );
    }
}

AdminSignupForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default AdminSignupForm;