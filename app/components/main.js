/**
 * Created by Carlo on 02/03/16.
 */
import React from 'react';
var ReactDOM = require('react-dom');
//var RegisterForm = require('./registerForm');
//var RegisteredUsers = require('./registeredUsers');
var Register = require('./register');

ReactDOM.render(
    <Register url="/api/signup"/>,
    document.getElementById('content')
);
