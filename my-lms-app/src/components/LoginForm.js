import { createContext } from 'react';
import React, {useState, useEffect} from 'react';
import AuthMessage from '../components/AuthMessage.js';
import DisplayStatus from '../components/DisplayStatus.js';

export const AuthContext = createContext();

function LoginForm () {
    const [inputUsername, setInputUsername] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [popup, setPopup] = useState('');
    const [statusType, setStatusType] = useState("success");
    const [isLoading, setIsLoading] = useState(false);


    function verifyLogin() {
        if (inputUsername == '' || inputPassword == '') {
            setPopup('Username and password required.');
            setStatusType("error");
            return;
        }
        else if (inputPassword.length < 8) {
            setPopup('Password must be at least 8 characters.');
            setStatusType("error");
            return;
        }

        setIsLoading(true);

        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => {
            let i = 0;
            while (i < data.length) {
                const username = data[i].username;
                const password = data[i].email;
                    if (inputUsername === username && inputPassword === password) {
                            break;
                    }
                i++;
            }

            if (i != data.length) {
                setPopup('Login successful! Redirecting...');
                setStatusType("success");
                setTimeout(() => {window.location.href = "/courses";}, 2000);
            }
            else {
                setPopup('Invalid username or password!');
                setStatusType("error");
            }
            
        })
        .catch((error) => {
            console.error(error.message);
            setStatusType("error");
        })
        .finally(() => {
            setIsLoading(false);
        });
    }

    return (
        <AuthContext.Provider value={{ username: inputUsername, password: inputPassword }}>
        <main>
            <form>
                <div class = "login">
                    <h2>Login</h2>
                    <label for="name">Username:</label>
                    <input type="text" id="name" name="username" value={inputUsername} onChange={(e)=>setInputUsername(e.target.value)} required></input>
                    <br></br>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" value={inputPassword} onChange={(e)=>setInputPassword(e.target.value)} required></input>
                    <br></br>
                </div>
                <br></br>
                <input type="submit" value="Login" class="loginbutton" onClick={verifyLogin} disabled={isLoading}></input>
                <br></br>
                <a href = "">Forgot Password?</a>
            </form>
            
            {popup && (<div class = "login-popup"><DisplayStatus message={popup} type={statusType}/></div>)}

        </main>
        </AuthContext.Provider>
    );
};

export default LoginForm;