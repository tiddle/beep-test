import React, { Component } from 'react';
import Firebase from 'firebase';
import TextField from 'material-ui/lib/TextField';
import RaisedButton from 'material-ui/lib/raised-button';
import './registerForm.scss';

class RegisterForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            goal: ''
        };
    }
    componentWillMount() {
        this.firebaseRef = new Firebase('https://boiling-fire-6401.firebaseio.com/beep-test/users');
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value});
    }
    handleGoalChange(e) {
        this.setState({goal: e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault();
        this.firebaseRef.push({
            name: this.state.name,
            email: this.state.email,
            goal: this.state.goal
        });
    }
    validateGoal(e) {
        console.log('in here');
        retur
    }

    render() {
        return (
            <form className="registration-form" onSubmit={this.handleSubmit.bind(this)}>
                <ul>
                    <li><TextField
                        hintText="Your name"
                        floatingLabelText="Name"
                        value={this.state.name}
                        onChange={this.handleNameChange.bind(this)}
                        errorText="This field is required"
                        fullWidth={true}
                    /></li>
                    <li>
                        <TextField
                            hintText="Your email"
                            floatingLabelText="Email"
                            value={this.state.email}
                            onChange={this.handleEmailChange.bind(this)}
                            errorText="This field is required"
                            fullWidth={true}
                        /></li>
                    <li>
                        <TextField
                            hintText="Your goal, eg 6.3"
                            floatingLabelText="Goal"
                            value={this.state.goal}
                            onChange={this.handleGoalChange.bind(this)}
                            validate={this.validateGoal.bind(this)}
                            errorText="This field is required"
                            fullWidth={true}
                        /></li>
                    <li className="button">
                        <RaisedButton label="Register" primary={true} type="submit"/>
                    </li>
                </ul>
            </form>
        );
    }
}


export default RegisterForm;
