import React, {useState} from 'react';

function validateUsername(username) {
        if (username.length < 3 || username.length > 20) {return `Invalid username (Must be between 3 and 20 characters long)`;}
        else if (/[^A-Za-z0-9_-]/.test(username)) {return `Invalid username (Must only include A-Z, 0-9, -, _)`;}
        else if (/[^A-Za-z]/.test(username[0])) {return `Invalid username (Must start with a letter)`;}
        else {return ``;}
    }

function validatePassword(password) {
    if (password.length < 8) {return `Invalid password (Must be at least 8 characters long)`;}
    else if (!/[A-Z]/.test(password)) {return `Invalid password (Must contain at least one uppercase letter)`;}
    else if (!/[a-z]/.test(password)) {return `Invalid password (Must contain at least one lowercase letter)`;}
    else if (!/[0-9]/.test(password)) {return `Invalid password (Must contain at least one number)`;}
    else if (!/[-!@#$%^&*()_=+[\]{}|;:'",.<>?/`~]/.test(password)) {return `Invalid password (Must contain at least one special character)`;}
    else if (password.includes(" ")) {return `Invalid password (Must not contain spaces)`;}
    else {return ``;}
}

function validateEmail(email) {
    if (!email.includes("@")) {return `Invalid email (Must contain '@')`;}
    else if (!email.includes(".")) {return `Invalid email (Must contain '.')`;}
    else if (email.includes(" ")) {return `Invalid email (Must not contain spaces)`;}
    else {return ``;}
}

function RegForm() {
    const [popup, setPopup] = useState();
    const [inputUsername, setInputUsername] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [inputConfirmPassword, setInputConfirmPassword] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function validateInputs(event) {
        event.preventDefault();
        const backend = 'http://127.0.0.1:5000/register';
        let popupContent = '';
        const checkUsername = validateUsername(inputUsername);
        const checkPassword = validatePassword(inputPassword);
        const doNotMatch = `Passwords do not match!`;
        const checkEmail = validateEmail(inputEmail);
        const success =`Signup successful! Redirecting to login...`;

        if (checkUsername || checkPassword || inputPassword !== inputConfirmPassword || checkEmail) {

            if (checkUsername) {popupContent += checkUsername + '\n';}
            if (checkPassword) {popupContent += checkPassword + '\n';}
            if (inputPassword !== inputConfirmPassword) {popupContent += doNotMatch + '\n';}
            if (checkEmail) {popupContent += checkEmail + '\n';}
            setPopup(popupContent);
            return;
        }
        setIsLoading(true);

        try {
            const response = await fetch(backend, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: inputUsername,
                    password: inputPassword,
                    email: inputEmail
                })
            });
            const data = await response.json();

            if (response.ok && data.success) {
                popupContent += success;
                setPopup(popupContent);
                setTimeout(() => {window.location.href = "/login";}, 2000);
            }
            else {
                setPopup('Registration submission failed.');
            }
        }
        catch (error) {
            console.error('Error in submission: ', error);
        }
        finally {
            setIsLoading(false);
        }
    }

    return (
        <main>
            <h2>Sign Up</h2>
            <form>
                <div class = "login">
                    <label for="name">Username:</label>
                    <input type="text" id="name" name="username" value={inputUsername} onChange={(e)=>setInputUsername(e.target.value)} required></input>
                    <br/>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" value={inputPassword} onChange={(e)=>setInputPassword(e.target.value)} required></input>
                    <br/>
                    <label for="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" value={inputConfirmPassword} onChange={(e)=>setInputConfirmPassword(e.target.value)} required></input>
                    <br/>
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" value={inputEmail} onChange={(e)=>setInputEmail(e.target.value)} required></input>
                </div>
                <br/>
                <input type="submit" value = "Sign Up" className = "signupbutton" onClick = {validateInputs} disabled = {isLoading}></input>
            </form>
            <br/>
            <div id="signup-popup">{popup}</div>
            <br/>
        </main>
    )
}

export default RegForm;