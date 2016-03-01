/**
 * Created by Carlo on 01/03/16.
 */

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

var RegisterForm = React.createClass({
    mixins: [ReactFireMixin],
    getInitialState: function() {
        return {
            users: [],
        }
    },
    componentWillMount: function() {
        this.firebaseRef = new Firebase('https://boiling-fire-6401.firebaseio.com/beep-test/users');
    },
    handleNameChange: function(e) {
        this.setState({name: e.target.value});
    },
    handleEmailChange: function(e) {
        this.setState({email: e.target.value});
    },
    handleGoalChange: function(e) {
        this.setState({goal: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        this.firebaseRef.push({
            name: this.state.name,
            email: this.state.email,
            goal: this.state.goal
        });
    },
    render: function () {
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
});

ReactDOM.render(
    <Register url="/api/signup"/>,
    document.getElementById('content')
);
