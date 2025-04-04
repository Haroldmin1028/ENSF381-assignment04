import React from 'react';

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

function validateInputs() {
    const signupPopup = document.getElementById('signup-popup');
    signupPopup.innerHTML = '';
    const userDiv = document.createElement('div')
    var username = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var email = document.getElementById("email").value;

    const checkUsername = document.createElement('p');
    checkUsername.textContent = validateUsername(username);
    const checkPassword = document.createElement('p');
    checkPassword.textContent = validatePassword(password);
    const doNotMatch = document.createElement('p');
    doNotMatch.textContent = `Passwords do not match!`;
    const checkEmail = document.createElement('p');
    checkEmail.textContent = validateEmail(email);
    const success = document.createElement('p');
    success.textContent = `Signup successful! Redirecting to login...`;

    if (checkUsername.textContent == '' && checkPassword.textContent == '' && password == confirmPassword && checkEmail.textContent == '') {
        userDiv.appendChild(success);
        signupPopup.appendChild(userDiv);
        setTimeout(() => {window.location.href = "login.html";}, 2000);
    }
    if (checkUsername.textContent != '') {userDiv.appendChild(checkUsername);}
    if (checkPassword.textContent != '') {userDiv.appendChild(checkPassword);}
    if (password !== confirmPassword) {userDiv.appendChild(doNotMatch);}
    if (checkEmail.textContent != '') {userDiv.appendChild(checkEmail);}
    
    signupPopup.appendChild(userDiv);
}

function RegForm() {
    return (
        <main>
            <h2>Sign Up</h2>
            <form>
                <div class = "login">
                    <label for="name">Username:</label>
                    <input type="text" id="name" name="username" required></input>
                    <br></br>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required></input>
                    <br></br>
                    <label for="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="password" required></input>
                    <br></br>
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" required></input>
                </div>
                <br></br>
                <input type="button" value="Sign Up" class = "signupbutton" onclick="validateInputs()"></input>
            </form>
            <br></br>
            <div id="signup-popup"></div>
        </main>
    )
}

export default RegForm;