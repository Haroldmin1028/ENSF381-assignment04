import { createContext } from 'react';
import React, {useState, useEffect} from 'react';
import AuthMessage from '../components/AuthMessage.js';
import DisplayStatus from '../components/DisplayStatus.js';

export const AuthContext = createContext();

async function verifyLogin(event) {
    
    
    
}

function LoginForm () {
    const [inputUsername, setInputUsername] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [popup, setPopup] = useState('');
    const [statusType, setStatusType] = useState("success");
    const [isLoading, setIsLoading] = useState(false);

    async function verifyLogin(event) {
        event.preventDefault();
        const backend = 'http://127.0.0.1:5000/login';

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

        try {
            const response = await fetch(backend, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: inputUsername,
                    password: inputPassword
                })
            });
            const data = await response.json();
                
            if (response.ok && data.success) {
                setPopup('Login successful! Redirecting...');
                setStatusType("success");
                setTimeout(() => {window.location.href = "/courses";}, 2000);
            }
            else {
                setPopup('Invalid username or password!');
                setStatusType("error");
            }
        }
        catch (error) {
            console.error('Error in submission');
        }
        finally {
            setIsLoading(false);
        }    
    };

    return (
        <AuthContext.Provider value={{ username: inputUsername, password: inputPassword }}>
        <main>
            <form>
                <div class = "login">
                    <h2>Login</h2>
                    <label for="name">Username:</label>
                    <input type="text" id="name" name="username" value={inputUsername} onChange={(e)=>setInputUsername(e.target.value)} required></input>
                    <br/>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" value={inputPassword} onChange={(e)=>setInputPassword(e.target.value)} required></input>
                    <br/>
                </div>
                <br/>
                <input type="submit" value="Login" className="loginbutton" onClick={verifyLogin} disabled={isLoading}></input>
                <br/>
                <a href = "/signup">Forgot Password?</a>
            </form>
            <br/>
            {popup && (<div class = "login-popup"><DisplayStatus message={popup} type={statusType}/></div>)}

        </main>
        </AuthContext.Provider>
    );
};

export default LoginForm;