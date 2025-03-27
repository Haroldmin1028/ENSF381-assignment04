import React from 'react';
import './App.css';
import AuthMessage from './components/AuthMessage.js';
import DisplayStatus from './components/DisplayStatus.js';

function LoginForm () {
    return (
        <div class = "login">
            <label for="name">Username:</label>
            <input type="text" id="name" name="username" required></input>
            <br></br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required></input>
            <br></br>
        </div>
    );
};

export default LoginForm;
