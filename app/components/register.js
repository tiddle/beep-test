/**
 * Created by Carlo on 02/03/16.
 */

var React = require('react');
var Register = React.createClass({
    getRegisteredUsers: function() {
        this.firebaseRef = new Firebase('https://boiling-fire-6401.firebaseio.com/beep-test/users/');
        this.firebaseRef.on('value', function (dataSnapshot) {
            this.users = [];
            dataSnapshot.forEach(function(childSnapshot) {
                this.users.push(childSnapshot.val());
            }.bind(this));

            this.setState({
                data: this.users
            });
        }.bind(this));
    },
    componentDidMount: function() {
        this.getRegisteredUsers();
    },
    getInitialState: function() {
        return {data: []};
    },
    render: function() {
        return (
            <div>
                <RegisterForm />
                <RegisteredUsers users={this.state.data} />
            </div>
        )
    }
});

module.export = Register;
