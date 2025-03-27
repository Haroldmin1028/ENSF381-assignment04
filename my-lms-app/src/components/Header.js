import React from 'react';

function Header() {
    return (
        <div>
            <header>
                <img src = './images/logo.jpg' alt = "LMS logo" width = "10%" />
                <h1>LMS - Learning Management System</h1>
            </header>
            <div class = "navigation">
                <a href = "Homepage.js">Homepage</a>
                <a href = "CoursesPage.js">Courses</a>
                <a href = "LoginForm.js">Login</a>
            </div>
        </div>
    );
}

export default Header;