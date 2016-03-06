/**
 * Created by Carlo on 02/03/16.
 */

import React, {Component} from 'react';
import Firebase from 'firebase';
import RegisterForm from './registerForm';
import RegisteredUsers from './registeredUsers';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }
    render() {
        return (
            <div>
                <RegisterForm />
                <RegisteredUsers />
            </div>
        )
    }
}

export default Register;
