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
    const validateInputs = () => {
        var popupContent = ''
        const username = document.getElementById("name").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const email = document.getElementById("email").value;

        const checkUsername = validateUsername(username);
        const checkPassword = validatePassword(password);
        const doNotMatch = `Passwords do not match!`;
        const checkEmail = validateEmail(email);
        const success =`Signup successful! Redirecting to login...`;

        if (checkUsername === '' && checkPassword === '' && password === confirmPassword && checkEmail === '') {
            popupContent += success;
            setTimeout(() => {window.location.href = "/login";}, 2000);
        }
        if (checkUsername) {popupContent += checkUsername + '\n';}
        if (checkPassword) {popupContent += checkPassword + '\n';}
        if (password !== confirmPassword) {popupContent += doNotMatch + '\n';}
        if (checkEmail) {popupContent += checkEmail + '\n';}

        setPopup(popupContent);
    }

    return (
        <main>
            <h2>Sign Up</h2>
            <form>
                <div class = "login">
                    <label for="name">Username:</label>
                    <input type="text" id="name" name="username" required></input>
                    <br/>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required></input>
                    <br/>
                    <label for="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="password" required></input>
                    <br/>
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" required></input>
                </div>
                <br/>
                <input type="button" value = "Sign Up" className = "signupbutton" onClick = {validateInputs}></input>
            </form>
            <br/>
            <div id="signup-popup">{popup}</div>
            <br/>
        </main>
    )
}

export default RegForm;