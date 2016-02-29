var Register = React.createClass({
    getRegisteredUsers: function() {
        console.log('in here');
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    componentDidMount: function() {
        console.log('in here');
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
    getInitialState: function() {
        return {
            name: '',
            email: '',
            goal: ''
        }
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
        console.log(this.props);
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
                    value={this.state.name}
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
        ) ;
    }
})

ReactDOM.render(
    <Register url="/api/signup"/>,
    document.getElementById('content')
);
