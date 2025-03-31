import React from 'react';
import { useContext } from 'react';
import {AuthContext} from './LoginForm.js';


function AuthMessage() {
    const { username, password } = useContext(AuthContext);
    return(
        <div>
            <h3>Authentication Info</h3>
            <p><strong>Username:</strong> {username || "Not entered"}</p>
            <p><strong>Password:</strong> {password ? "*".repeat(password.length) : "Not entered"}</p>
    </div>
    )
}

export default AuthMessage;