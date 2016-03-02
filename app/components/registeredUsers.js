var React = require('react');
var RegisteredUsers = React.createClass({
    render: function () {
        var registeredUsers = this.props.users.map(function(user) {
            console.log(user['name']);
            return (
                <li>{user.name} - {user.goal}</li>
            )
        })
        return (
            <ul id="registered-users">
                {registeredUsers}
            </ul>
        )
    }
});

module.export = RegisteredUsers;
