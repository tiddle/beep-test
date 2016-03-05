import React, { Component } from 'react';

class RegisteredUsers extends Component{
    componentDidMount() {
        this.getRegisteredUsers();
    }
    getRegisteredUsers() {
        this.firebaseRef = new Firebase('https://boiling-fire-6401.firebaseio.com/beep-test/users/');
        this.firebaseRef.on('value', dataSnapshot => {
            this.users = [];
            dataSnapshot.forEach(childSnapshot => {
                var user = childSnapshot.val();
                user.key = childSnapshot.key();
                this.users.push(user);
            });

            this.setState({
                users: this.users
            });
        })
    }
    render() {
        var registeredUsers = this.state.users.map(function(user) {
            return (
                <li key={user.key}>{user.name} - {user.goal}</li>
            )
        })
        return (
            <ul id="registered-users">
                {registeredUsers}
            </ul>
        )
    }
}

export default RegisteredUsers;
