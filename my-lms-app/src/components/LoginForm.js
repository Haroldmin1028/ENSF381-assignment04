import React from 'react';
import { createContext } from 'react';
//import './App.css';
/* import AuthMessage from './components/AuthMessage.js';
import DisplayStatus from './components/DisplayStatus.js'; */
const UsernameContext = createContext(null);
const PasswordContext = createContext(null);

function LoginForm () {
    return (
        <><div class="login">
            <label for="name">Username:</label>
            <input type="text" id="name" name="username" required></input>
            <br></br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required></input>
            <br></br>
        </div>
        <UsernameContext.Provider value={document.getElementById("name").textContent()}>
        </UsernameContext.Provider>
        <PasswordContext.Provider value={document.getElementById("password").textContent()}>
        </PasswordContext.Provider></>
    );
};

export default LoginForm;