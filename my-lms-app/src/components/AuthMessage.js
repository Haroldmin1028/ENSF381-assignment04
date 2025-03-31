import React from 'react';
import { useContext } from 'react';
import {UsernameContext} from './LoginForm.js';
import {PasswordContext} from './LoginForm.js';
import DisplayStatus from './DisplayStatus.js';

function AuthMessage() {
    const username = useContext(UsernameContext);
    const password = useContext(PasswordContext);
    return(
        <div>
            <DisplayStatus type = {type} message = {message}/>
        </div>
    )
}

export default AuthMessage;