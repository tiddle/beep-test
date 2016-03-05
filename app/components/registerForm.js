import React, { Component } from 'react';
import Firebase from 'firebase';

class RegisterForm extends Component{
    constructor() {
        super();
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

    render() {
        return (
            <form className="registration-form" onSubmit={this.handleSubmit}>
                <ul>
                    <li><input
                        type="text"
                        placeholder="Your name"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                    /></li>
                    <li>
                        <input
                            type="text"
                            placeholder="Your email"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                        /></li>
                    <li>
                        <input
                            type="text"
                            placeholder="Your goal, eg 6.3"
                            value={this.state.goal}
                            onChange={this.handleGoalChange}
                        /></li>
                    <li>
                        <input type="submit" value="Register"/>
                    </li>
                </ul>
            </form>
        );
    }
}

export default RegisterForm;
