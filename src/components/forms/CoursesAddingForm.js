import React from 'react';
import { Form, Button, Select } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import InlineError from '../messages/InlineError';

class CoursesAddingForm extends React.Component{
    state = {
        data: {
            course_name: '',
            course_id: '',
            course_credits: '',
            course_instructors: ''
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
        if (!data.course_name) errors.course_name = "Can't be empty";
        if (!data.course_id) errors.course_id = "Can't be empty";
        if (!data.course_credits) errors.course_credits = "Can't be empty";
        if (!data.course_instructors) errors.course_instructors = "Can't be empty";
        return errors;
    };

    render() {
        const { data, errors } = this.state;

        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Field error={!!errors.course_name}>
                    <label htmlFor="text">Course name</label>
                    <input
                        type="text"
                        id="course_name"
                        name="course_name"
                        placeholder="EX: Software Engineering"
                        value={data.course_name}
                        onChange={this.onChange}
                    />
                    {errors.course_name && <InlineError text={errors.course_name}/>}
                </Form.Field>
                <Form.Field error={!!errors.course_id}>
                    <label htmlFor="text">Course ID</label>
                    <input
                        type="text"
                        id="course_id"
                        name="course_id"
                        placeholder="EX: SE1050"
                        value={data.course_id}
                        onChange={this.onChange}
                    />
                    {errors.course_id && <InlineError text={errors.course_id}/>}
                </Form.Field>
                <Form.Field error={!!errors.course_credits}>
                    <label htmlFor="text">Number of credit points</label>
                    <input
                        type="text"
                        id="course_credits"
                        name="course_credits"
                        placeholder="1-4"
                        value={data.course_credits}
                        onChange={this.onChange}
                    />
                {errors.course_credits && <InlineError text={errors.course_credits}/>}
                </Form.Field>
                <Form.Field error={!!errors.course_instructors}>
                    <label htmlFor="text">Select instructors</label>
                    <select id='course_instructors' name='course_instructors' onChange={this.onChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option selected value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                {errors.course_instructors && <InlineError text={errors.course_instructors}/>}
                </Form.Field>
                <Button primary>Login</Button>
            </Form>
        );
    }
}
CoursesAddingForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default CoursesAddingForm;